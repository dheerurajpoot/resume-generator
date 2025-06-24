import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
	title: "Privacy Policy - ResumeGen | Data Protection and Privacy",
	description:
		"Learn how ResumeGen protects your privacy and handles your personal data. Read our comprehensive privacy policy for complete transparency.",
	keywords:
		"privacy policy, data protection, personal information, resume generator privacy",
};

export default function Privacy() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'>
			<main className='py-20 px-4'>
				<div className='max-w-4xl mx-auto'>
					<div className='text-center mb-12'>
						<h1 className='text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4'>
							Privacy Policy
						</h1>
						<p className='text-gray-600'>
							Last updated: June 24, 2025
						</p>
					</div>

					<Card className='bg-white/80 backdrop-blur-sm border-0 shadow-lg'>
						<CardContent className='p-8'>
							<h2>1. Introduction</h2>
							<p>
								ResumeGen (&quot;we,&quot; &quot;our,&quot; or
								&quot;us&quot;) is committed to protecting your
								privacy. This Privacy Policy explains how we
								collect, use, disclose, and safeguard your
								information when you use our resume building
								service.
							</p>

							<h2>2. Information We Collect</h2>

							<h3>2.1 Personal Information</h3>
							<p>
								When you use ResumeGen, we may collect the
								following types of personal information:
							</p>
							<ul>
								<li>
									<strong>Contact Information:</strong> Name,
									email address, phone number, mailing address
								</li>
								<li>
									<strong>Professional Information:</strong>{" "}
									Work experience, education, skills,
									certifications
								</li>
								<li>
									<strong>Account Information:</strong>{" "}
									Username, password, profile preferences
								</li>
								<li>
									<strong>Resume Content:</strong> All
									information you enter to create your resume
								</li>
							</ul>

							<h3>2.2 Technical Information</h3>
							<p>
								We automatically collect certain technical
								information, including:
							</p>
							<ul>
								<li>IP address and location data</li>
								<li>Browser type and version</li>
								<li>Device information and operating system</li>
								<li>Usage patterns and interaction data</li>
								<li>
									Cookies and similar tracking technologies
								</li>
							</ul>

							<h2>3. How We Use Your Information</h2>
							<p>
								We use the collected information for the
								following purposes:
							</p>
							<ul>
								<li>
									<strong>Service Provision:</strong> To
									create, format, and generate your resumes
								</li>
								<li>
									<strong>Account Management:</strong> To
									maintain your account and provide customer
									support
								</li>
								<li>
									<strong>Communication:</strong> To send
									service-related notifications and updates
								</li>
								<li>
									<strong>Improvement:</strong> To analyze
									usage patterns and improve our service
								</li>
								<li>
									<strong>Security:</strong> To protect
									against fraud and unauthorized access
								</li>
								<li>
									<strong>Legal Compliance:</strong> To comply
									with applicable laws and regulations
								</li>
							</ul>

							<h2>4. Information Sharing and Disclosure</h2>
							<p>
								We do not sell, trade, or rent your personal
								information to third parties. We may share your
								information only in the following circumstances:
							</p>
							<ul>
								<li>
									<strong>With Your Consent:</strong> When you
									explicitly authorize us to share your
									information
								</li>
								<li>
									<strong>Service Providers:</strong> With
									trusted third-party service providers who
									assist in operating our service
								</li>
								<li>
									<strong>Legal Requirements:</strong> When
									required by law, court order, or government
									request
								</li>
								<li>
									<strong>Business Transfers:</strong> In
									connection with a merger, acquisition, or
									sale of assets
								</li>
								<li>
									<strong>Safety and Security:</strong> To
									protect the rights, property, or safety of
									ResumeGen, our users, or others
								</li>
							</ul>

							<h2>5. Data Security</h2>
							<p>
								We implement appropriate technical and
								organizational measures to protect your personal
								information, including:
							</p>
							<ul>
								<li>
									Encryption of data in transit and at rest
								</li>
								<li>
									Regular security assessments and updates
								</li>
								<li>
									Access controls and authentication measures
								</li>
								<li>
									Employee training on data protection
									practices
								</li>
								<li>Incident response procedures</li>
							</ul>

							<h2>6. Data Retention</h2>
							<p>
								We retain your personal information only as long
								as necessary to fulfill the purposes outlined in
								this Privacy Policy, unless a longer retention
								period is required or permitted by law. When you
								delete your account, we will delete your
								personal information within 30 days, except
								where we are required to retain it for legal
								purposes.
							</p>

							<h2>7. Your Rights and Choices</h2>
							<p>
								Depending on your location, you may have the
								following rights regarding your personal
								information:
							</p>
							<ul>
								<li>
									<strong>Access:</strong> Request access to
									your personal information
								</li>
								<li>
									<strong>Correction:</strong> Request
									correction of inaccurate or incomplete
									information
								</li>
								<li>
									<strong>Deletion:</strong> Request deletion
									of your personal information
								</li>
								<li>
									<strong>Portability:</strong> Request a copy
									of your information in a portable format
								</li>
								<li>
									<strong>Restriction:</strong> Request
									restriction of processing in certain
									circumstances
								</li>
								<li>
									<strong>Objection:</strong> Object to
									processing based on legitimate interests
								</li>
								<li>
									<strong>Withdrawal:</strong> Withdraw
									consent where processing is based on consent
								</li>
							</ul>

							<h2>8. Cookies and Tracking Technologies</h2>
							<p>We use cookies and similar technologies to:</p>
							<ul>
								<li>Remember your preferences and settings</li>
								<li>
									Analyze website traffic and usage patterns
								</li>
								<li>
									Provide personalized content and features
								</li>
								<li>Improve our service performance</li>
							</ul>
							<p>
								You can control cookie settings through your
								browser preferences.
							</p>

							<h2>9. Third-Party Links</h2>
							<p>
								Our service may contain links to third-party
								websites or services. We are not responsible for
								the privacy practices or content of these third
								parties. We encourage you to review their
								privacy policies before providing any personal
								information.
							</p>

							<h2>10. Children&apos;s Privacy</h2>
							<p>
								ResumeGen is not intended for children under the
								age of 13. We do not knowingly collect personal
								information from children under 13. If we become
								aware that we have collected personal
								information from a child under 13, we will take
								steps to delete such information.
							</p>

							<h2>11. International Data Transfers</h2>
							<p>
								Your information may be transferred to and
								processed in countries other than your own. We
								ensure that such transfers comply with
								applicable data protection laws and implement
								appropriate safeguards.
							</p>

							<h2>12. Changes to This Privacy Policy</h2>
							<p>
								We may update this Privacy Policy from time to
								time. We will notify you of any material changes
								by posting the new Privacy Policy on this page
								and updating the &quot;Last updated&quot; date.
								Your continued use of the service after such
								changes constitutes acceptance of the updated
								Privacy Policy.
							</p>

							<h2>13. Contact Us</h2>
							<p>
								If you have any questions about this Privacy
								Policy or our privacy practices, please contact
								us at:
							</p>
							<ul>
								<li>
									<strong>Email:</strong>{" "}
									support@resume-generator.com
								</li>
								<li>
									<strong>Address:</strong> Resume Generator
									Support Team, 123 Tech Street, Silicon
									Valley, CA 94025
								</li>
								<li>
									<strong>Phone:</strong> +1 (408) 555-0123
								</li>
							</ul>

							<div className='bg-green-50 p-6 rounded-lg mt-8'>
								<div className='text-sm text-green-800 mb-0'>
									<strong>Your Privacy Matters:</strong> We
									are committed to transparency and protecting
									your personal information. If you have any
									concerns about how we handle your data,
									please don&apos;t hesitate to reach out to
									us.
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</main>
		</div>
	);
}
