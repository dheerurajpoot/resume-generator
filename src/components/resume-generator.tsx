"use client";

import { useState, useEffect } from "react";
import { ResumeForm } from "./resume-form";
import { ResumePreview } from "./resume-preview";
import { Button } from "@/components/ui/button";
import { Download, Eye, Edit } from "lucide-react";
import { TemplateShowcase } from "./template-showcase";
import { HomeSections } from "./home-sections";

let html2pdf: any;

if (typeof window !== "undefined") {
	html2pdf = require("html2pdf.js");
}

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

		const element = document.getElementById("resume-preview");
		if (!element) {
			console.error("Resume preview element not found");
			return;
		}

		try {
			// Configure html2pdf options
			const opt = {
				margin: [0.5, 0.5, 0.5, 0.5],
				filename: `${
					resumeData.personalInfo.fullName || "Resume"
				}_Resume.pdf`,
				image: { type: "jpeg", quality: 0.98 },
				html2canvas: {
					scale: 2,
					useCORS: true,
					letterRendering: true,
					allowTaint: false,
				},
				jsPDF: {
					unit: "in",
					format: "a4",
					orientation: "portrait",
					compress: true,
				},
			};

			// Generate and download PDF
			await html2pdf().set(opt).from(element).save();
		} catch (error) {
			console.error("Error generating PDF:", error);
			// Fallback to print method if html2pdf fails
			handlePrintFallback();
		}
	};

	const handlePrintFallback = () => {
		// Create a new window for printing as fallback
		const printWindow = window.open("", "_blank");
		if (!printWindow) return;

		// Get the resume content
		const resumeContent = document.getElementById("resume-preview");
		if (!resumeContent) return;

		// Create the print document with better styling
		printWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Resume - ${resumeData.personalInfo.fullName || "Resume"}</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.4;
            color: #000;
            background: white;
            font-size: 12pt;
          }
          .resume-content { 
            max-width: 800px; 
            margin: 0 auto; 
            padding: 0.5in;
          }
          h1 { font-size: 20pt; font-weight: bold; margin-bottom: 8pt; }
          h2 { font-size: 14pt; font-weight: bold; margin: 12pt 0 6pt 0; }
          h3 { font-size: 12pt; font-weight: bold; margin: 6pt 0 3pt 0; }
          p, li { font-size: 11pt; margin-bottom: 3pt; line-height: 1.3; }
          ul { margin-left: 18pt; }
          .text-blue-600 { color: #2563eb !important; }
          .text-slate-800 { color: #1e293b !important; }
          .bg-slate-800 { background-color: #1e293b !important; color: white !important; }
          .border-b-2 { border-bottom: 2px solid #2563eb !important; padding-bottom: 2pt; }
          .border-b { border-bottom: 1px solid #64748b !important; }
          .space-y-1 > * + * { margin-top: 3pt; }
          .space-y-2 > * + * { margin-top: 6pt; }
          .space-y-4 > * + * { margin-top: 12pt; }
          .mb-8 { margin-bottom: 16pt; }
          .mb-6 { margin-bottom: 12pt; }
          .mb-4 { margin-bottom: 8pt; }
          .mb-3 { margin-bottom: 6pt; }
          .mb-2 { margin-bottom: 4pt; }
          .mt-3 { margin-top: 6pt; }
          .ml-4 { margin-left: 12pt; }
          .p-8 { padding: 16pt; }
          .flex { display: flex; }
          .justify-between { justify-content: space-between; }
          .items-start { align-items: flex-start; }
          .items-center { align-items: center; }
          .w-1\\/3 { width: 33.333%; }
          .w-2\\/3 { width: 66.667%; }
          .min-h-\\[800px\\] { min-height: 600pt; }
          .break-all { word-break: break-all; }
          .leading-tight { line-height: 1.2; }
          .leading-relaxed { line-height: 1.4; }
          .text-justify { text-align: justify; }
          .uppercase { text-transform: uppercase; }
          .tracking-wide { letter-spacing: 0.05em; }
          @page { margin: 0.5in; size: A4; }
          @media print {
            body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            .bg-slate-800 { background-color: #1e293b !important; }
          }
        </style>
      </head>
      <body>
        <div class="resume-content">
          ${resumeContent.innerHTML}
        </div>
      </body>
    </html>
  `);

		printWindow.document.close();

		// Wait for content to load then print
		setTimeout(() => {
			printWindow.print();
			printWindow.close();
		}, 500);
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
							<div className='sticky top-24' id='resume-preview'>
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
								<ResumePreview
									data={resumeData}
									template={selectedTemplate}
								/>
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
