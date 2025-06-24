import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Heart } from "lucide-react";

export const metadata: Metadata = {
	title: "About Us - ResumeGen | Professional Resume Builder",
	description:
		"Learn about ResumeGen, our mission to help job seekers create professional resumes, and the team behind our innovative resume building platform.",
	keywords:
		"about resume generator, resume builder team, professional resume creation, career development",
};

export default function About() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'>
			<main className='py-20 px-4'>
				<div className='max-w-4xl mx-auto'>
					{/* Hero Section */}
					<div className='text-center mb-16'>
						<h1 className='text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6'>
							About ResumeGen
						</h1>
						<p className='text-xl text-gray-600 max-w-2xl mx-auto'>
							We&apos;re on a mission to help job seekers create
							professional, ATS-friendly resumes that stand out in
							today&apos;s competitive job market.
						</p>
					</div>

					{/* Mission & Vision */}
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
						<Card className='bg-white/80 backdrop-blur-sm border-0 shadow-lg'>
							<CardContent className='p-8'>
								<div className='flex items-center mb-4'>
									<Target className='h-8 w-8 text-blue-600 mr-3' />
									<h2 className='text-2xl font-bold text-gray-900'>
										Our Mission
									</h2>
								</div>
								<p className='text-gray-700 leading-relaxed'>
									To democratize professional resume creation
									by providing an intuitive, powerful, and
									accessible platform that helps everyone
									build resumes that get noticed by employers
									and ATS systems.
								</p>
							</CardContent>
						</Card>

						<Card className='bg-white/80 backdrop-blur-sm border-0 shadow-lg'>
							<CardContent className='p-8'>
								<div className='flex items-center mb-4'>
									<Award className='h-8 w-8 text-indigo-600 mr-3' />
									<h2 className='text-2xl font-bold text-gray-900'>
										Our Vision
									</h2>
								</div>
								<p className='text-gray-700 leading-relaxed'>
									To become the world&apos;s most trusted
									resume building platform, empowering
									millions of job seekers to land their dream
									jobs with professionally crafted resumes.
								</p>
							</CardContent>
						</Card>
					</div>

					{/* Why Choose Us */}
					<div className='mb-16'>
						<h2 className='text-3xl font-bold text-center text-gray-900 mb-12'>
							Why Choose ResumeGen?
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
							<div className='text-center'>
								<div className='bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
									<Users className='h-8 w-8 text-white' />
								</div>
								<h3 className='text-xl font-semibold text-gray-900 mb-3'>
									User-Friendly
								</h3>
								<p className='text-gray-600'>
									Intuitive interface designed for users of
									all technical levels. Create professional
									resumes in minutes, not hours.
								</p>
							</div>

							<div className='text-center'>
								<div className='bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
									<Award className='h-8 w-8 text-white' />
								</div>
								<h3 className='text-xl font-semibold text-gray-900 mb-3'>
									ATS-Optimized
								</h3>
								<p className='text-gray-600'>
									Our templates are designed to pass through
									Applicant Tracking Systems, ensuring your
									resume reaches human recruiters.
								</p>
							</div>

							<div className='text-center'>
								<div className='bg-gradient-to-r from-green-600 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
									<Heart className='h-8 w-8 text-white' />
								</div>
								<h3 className='text-xl font-semibold text-gray-900 mb-3'>
									Always Free
								</h3>
								<p className='text-gray-600'>
									We believe everyone deserves access to
									professional resume tools. Our core features
									are completely free to use.
								</p>
							</div>
						</div>
					</div>

					{/* Our Story */}
					<Card className='bg-white/80 backdrop-blur-sm border-0 shadow-lg'>
						<CardContent className='p-8'>
							<h2 className='text-3xl font-bold text-gray-900 mb-6 text-center'>
								Our Story
							</h2>
							<div className='prose prose-lg max-w-none text-gray-700'>
								<p className='mb-4'>
									ResumeGen was born from a simple
									observation: too many qualified candidates
									were being overlooked because their resumes
									didn&apos;t effectively showcase their
									skills and experience.
								</p>
								<p className='mb-4'>
									Our founders, having experienced the
									frustration of resume creation firsthand,
									set out to build a platform that would level
									the playing field. We wanted to create a
									tool that was powerful enough for
									professionals, yet simple enough for
									students and career changers.
								</p>
								<p className='mb-4'>
									Today, ResumeGen has helped thousands of job
									seekers create resumes that get results. We
									are constantly improving our platform based
									on user feedback and the latest hiring
									trends to ensure you have the best possible
									chance of landing your dream job.
								</p>
								<p>
									Whether you are a recent graduate, seasoned
									professional, or someone making a career
									change, we are here to help you put your
									best foot forward.
								</p>
							</div>
						</CardContent>
					</Card>
				</div>
			</main>
		</div>
	);
}
