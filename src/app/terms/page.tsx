import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
	title: "Terms of Service - ResumeGen | Legal Terms and Conditions",
	description:
		"Read ResumeGen's terms of service, including user rights, responsibilities, and legal agreements for using our resume building platform.",
	keywords:
		"terms of service, legal terms, user agreement, resume generator terms",
};

export default function Terms() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'>
			<main className='py-20 px-4'>
				<div className='max-w-4xl mx-auto'>
					<div className='text-center mb-12'>
						<h1 className='text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4'>
							Terms of Service
						</h1>
						<p className='text-gray-600'>
							Last updated: December 23, 2024
						</p>
					</div>

					<Card className='bg-white/80 backdrop-blur-sm border-0 shadow-lg'>
						<CardContent className='p-8 prose prose-lg max-w-none'>
							<h2>1. Acceptance of Terms</h2>
							<p>
								By accessing and using ResumeGen (&quot;the
								Service&quot;), you accept and agree to be bound
								by the terms and provision of this agreement. If
								you do not agree to abide by the above, please
								do not use this service.
							</p>

							<h2>2. Description of Service</h2>
							<p>
								ResumeGen is an online resume building platform
								that allows users to create, customize, and
								download professional resumes. The service
								includes various templates, formatting options,
								and tools to help users create effective
								resumes.
							</p>

							<h2>3. User Accounts and Registration</h2>
							<p>
								While basic features of ResumeGen can be used
								without registration, certain features may
								require you to create an account. You are
								responsible for:
							</p>
							<ul>
								<li>
									Maintaining the confidentiality of your
									account information
								</li>
								<li>
									All activities that occur under your account
								</li>
								<li>
									Providing accurate and complete information
								</li>
								<li>
									Updating your information to keep it current
								</li>
							</ul>

							<h2>4. User Content and Data</h2>
							<p>
								You retain ownership of all content you create
								using ResumeGen, including:
							</p>
							<ul>
								<li>
									Personal information entered into resume
									forms
								</li>
								<li>
									Work experience, education, and skill
									descriptions
								</li>
								<li>Any uploaded documents or images</li>
							</ul>
							<p>
								By using our service, you grant ResumeGen a
								limited license to process, store, and display
								your content solely for the purpose of providing
								the service.
							</p>

							<h2>5. Acceptable Use Policy</h2>
							<p>You agree not to use ResumeGen to:</p>
							<ul>
								<li>
									Create resumes with false, misleading, or
									fraudulent information
								</li>
								<li>
									Violate any applicable laws or regulations
								</li>
								<li>
									Infringe on the intellectual property rights
									of others
								</li>
								<li>
									Upload malicious code, viruses, or harmful
									content
								</li>
								<li>
									Attempt to gain unauthorized access to our
									systems
								</li>
								<li>
									Use the service for any commercial purpose
									without permission
								</li>
							</ul>

							<h2>6. Privacy and Data Protection</h2>
							<p>
								Your privacy is important to us. Our Privacy
								Policy explains how we collect, use, and protect
								your information. By using ResumeGen, you
								consent to the collection and use of information
								in accordance with our Privacy Policy.
							</p>

							<h2>7. Intellectual Property</h2>
							<p>
								ResumeGen and its original content, features,
								and functionality are owned by ResumeGen and are
								protected by international copyright, trademark,
								patent, trade secret, and other intellectual
								property laws.
							</p>

							<h2>8. Service Availability</h2>
							<p>
								We strive to maintain high availability of our
								service, but we do not guarantee uninterrupted
								access. ResumeGen may be temporarily unavailable
								due to maintenance, updates, or technical
								issues.
							</p>

							<h2>9. Limitation of Liability</h2>
							<p>
								ResumeGen shall not be liable for any indirect,
								incidental, special, consequential, or punitive
								damages, including without limitation, loss of
								profits, data, use, goodwill, or other
								intangible losses, resulting from your use of
								the service.
							</p>

							<h2>10. Termination</h2>
							<p>
								We may terminate or suspend your account and bar
								access to the service immediately, without prior
								notice or liability, under our sole discretion,
								for any reason whatsoever, including without
								limitation if you breach the Terms.
							</p>

							<h2>11. Changes to Terms</h2>
							<p>
								We reserve the right to modify or replace these
								Terms at any time. If a revision is material, we
								will provide at least 30 days notice prior to
								any new terms taking effect.
							</p>

							<h2>12. Governing Law</h2>
							<p>
								These Terms shall be interpreted and governed by
								the laws of the State of California, United
								States, without regard to its conflict of law
								provisions.
							</p>

							<h2>13. Contact Information</h2>
							<p>
								If you have any questions about these Terms of
								Service, please contact us at:
							</p>
							<ul>
								<li>Email: legal@example.com</li>
								<li>
									Address: ResumeGen Legal Department, San
									Francisco, CA
								</li>
							</ul>

							<div className='bg-blue-50 p-6 rounded-lg mt-8'>
								<p className='text-sm text-blue-800 mb-0'>
									<strong>Note:</strong> These terms are
									effective as of the date listed above. Your
									continued use of ResumeGen after any changes
									to these terms constitutes acceptance of the
									new terms.
								</p>
							</div>
						</CardContent>
					</Card>
				</div>
			</main>
		</div>
	);
}
