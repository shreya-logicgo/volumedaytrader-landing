const inquiryService = require("../services/inquiry.service");
const asyncHandler = require("../utils/asyncHandler");

const submitInquiry = asyncHandler(async (req, res) => {
  const inquiry = await inquiryService.createInquiry(req.body);

  res.status(201).json({
    message:
      "Your email was successfully received and a ticket has been generated.",
    ticketNumber: inquiry.ticketNumber,
    inquiry: {
      id: inquiry._id,
      ticketNumber: inquiry.ticketNumber,
      firstName: inquiry.firstName,
      lastName: inquiry.lastName,
      email: inquiry.email,
      createdAt: inquiry.createdAt,
    },
  });
});

const listInquiries = asyncHandler(async (req, res) => {
  const inquiries = await inquiryService.listInquiries();

  res.json({
    count: inquiries.length,
    inquiries,
  });
});

module.exports = {
  submitInquiry,
  listInquiries,
};
