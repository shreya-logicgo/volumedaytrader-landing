"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import Badge from "@/components/ui/badge/Badge";
import Heading from "@/components/ui/heading/Heading";
import SubHeading from "@/components/ui/subheading/SubHeading";
import FAQItem from "@/components/sections/faq/FAQItem";

interface FAQData {
	q: string;
	a: string;
}

export default function FAQ() {
	const badgeText = "FAQ's";
	const title = "Frequently Asked Questions";
	const description = "Everything you need to know about the platform, indicators, access, and trading workflow.";
	const searchPlaceholder = "Search FAQs";

	const QUESTIONS: FAQData[] = [
		{
			q: "What are volume indicators?",
			a: "Volume indicators help traders analyze buying and selling activity in the market to better understand momentum, liquidity, and possible trend direction.",
		},
		{
			q: "Is this platform beginner-friendly?",
			a: "Yes, the platform includes structured educational resources, guided analysis, and trading courses suitable for both beginners and experienced traders.",
		},
		{
			q: "Which markets can these indicators be used for?",
			a: "The indicators and analysis can be applied to Forex, Crypto, Stocks, Futures, and Indices markets.",
		},
		{
			q: "How does the platform work?",
			a: "The platform combines volume-based indicators, PTA reports, market analysis, and educational resources to help traders improve market understanding and decision-making.",
		},
		{
			q: "Is community access included?",
			a: "Yes, selected plans include access to the private trading community for discussions, updates, and shared market insights.",
		},
		{
			q: "Can I cancel my subscription anytime?",
			a: "Yes, subscription plans can be canceled anytime without long-term contracts.",
		},
	];

	const [searchTerm, setSearchTerm] = useState("");

	const filteredQuestions = QUESTIONS.filter(
		(faq) =>
			faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
			faq.a.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<section className="section-pb">
			<div className="mx-auto max-w-4xl text-center">
				<div className="relative max-w-[717px] flex flex-col gap-2 mx-auto">
					<Badge text={badgeText} />
				</div>

				<div className="relative z-10 mx-auto section-header-stack">
					<Heading className="mx-auto max-w-3xl" text={title} />
					<SubHeading className="mx-auto max-w-2xl" text={description} />
				</div>
			</div>

			<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-10">
				<div id="faq" className="flex flex-col items-center gap-9 scroll-mt-18 sm:scroll-mt-18 md:scroll-mt-16 lg:scroll-mt-25">
					<div className="w-full max-w-md relative group">
						<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none z-10">
							<Search className="w-5 h-5 text-[#999999] group-focus-within:text-white transition-colors" />
						</div>

						<input
							type="text"
							placeholder={searchPlaceholder}
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="w-full bg-white/5 border border-white/5 rounded-full py-3 pl-12 pr-12 text-white text-lg placeholder:text-[#999999] focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all duration-300 backdrop-blur-md"
						/>

						{searchTerm && (
							<button
								onClick={() => setSearchTerm("")}
								className="absolute cursor-pointer inset-y-0 right-4 flex items-center text-[#C7CCD2] hover:text-white transition-colors z-10"
								aria-label="Clear search"
							>
								<X className="w-4 h-4" />
							</button>
						)}
					</div>

					<div className="w-full max-w-3xl flex flex-col gap-4 ">
						{filteredQuestions.length > 0 ? (
							filteredQuestions.map((faq) => (
								<div key={faq.q}>
									<FAQItem question={faq.q} answer={faq.a} />
								</div>
							))
						) : (
							<div className="text-center py-10">
								<p className="text-[#C7CCD2] card-title-size1 font-hoves">No results found for "{searchTerm}"</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
