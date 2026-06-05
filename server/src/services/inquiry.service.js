const Inquiry = require("../models/inquiry.model");
const emailService = require("./email.service");
const { generateTicketNumber } = require("../utils/ticketNumber");

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateInquiryPayload(body) {
  const firstName = body.firstName?.trim();
  const lastName = body.lastName?.trim();
  const email = body.email?.trim().toLowerCase();
  const phone = body.phone?.trim() || "";
  const message = body.message?.trim();

  if (!firstName || !lastName || !email || !message) {
    const err = new Error(
      "firstName, lastName, email, and message are required"
    );
    err.statusCode = 400;
    throw err;
  }

  if (!EMAIL_RE.test(email)) {
    const err = new Error("A valid email address is required");
    err.statusCode = 400;
    throw err;
  }

  if (message.length < 10) {
    const err = new Error("Message must be at least 10 characters");
    err.statusCode = 400;
    throw err;
  }

  return { firstName, lastName, email, phone, message };
}

async function createInquiry(body) {
  const data = validateInquiryPayload(body);
  const ticketNumber = generateTicketNumber();

  const inquiry = await Inquiry.create({
    ...data,
    ticketNumber,
  });

  await emailService.sendInquiryEmails(inquiry);

  return inquiry;
}

async function listInquiries() {
  return Inquiry.find().sort({ createdAt: -1 }).lean();
}

module.exports = {
  createInquiry,
  listInquiries,
};
