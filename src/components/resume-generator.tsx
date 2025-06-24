"use client";

import { useState, useEffect } from "react";
import { ResumeForm } from "./resume-form";
import { ResumePreview } from "./resume-preview";
import { Button } from "@/components/ui/button";
import { Download, Eye, Edit } from "lucide-react";
import { TemplateShowcase } from "./template-showcase";
import { HomeSections } from "./home-sections";

export interface ResumeData {
	personalInfo: {
		fullName: string;
		email: string;
		phone: string;
		website: string;
		linkedin: string;
		location: string;
	};
	summary: string;
	experience: Array<{
		id: string;
		position: string;
		company: string;
		duration: string;
		description: string[];
	}>;
	education: Array<{
		id: string;
		degree: string;
		institution: string;
		duration: string;
		description?: string;
	}>;
	skills: {
		frontend: string[];
		backend: string[];
		database: string[];
		tools: string[];
		other: string[];
	};
	projects: Array<{
		id: string;
		name: string;
		technologies: string;
		description: string[];
	}>;
}

const initialData: ResumeData = {
	personalInfo: {
		fullName: "",
		email: "",
		phone: "",
		website: "",
		linkedin: "",
		location: "",
	},
	summary: "",
	experience: [],
	education: [],
	skills: {
		frontend: [],
		backend: [],
		database: [],
		tools: [],
		other: [],
	},
	projects: [],
};

// Utility to replace oklch() colors with supported hex colors

type ColorProp = "color" | "backgroundColor" | "borderColor";
function replaceOklchColors(element: HTMLElement) {
	const elements = element.querySelectorAll("*");
	elements.forEach((el) => {
		const style = window.getComputedStyle(el);
		(["color", "backgroundColor", "borderColor"] as ColorProp[]).forEach(
			(prop) => {
				const value = style[prop];
				if (typeof value === "string" && value.startsWith("oklch")) {
					if (prop === "backgroundColor") {
						(el as HTMLElement).style.backgroundColor = "#fff";
					} else if (prop === "color" || prop === "borderColor") {
						(el as HTMLElement).style[prop] = "#000";
					}
				}
			}
		);
	});
}

export function ResumeGenerator() {
	const [resumeData, setResumeData] = useState<ResumeData>(initialData);
	const [currentView, setCurrentView] = useState<"form" | "preview">("form");
	const [selectedTemplate, setSelectedTemplate] = useState<
		"modern" | "classic" | "minimal" | "professional"
	>("modern");

	// Load data from localStorage on component mount
	useEffect(() => {
		const savedData = localStorage.getItem("resumeData");
		if (savedData) {
			try {
				setResumeData(JSON.parse(savedData));
			} catch (error) {
				console.error("Error loading saved resume data:", error);
			}
		}
	}, []);

	const handleDataChange = (data: ResumeData) => {
		setResumeData(data);
		// Save to localStorage whenever data changes
		localStorage.setItem("resumeData", JSON.stringify(data));
	};

	const handleDownload = async () => {
		if (typeof window === "undefined") return;

		const element = document.getElementById("resume-preview-content");
		if (!element) {
			console.error("Resume preview element not found");
			return;
		}

		try {
			// Replace oklch() colors with supported colors before PDF generation
			replaceOklchColors(element as HTMLElement);

			const html2pdf = (await import("html2pdf.js")).default;
			const opt = {
				margin: [0.2, 0.2, 0.2, 0.2],
				filename: `${
					resumeData.personalInfo.fullName || "Resume"
				}_Resume.pdf`,
				image: { type: "jpeg", quality: 1 },
				html2canvas: {
					scale: 3,
					useCORS: true,
					letterRendering: true,
					allowTaint: false,
					backgroundColor: "#fff",
				},
				jsPDF: {
					unit: "in",
					format: "a4",
					orientation: "portrait",
					compress: true,
				},
			};

			await html2pdf().set(opt).from(element).save();
		} catch (error) {
			console.error("Error generating PDF:", error);
		}
	};

	return (
		<div className='min-h-screen'>
			{/* Hero Section */}
			<section className='py-20 px-4 text-center'>
				<div className='max-w-4xl mx-auto'>
					<h1 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6'>
						Create Your Perfect Resume
					</h1>
					<p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
						Build a professional resume in minutes with our
						intuitive generator. Choose from beautiful templates and
						customize every detail.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
						<Button
							size='lg'
							className='bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
							onClick={() => setCurrentView("form")}>
							<Edit className='mr-2 h-5 w-5' />
							Start Building
						</Button>
						<Button
							size='lg'
							variant='outline'
							className='bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
							onClick={() => setCurrentView("preview")}>
							<Eye className='mr-2 h-5 w-5' />
							Preview Resume
						</Button>
					</div>
				</div>
			</section>

			{/* Main Content */}
			<section className='py-12 px-4'>
				<div className='max-w-7xl mx-auto'>
					{/* Template Selector and View Toggle */}
					<div className='flex flex-col items-center gap-6 mb-8'>
						<div className='bg-white rounded-lg p-1 shadow-lg'>
							<Button
								variant={
									currentView === "form" ? "default" : "ghost"
								}
								onClick={() => setCurrentView("form")}
								className='mr-1'>
								<Edit className='mr-2 h-4 w-4' />
								Edit Resume
							</Button>
							<Button
								variant={
									currentView === "preview"
										? "default"
										: "ghost"
								}
								onClick={() => setCurrentView("preview")}>
								<Eye className='mr-2 h-4 w-4' />
								Preview
							</Button>
						</div>

						<div className='w-full max-w-4xl'>
							<h3 className='text-lg font-semibold text-center mb-4'>
								Choose Your Template
							</h3>
							<TemplateShowcase
								selectedTemplate={selectedTemplate}
								onTemplateSelect={setSelectedTemplate}
							/>
						</div>
					</div>

					<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
						<div
							className={`${
								currentView === "form"
									? "block"
									: "hidden lg:block"
							}`}>
							<ResumeForm
								data={resumeData}
								onChange={handleDataChange}
							/>
						</div>
						<div
							className={`${
								currentView === "preview"
									? "block"
									: "hidden lg:block"
							}`}>
							<div className='sticky top-24'>
								<div className='flex justify-between items-center mb-4'>
									<h2 className='text-2xl font-bold text-gray-800'>
										Resume Preview
									</h2>
									<Button
										onClick={handleDownload}
										className='bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700'>
										<Download className='mr-2 h-4 w-4' />
										Download PDF
									</Button>
								</div>
								{/* Only this content will be captured for PDF */}
								<div
									id='resume-preview-content'
									className='resume-pdf'>
									<ResumePreview
										data={resumeData}
										template={selectedTemplate}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Additional Home Sections */}
			<HomeSections />
		</div>
	);
}

// TIP: For even better print/PDF fidelity, consider adding a print stylesheet in globals.css targeting .resume-pdf and @media print.
