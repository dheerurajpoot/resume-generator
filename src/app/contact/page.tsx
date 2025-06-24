import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
	title: "Contact Us - ResumeGen | Get Help with Resume Building",
	description:
		"Get in touch with the ResumeGen team. We're here to help with your resume building questions, feedback, and support requests.",
	keywords:
		"contact resume generator, resume builder support, customer service, help with resume",
};

export default function Contact() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'>
			<main className='py-20 px-4'>
				<div className='max-w-6xl mx-auto'>
					{/* Hero Section */}
					<div className='text-center mb-16'>
						<h1 className='text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6'>
							Get in Touch
						</h1>
						<p className='text-xl text-gray-600 max-w-2xl mx-auto'>
							Have questions about ResumeGen? Need help with your
							resume? We&apos;d love to hear from you and help you
							succeed.
						</p>
					</div>

					<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
						{/* Contact Information */}
						<div className='lg:col-span-1 space-y-6'>
							<Card className='bg-white/80 backdrop-blur-sm border-0 shadow-lg'>
								<CardContent className='p-6'>
									<div className='flex items-center mb-4'>
										<Mail className='h-6 w-6 text-blue-600 mr-3' />
										<h3 className='text-lg font-semibold text-gray-900'>
											Email Us
										</h3>
									</div>
									<p className='text-gray-600 mb-2'>
										For general inquiries:
									</p>
									<a
										href='mailto:hello@resumegen.com'
										className='text-blue-600 hover:text-blue-700'>
										hello@resumegen.com
									</a>
									<p className='text-gray-600 mt-4 mb-2'>
										For support:
									</p>
									<a
										href='mailto:support@resumegen.com'
										className='text-blue-600 hover:text-blue-700'>
										support@resumegen.com
									</a>
								</CardContent>
							</Card>

							<Card className='bg-white/80 backdrop-blur-sm border-0 shadow-lg'>
								<CardContent className='p-6'>
									<div className='flex items-center mb-4'>
										<Clock className='h-6 w-6 text-green-600 mr-3' />
										<h3 className='text-lg font-semibold text-gray-900'>
											Response Time
										</h3>
									</div>
									<p className='text-gray-600'>
										We typically respond to all inquiries
										within 24 hours during business days.
									</p>
								</CardContent>
							</Card>

							<Card className='bg-white/80 backdrop-blur-sm border-0 shadow-lg'>
								<CardContent className='p-6'>
									<div className='flex items-center mb-4'>
										<MessageSquare className='h-6 w-6 text-purple-600 mr-3' />
										<h3 className='text-lg font-semibold text-gray-900'>
											FAQ
										</h3>
									</div>
									<p className='text-gray-600 mb-4'>
										Check out our frequently asked questions
										for quick answers to common queries.
									</p>
									<a
										href='#'
										className='text-purple-600 hover:text-purple-700 font-medium'>
										View FAQ →
									</a>
								</CardContent>
							</Card>

							<Card className='bg-white/80 backdrop-blur-sm border-0 shadow-lg'>
								<CardContent className='p-6'>
									<div className='flex items-center mb-4'>
										<MapPin className='h-6 w-6 text-indigo-600 mr-3' />
										<h3 className='text-lg font-semibold text-gray-900'>
											Location
										</h3>
									</div>
									<p className='text-gray-600'>
										We&apos;re a remote-first team serving
										users worldwide, with our headquarters
										in San Francisco, CA.
									</p>
								</CardContent>
							</Card>
						</div>

						{/* Contact Form */}
						<div className='lg:col-span-2'>
							<Card className='bg-white/80 backdrop-blur-sm border-0 shadow-lg'>
								<CardContent className='p-8'>
									<h2 className='text-2xl font-bold text-gray-900 mb-6'>
										Send us a Message
									</h2>
									<ContactForm />
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
