import type { Metadata } from "next";
import { ResumeGenerator } from "@/components/resume-generator";

export const metadata: Metadata = {
	title: "Resume Generator - Create Professional Resumes Online | Free Resume Builder",
	description:
		"Create stunning, professional resumes in minutes with our free online resume generator. Choose from beautiful templates, customize your design, and download instantly.",
	keywords:
		"resume generator, resume builder, CV maker, professional resume, free resume, online resume creator",
	openGraph: {
		title: "Resume Generator - Create Professional Resumes Online",
		description:
			"Build your perfect resume with our intuitive online generator. Professional templates, easy customization, instant download.",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Resume Generator - Create Professional Resumes Online",
		description:
			"Build your perfect resume with our intuitive online generator.",
	},
};

export default function Home() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'>
			<main>
				<ResumeGenerator />
			</main>
		</div>
	);
}
