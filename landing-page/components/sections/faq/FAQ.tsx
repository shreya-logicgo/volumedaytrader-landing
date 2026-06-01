"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import Badge from "@/components/ui/badge/Badge";
import Heading from "@/components/ui/heading/Heading";
import SubHeading from "@/components/ui/subheading/SubHeading";
import FAQItem from "@/components/sections/faq/FAQItem";
import { useTranslation } from "react-i18next";

interface FAQData {
	key: "question1" | "question2" | "question3" | "question4" | "question5" | "question6";
}

export default function FAQ() {
	const { t } = useTranslation('translation');

	const QUESTIONS: FAQData[] = [
		{
			key: "question1",
		},
		{
			key: "question2",
		},
		{
			key: "question3",
		},
		{
			key: "question4",
		},
		{
			key: "question5",
		},
		{
			key: "question6",
		},
	];

	const [searchTerm, setSearchTerm] = useState("");

	const filteredQuestions = QUESTIONS.filter(
		(faq) => {
			const question = t(`faq.questions.${faq.key}.question`);
			const answer = t(`faq.questions.${faq.key}.answer`);
			const normalizedSearch = searchTerm.toLowerCase();
			return question.toLowerCase().includes(normalizedSearch) || answer.toLowerCase().includes(normalizedSearch);
		}
	);

	return (
		<section className="section-pb">
			<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
				<div className="relative max-w-[717px] flex flex-col gap-2 mx-auto">
					<Badge text={t('faq.badge')} />
				</div>

				<div className="relative z-10 mx-auto section-header-stack">
					<Heading className="mx-auto max-w-3xl px-1 sm:px-0" text={t('faq.title')} />
					<SubHeading className="mx-auto max-w-2xl px-2 sm:px-0" text={t('faq.description')} />
				</div>
			</div>

			<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 content-pt">
				<div id="faq" className="flex flex-col items-center gap-7 sm:gap-9 scroll-mt-18 sm:scroll-mt-18 md:scroll-mt-16 lg:scroll-mt-25">
					<div className="w-full max-w-full sm:max-w-md relative group">
						<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none z-10">
							<Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#999999] group-focus-within:text-white transition-colors" />
						</div>

						<input
							type="text"
							placeholder={t('faq.searchPlaceholder')}
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="
									w-full
									bg-white/5
									border border-white/5
									rounded-full
									py-2 sm:py-2
									pl-11 sm:pl-12
									pr-11 sm:pr-12
									text-sm sm:text-base lg:text-lg
									text-white
									caret-white
									placeholder:text-[#A7ADBE]
									focus:outline-none
									focus:border-white/20
									focus:bg-white/10
									transition-all duration-300
									backdrop-blur-md
								"
						/>

						{searchTerm && (
							<button
								onClick={() => setSearchTerm("")}
								className="absolute cursor-pointer inset-y-0 right-4 flex items-center text-white hover:text-white transition-colors z-10"
								aria-label={t('faq.clearSearch')}
							>
								<X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
							</button>
						)}
					</div>

					<div className="w-full max-w-3xl flex flex-col gap-4 sm:gap-5">
						{filteredQuestions.length > 0 ? (
							filteredQuestions.map((faq) => (
								<div key={faq.key}>
									<FAQItem
										question={t(`faq.questions.${faq.key}.question`)}
										answer={t(`faq.questions.${faq.key}.answer`)}
									/>
								</div>
							))
						) : (
							<div className="text-center py-10 px-4">
								<p className="text-[#C7CCD2] text-base sm:card-title-size1 font-hoves">{t('faq.noResults', { searchTerm })}</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
