"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
	FileText,
	Download,
	Palette,
	Shield,
	Zap,
	Users,
	Star,
	ArrowRight,
	Sparkles,
	Target,
} from "lucide-react";

export function HomeSections() {
	const features = [
		{
			icon: <FileText className='h-8 w-8 text-blue-600' />,
			title: "Professional Templates",
			description:
				"Choose from 4 carefully designed templates that are ATS-friendly and recruiter-approved.",
		},
		{
			icon: <Palette className='h-8 w-8 text-purple-600' />,
			title: "Easy Customization",
			description:
				"Customize every section, add or remove fields, and make your resume truly yours.",
		},
		{
			icon: <Download className='h-8 w-8 text-green-600' />,
			title: "Instant Download",
			description:
				"Download your resume as a high-quality PDF with just one click. No watermarks, ever.",
		},
		{
			icon: <Shield className='h-8 w-8 text-red-600' />,
			title: "Privacy First",
			description:
				"Your data stays on your device. We don't store or share your personal information.",
		},
		{
			icon: <Zap className='h-8 w-8 text-yellow-600' />,
			title: "Real-time Preview",
			description:
				"See your changes instantly as you type. What you see is what you get.",
		},
		{
			icon: <Users className='h-8 w-8 text-indigo-600' />,
			title: "ATS Optimized",
			description:
				"All templates are designed to pass Applicant Tracking Systems used by employers.",
		},
	];

	const stats = [
		{ number: "50,000+", label: "Resumes Created" },
		{ number: "95%", label: "Success Rate" },
		{ number: "4.9/5", label: "User Rating" },
		{ number: "100%", label: "Free to Use" },
	];

	const testimonials = [
		{
			name: "Sarah Johnson",
			role: "Software Engineer",
			company: "Google",
			content:
				"ResumeGen helped me land my dream job at Google. The templates are clean and professional!",
			rating: 5,
		},
		{
			name: "Michael Chen",
			role: "Product Manager",
			company: "Microsoft",
			content:
				"The ATS optimization really works. I got 3x more interview calls after using ResumeGen.",
			rating: 5,
		},
		{
			name: "Emily Davis",
			role: "UX Designer",
			company: "Apple",
			content:
				"Beautiful templates and so easy to use. I created my resume in under 10 minutes!",
			rating: 5,
		},
	];

	const steps = [
		{
			step: "01",
			title: "Choose Template",
			description: "Select from our professionally designed templates",
		},
		{
			step: "02",
			title: "Fill Information",
			description: "Add your details using our intuitive form",
		},
		{
			step: "03",
			title: "Customize & Preview",
			description: "See real-time preview and make adjustments",
		},
		{
			step: "04",
			title: "Download PDF",
			description: "Get your professional resume instantly",
		},
	];

	return (
		<div className='space-y-20'>
			{/* Features Section */}
			<section className='py-20 px-4'>
				<div className='max-w-7xl mx-auto'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4'>
							Why Choose ResumeGen?
						</h2>
						<p className='text-xl text-gray-600 max-w-2xl mx-auto'>
							Everything you need to create a professional resume
							that gets you hired
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{features.map((feature, index) => (
							<Card
								key={index}
								className='bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
								<CardContent className='p-8 text-center'>
									<div className='mb-4 flex justify-center'>
										{feature.icon}
									</div>
									<h3 className='text-xl font-semibold text-gray-900 mb-3'>
										{feature.title}
									</h3>
									<p className='text-gray-600 leading-relaxed'>
										{feature.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className='py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600'>
				<div className='max-w-7xl mx-auto'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl font-bold text-white mb-4'>
							Trusted by Professionals Worldwide
						</h2>
						<p className='text-xl text-blue-100'>
							Join thousands who have successfully landed their
							dream jobs
						</p>
					</div>

					<div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
						{stats.map((stat, index) => (
							<div key={index} className='text-center'>
								<div className='text-4xl md:text-5xl font-bold text-white mb-2'>
									{stat.number}
								</div>
								<div className='text-blue-100 text-lg'>
									{stat.label}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* How It Works */}
			<section className='py-20 px-4'>
				<div className='max-w-7xl mx-auto'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl font-bold text-gray-900 mb-4'>
							How It Works
						</h2>
						<p className='text-xl text-gray-600'>
							Create your professional resume in 4 simple steps
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{steps.map((step, index) => (
							<div key={index} className='text-center relative'>
								<div className='bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4'>
									{step.step}
								</div>
								<h3 className='text-xl font-semibold text-gray-900 mb-3'>
									{step.title}
								</h3>
								<p className='text-gray-600'>
									{step.description}
								</p>
								{index < steps.length - 1 && (
									<ArrowRight className='hidden lg:block absolute top-8 -right-4 h-6 w-6 text-gray-400' />
								)}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className='py-20 px-4 bg-gray-50'>
				<div className='max-w-7xl mx-auto'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl font-bold text-gray-900 mb-4'>
							What Our Users Say
						</h2>
						<p className='text-xl text-gray-600'>
							Real success stories from real professionals
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{testimonials.map((testimonial, index) => (
							<Card
								key={index}
								className='bg-white border-0 shadow-lg'>
								<CardContent className='p-8'>
									<div className='flex mb-4'>
										{[...Array(testimonial.rating)].map(
											(_, i) => (
												<Star
													key={i}
													className='h-5 w-5 text-yellow-400 fill-current'
												/>
											)
										)}
									</div>
									<p className='text-gray-700 mb-6 italic'>
										&quot;{testimonial.content}&quot;
									</p>
									<div>
										<div className='font-semibold text-gray-900'>
											{testimonial.name}
										</div>
										<div className='text-gray-600'>
											{testimonial.role} at{" "}
											{testimonial.company}
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-20 px-4'>
				<div className='max-w-4xl mx-auto text-center'>
					<Card className='bg-gradient-to-r from-blue-600 to-indigo-600 border-0 shadow-2xl'>
						<CardContent className='p-12'>
							<Sparkles className='h-16 w-16 text-white mx-auto mb-6' />
							<h2 className='text-4xl font-bold text-white mb-4'>
								Ready to Land Your Dream Job?
							</h2>
							<p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
								Join thousands of professionals who have
								successfully created their perfect resume with
								ResumeGen. Start building yours today -
								it&apos;s completely free!
							</p>
							<Button
								size='lg'
								className='bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4'
								onClick={() =>
									window.scrollTo({
										top: 0,
										behavior: "smooth",
									})
								}>
								<Target className='mr-2 h-5 w-5' />
								Start Building Now
							</Button>
						</CardContent>
					</Card>
				</div>
			</section>
		</div>
	);
}
