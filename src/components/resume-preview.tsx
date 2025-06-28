"use client";

import type { ResumeData } from "./resume-generator";

interface ResumePreviewProps {
	data: ResumeData;
	template?: "modern" | "classic" | "minimal" | "professional";
}

export function ResumePreview({
	data,
	template = "modern",
}: ResumePreviewProps) {
	const renderModernTemplate = () => (
		<div
			className='bg-white shadow-2xl rounded-lg overflow-hidden print:shadow-none print:rounded-none'
			id='resume-preview'>
			<div className='p-8 print:p-6'>
				{/* Header */}
				<div className='text-center mb-8'>
					<h1 className='text-4xl font-bold text-gray-900 mb-2'>
						{data.personalInfo.fullName || "Your Name"}
					</h1>
					<div className='flex flex-wrap justify-center gap-4 text-sm text-gray-600'>
						{data.personalInfo.email && (
							<span>{data.personalInfo.email}</span>
						)}
						{data.personalInfo.phone && <span>|</span>}
						{data.personalInfo.phone && (
							<span>{data.personalInfo.phone}</span>
						)}
						{data.personalInfo.website && <span>|</span>}
						{data.personalInfo.website && (
							<span>{data.personalInfo.website}</span>
						)}
					</div>
					{data.personalInfo.linkedin && (
						<div className='text-sm text-gray-600 mt-1'>
							{data.personalInfo.linkedin}
						</div>
					)}
				</div>

				{/* Summary */}
				{data.summary && (
					<section className='mb-8'>
						<h2 className='text-xl font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-1'>
							SUMMARY
						</h2>
						<p className='text-gray-700 ml-3 leading-relaxed'>
							{data.summary}
						</p>
					</section>
				)}

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					{/* Left Column */}
					<div className='space-y-8'>
						{/* Work Experience */}
						{data.experience.length > 0 && (
							<section>
								<h2 className='text-xl font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-1'>
									WORK EXPERIENCE
								</h2>
								<div className='space-y-6'>
									{data.experience.map((exp) => (
										<div key={exp.id}>
											<div className='flex justify-between items-start mb-2'>
												<div>
													<h3 className='font-semibold text-gray-900'>
														{exp.position}
													</h3>
													<p className='text-gray-700'>
														{exp.company}
													</p>
												</div>
												<span className='text-sm text-gray-600 whitespace-nowrap ml-4'>
													{exp.duration}
												</span>
											</div>
											<span className='list-disc list-inside text-sm text-gray-700 space-y-1'>
												{exp.description.map(
													(desc, index) =>
														desc.trim() && (
															<span key={index}>
																{desc}
															</span>
														)
												)}
											</span>
										</div>
									))}
								</div>
							</section>
						)}

						{/* Education */}
						{data.education.length > 0 && (
							<section>
								<h2 className='text-xl font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-1'>
									EDUCATION
								</h2>
								<div className='space-y-4'>
									{data.education.map((edu) => (
										<div key={edu.id}>
											<div className='flex justify-between items-start mb-1'>
												<div>
													<h3 className='font-semibold text-gray-900'>
														{edu.degree}
													</h3>
													<p className='text-gray-700'>
														{edu.institution}
													</p>
												</div>
												<span className='text-sm text-gray-600 whitespace-nowrap ml-4'>
													{edu.duration}
												</span>
											</div>
											{edu.description && (
												<p className='text-sm text-gray-700 mt-1'>
													{edu.description}
												</p>
											)}
										</div>
									))}
								</div>
							</section>
						)}
					</div>

					{/* Right Column */}
					<div className='space-y-8'>
						{/* Technical Skills */}
						{(data.skills.frontend.length > 0 ||
							data.skills.backend.length > 0 ||
							data.skills.database.length > 0 ||
							data.skills.tools.length > 0 ||
							data.skills.other.length > 0) && (
							<section>
								<h2 className='text-xl font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-1'>
									TECHNICAL SKILLS
								</h2>
								<div className='space-y-2 text-sm'>
									{data.skills.frontend.length > 0 && (
										<div>
											<span className='font-semibold text-gray-900'>
												Frontend:{" "}
											</span>
											<span className='text-gray-700'>
												{data.skills.frontend.join(
													", "
												)}
											</span>
										</div>
									)}
									{data.skills.backend.length > 0 && (
										<div>
											<span className='font-semibold text-gray-900'>
												Backend:{" "}
											</span>
											<span className='text-gray-700'>
												{data.skills.backend.join(", ")}
											</span>
										</div>
									)}
									{data.skills.database.length > 0 && (
										<div>
											<span className='font-semibold text-gray-900'>
												Database:{" "}
											</span>
											<span className='text-gray-700'>
												{data.skills.database.join(
													", "
												)}
											</span>
										</div>
									)}
									{data.skills.tools.length > 0 && (
										<div>
											<span className='font-semibold text-gray-900'>
												Tools & Platforms:{" "}
											</span>
											<span className='text-gray-700'>
												{data.skills.tools.join(", ")}
											</span>
										</div>
									)}
									{data.skills.other.length > 0 && (
										<div>
											<span className='font-semibold text-gray-900'>
												Other:{" "}
											</span>
											<span className='text-gray-700'>
												{data.skills.other.join(", ")}
											</span>
										</div>
									)}
								</div>
							</section>
						)}

						{/* Projects */}
						{data.projects.length > 0 && (
							<section>
								<h2 className='text-xl font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-1'>
									PROJECTS
								</h2>
								<div className='space-y-4'>
									{data.projects.map((project) => (
										<div key={project.id}>
											<div className='mb-1'>
												<h3 className='font-semibold text-gray-900'>
													{project.name}
												</h3>
												{project.technologies && (
													<p className='text-sm text-gray-600 italic'>
														{project.technologies}
													</p>
												)}
											</div>
											<span className='list-disc list-inside text-sm text-gray-700 space-y-1'>
												{project.description.map(
													(desc, index) =>
														desc.trim() && (
															<span key={index}>
																{desc}
															</span>
														)
												)}
											</span>
										</div>
									))}
								</div>
							</section>
						)}
					</div>
				</div>
			</div>
		</div>
	);

	const renderClassicTemplate = () => (
		<div
			className='bg-white shadow-2xl rounded-lg overflow-hidden print:shadow-none print:rounded-none max-w-4xl mx-auto'
			id='resume-preview'>
			<div className='p-8 print:p-6'>
				{/* Header - Exactly like your reference */}
				<div className='text-center mb-3'>
					<h1 className='text-4xl font-bold text-black mb-3 tracking-wide'>
						{data.personalInfo.fullName || "DHEERU RAJPOOT"}
					</h1>
					<div className='text-sm text-black flex justify-center items-center gap-2 mb-2'>
						{data.personalInfo.email && (
							<span>{data.personalInfo.email}</span>
						)}
						{data.personalInfo.email &&
							data.personalInfo.linkedin && <span>|</span>}
						{data.personalInfo.linkedin && (
							<span>{data.personalInfo.linkedin}</span>
						)}
					</div>
					{data.personalInfo.website && (
						<div className='text-sm text-black mb-4'>
							{data.personalInfo.website}
						</div>
					)}
				</div>

				{/* Summary */}
				{data.summary && (
					<section className='mb-3'>
						<h2 className='text-lg font-bold text-black mb-1 tracking-wide'>
							SUMMARY
						</h2>
						<div className='border-b-2 border-black mb-2'></div>
						<p className='text-black mx-3 text-justify'>
							{data.summary}
						</p>
					</section>
				)}

				{/* Work Experience */}
				{data.experience.length > 0 && (
					<section className='mb-3'>
						<h2 className='text-lg font-bold text-black mb-1 tracking-wide'>
							WORK EXPERIENCE
						</h2>
						<div className='border-b-2 border-black mb-2'></div>
						<div className='space-y-4'>
							{data.experience.map((exp) => (
								<div key={exp.id}>
									<div className='flex justify-between items-baseline mb-2'>
										<h3 className='font-bold text-black'>
											{exp.position} , {exp.company}
										</h3>
										<span className='text-black font-medium'>
											{exp.duration}
										</span>
									</div>
									<ul className='text-black mx-3'>
										{exp.description.map(
											(desc, index) =>
												desc.trim() && (
													<li key={index}>{desc}</li>
												)
										)}
									</ul>
								</div>
							))}
						</div>
					</section>
				)}

				{/* Projects */}
				{data.projects.length > 0 && (
					<section className='mb-3'>
						<h2 className='text-lg font-bold text-black mb-1 tracking-wide'>
							PROJECTS
						</h2>
						<div className='border-b-2 border-black mb-2'></div>
						<div className='space-y-4'>
							{data.projects.map((project) => (
								<div key={project.id}>
									<h3 className='font-bold text-black mb-1'>
										{project.name} | {project.technologies}
									</h3>
									<ul className='list-disc list-inside text-black space-y-1 ml-4'>
										{project.description.map(
											(desc, index) =>
												desc.trim() && (
													<li key={index}>{desc}</li>
												)
										)}
									</ul>
								</div>
							))}
						</div>
					</section>
				)}

				{/* Education */}
				{data.education.length > 0 && (
					<section className='mb-3'>
						<h2 className='text-lg font-bold text-black mb-1 tracking-wide'>
							EDUCATION
						</h2>
						<div className='border-b-2 border-black mb-2'></div>
						<div className='space-y-3'>
							{data.education.map((edu) => (
								<div key={edu.id}>
									<div className='flex justify-between items-baseline'>
										<div>
											<h3 className='font-bold text-black'>
												{edu.degree}
											</h3>
											<p className='text-black italic'>
												{edu.institution}
											</p>
										</div>
										<span className='text-black font-medium'>
											{edu.duration}
										</span>
									</div>
									{edu.description && (
										<p className='text-black mt-1'>
											{edu.description}
										</p>
									)}
								</div>
							))}
						</div>
					</section>
				)}

				{/* Technical Skills */}
				{(data.skills.frontend.length > 0 ||
					data.skills.backend.length > 0 ||
					data.skills.database.length > 0 ||
					data.skills.tools.length > 0 ||
					data.skills.other.length > 0) && (
					<section>
						<h2 className='text-lg font-bold text-black mb-1 tracking-wide'>
							TECHNICAL SKILLS
						</h2>
						<div className='border-b-2 border-black mb-2'></div>
						<div className='space-y-2'>
							{data.skills.frontend.length > 0 && (
								<div>
									<span className='font-bold text-black'>
										• Frontend:{" "}
									</span>
									<span className='text-black'>
										{data.skills.frontend.join(", ")}
									</span>
								</div>
							)}
							{data.skills.backend.length > 0 && (
								<div>
									<span className='font-bold text-black'>
										• Backend:{" "}
									</span>
									<span className='text-black'>
										{data.skills.backend.join(", ")}
									</span>
								</div>
							)}
							{data.skills.database.length > 0 && (
								<div>
									<span className='font-bold text-black'>
										• Database:{" "}
									</span>
									<span className='text-black'>
										{data.skills.database.join(", ")}
									</span>
								</div>
							)}
							{data.skills.tools.length > 0 && (
								<div>
									<span className='font-bold text-black'>
										• Tools & Platforms:{" "}
									</span>
									<span className='text-black'>
										{data.skills.tools.join(", ")}
									</span>
								</div>
							)}
							{data.skills.other.length > 0 && (
								<div>
									<span className='font-bold text-black'>
										• Other:{" "}
									</span>
									<span className='text-black'>
										{data.skills.other.join(", ")}
									</span>
								</div>
							)}
						</div>
					</section>
				)}
			</div>
		</div>
	);

	const renderMinimalTemplate = () => (
		<div
			className='bg-white shadow-2xl rounded-lg overflow-hidden print:shadow-none print:rounded-none max-w-4xl mx-auto'
			id='resume-preview'>
			<div className='p-8 print:p-6'>
				{/* Header - Minimal Style like reference */}
				<div className='mb-8'>
					<h1 className='text-3xl font-bold text-blue-600 mb-3 tracking-wide'>
						{data.personalInfo.fullName || "APURVA SHRIVASTAVA"}
					</h1>
					<div className='text-sm text-gray-700 space-y-1'>
						{data.personalInfo.location && (
							<div>{data.personalInfo.location}</div>
						)}
						<div className='flex items-center gap-2'>
							{data.personalInfo.phone && (
								<span>{data.personalInfo.phone}</span>
							)}
							{data.personalInfo.phone &&
								data.personalInfo.email && <span>|</span>}
							{data.personalInfo.email && (
								<span>{data.personalInfo.email}</span>
							)}
						</div>
					</div>
				</div>

				{/* Career Summary */}
				{data.summary && (
					<section className='mb-6'>
						<h2 className='text-lg font-bold text-blue-600 mb-2 border-b-2 border-blue-600 pb-1'>
							CAREER SUMMARY:
						</h2>
						<p className='text-gray-700 leading-relaxed mt-3'>
							{data.summary}
						</p>
					</section>
				)}

				{/* Education */}
				{data.education.length > 0 && (
					<section className='mb-6'>
						<h2 className='text-lg font-bold text-blue-600 mb-2 border-b-2 border-blue-600 pb-1'>
							EDUCATION:
						</h2>
						<div className='mt-3'>
							<h3 className='font-semibold text-gray-800 mb-2'>
								Academic Qualification
							</h3>
							<ul className='list-disc list-inside text-gray-700 space-y-1 ml-4'>
								{data.education.map((edu) => (
									<li key={edu.id}>
										{edu.degree} from {edu.institution} in{" "}
										{edu.duration}
									</li>
								))}
							</ul>
						</div>
					</section>
				)}

				{/* Work Experience */}
				{data.experience.length > 0 && (
					<section className='mb-6'>
						<h2 className='text-lg font-bold text-blue-600 mb-2 border-b-2 border-blue-600 pb-1'>
							WORK EXPERIENCE:
						</h2>
						<ul className='list-disc list-inside text-gray-700 space-y-2 mt-3 ml-4'>
							{data.experience.map((exp) => (
								<li key={exp.id}>
									{exp.position} at {exp.company} (
									{exp.duration})
									{exp.description.length > 0 && (
										<ul className='list-disc list-inside ml-4 mt-1 space-y-1'>
											{exp.description.map(
												(desc, index) =>
													desc.trim() && (
														<li key={index}>
															{desc}
														</li>
													)
											)}
										</ul>
									)}
								</li>
							))}
						</ul>
					</section>
				)}

				{/* Technical Skills as Strengths */}
				{(data.skills.frontend.length > 0 ||
					data.skills.backend.length > 0 ||
					data.skills.database.length > 0 ||
					data.skills.tools.length > 0 ||
					data.skills.other.length > 0) && (
					<section className='mb-6'>
						<h2 className='text-lg font-bold text-blue-600 mb-2 border-b-2 border-blue-600 pb-1'>
							STRENGTHS:
						</h2>
						<ul className='list-disc list-inside text-gray-700 space-y-1 mt-3 ml-4'>
							{data.skills.frontend.length > 0 && (
								<li>
									Frontend Technologies:{" "}
									{data.skills.frontend.join(", ")}
								</li>
							)}
							{data.skills.backend.length > 0 && (
								<li>
									Backend Technologies:{" "}
									{data.skills.backend.join(", ")}
								</li>
							)}
							{data.skills.database.length > 0 && (
								<li>
									Database Management:{" "}
									{data.skills.database.join(", ")}
								</li>
							)}
							{data.skills.tools.length > 0 && (
								<li>
									Tools & Platforms:{" "}
									{data.skills.tools.join(", ")}
								</li>
							)}
							{data.skills.other.length > 0 && (
								<li>
									Other Skills: {data.skills.other.join(", ")}
								</li>
							)}
						</ul>
					</section>
				)}

				{/* Projects as Hobbies/Interests */}
				{data.projects.length > 0 && (
					<section className='mb-6'>
						<h2 className='text-lg font-bold text-blue-600 mb-2 border-b-2 border-blue-600 pb-1'>
							KEY PROJECTS:
						</h2>
						<ul className='list-disc list-inside text-gray-700 space-y-2 mt-3 ml-4'>
							{data.projects.map((project) => (
								<li key={project.id}>
									<span className='font-semibold'>
										{project.name}
									</span>{" "}
									- {project.technologies}
									{project.description.length > 0 && (
										<ul className='list-disc list-inside ml-4 mt-1 space-y-1'>
											{project.description.map(
												(desc, index) =>
													desc.trim() && (
														<li key={index}>
															{desc}
														</li>
													)
											)}
										</ul>
									)}
								</li>
							))}
						</ul>
					</section>
				)}

				{/* Personal Details */}
				{(data.personalInfo.fullName ||
					data.personalInfo.email ||
					data.personalInfo.phone) && (
					<section className='mb-6'>
						<h2 className='text-lg font-bold text-blue-600 mb-2 border-b-2 border-blue-600 pb-1'>
							PERSONAL DETAILS:
						</h2>
						<div className='mt-3 space-y-2 text-gray-700'>
							{data.personalInfo.fullName && (
								<div className='flex'>
									<span className='w-32'>Name:</span>
									<span className='flex-1'>
										: {data.personalInfo.fullName}
									</span>
								</div>
							)}
							{data.personalInfo.email && (
								<div className='flex'>
									<span className='w-32'>Email:</span>
									<span className='flex-1'>
										: {data.personalInfo.email}
									</span>
								</div>
							)}
							{data.personalInfo.phone && (
								<div className='flex'>
									<span className='w-32'>Phone:</span>
									<span className='flex-1'>
										: {data.personalInfo.phone}
									</span>
								</div>
							)}
							{data.personalInfo.website && (
								<div className='flex'>
									<span className='w-32'>Website:</span>
									<span className='flex-1'>
										: {data.personalInfo.website}
									</span>
								</div>
							)}
							{data.personalInfo.linkedin && (
								<div className='flex'>
									<span className='w-32'>LinkedIn:</span>
									<span className='flex-1'>
										: {data.personalInfo.linkedin}
									</span>
								</div>
							)}
						</div>
					</section>
				)}

				{/* Declaration */}
				<section>
					<h2 className='text-lg font-bold text-blue-600 mb-2 border-b-2 border-blue-600 pb-1'>
						DECLARATION:
					</h2>
					<p className='text-gray-700 leading-relaxed mt-3'>
						I {data.personalInfo.fullName || "[Your Name]"} declare
						that all the above statements are correct to the best of
						my knowledge and belief.
					</p>
				</section>
			</div>
		</div>
	);

	const renderProfessionalTemplate = () => (
		<div
			className='bg-white shadow-2xl rounded-lg overflow-hidden print:shadow-none print:rounded-none max-w-4xl mx-auto'
			id='resume-preview'>
			<div className='flex min-h-[800px]'>
				{/* Left Sidebar */}
				<div className='w-1/3 bg-slate-800 text-white p-8 print:p-6'>
					<div className='mb-8'>
						<h1 className='text-2xl font-bold mb-4 text-white leading-tight'>
							{data.personalInfo.fullName || "Your Name"}
						</h1>
						<div className='space-y-3 text-sm text-slate-300'>
							{data.personalInfo.email && (
								<div className='flex items-center break-all'>
									<div className='w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0 mt-1'></div>
									<span>{data.personalInfo.email}</span>
								</div>
							)}
							{data.personalInfo.phone && (
								<div className='flex items-center'>
									<div className='w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0'></div>
									<span>{data.personalInfo.phone}</span>
								</div>
							)}
							{data.personalInfo.location && (
								<div className='flex items-center'>
									<div className='w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0'></div>
									<span>{data.personalInfo.location}</span>
								</div>
							)}
							{data.personalInfo.website && (
								<div className='flex items-center break-all'>
									<div className='w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0 mt-1'></div>
									<span>{data.personalInfo.website}</span>
								</div>
							)}
							{data.personalInfo.linkedin && (
								<div className='flex items-center break-all'>
									<div className='w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0 mt-1'></div>
									<span>{data.personalInfo.linkedin}</span>
								</div>
							)}
						</div>
					</div>

					{/* Skills */}
					{(data.skills.frontend.length > 0 ||
						data.skills.backend.length > 0 ||
						data.skills.database.length > 0 ||
						data.skills.tools.length > 0 ||
						data.skills.other.length > 0) && (
						<section className='mb-8'>
							<h2 className='text-lg font-bold mb-4 text-blue-300 border-b border-slate-600 pb-2 uppercase tracking-wide'>
								Technical Skills
							</h2>
							<div className='space-y-4 text-sm'>
								{data.skills.frontend.length > 0 && (
									<div>
										<h3 className='font-semibold text-slate-200 mb-2'>
											Frontend
										</h3>
										<div className='text-slate-300 leading-relaxed'>
											{data.skills.frontend.join(" • ")}
										</div>
									</div>
								)}
								{data.skills.backend.length > 0 && (
									<div>
										<h3 className='font-semibold text-slate-200 mb-2'>
											Backend
										</h3>
										<div className='text-slate-300 leading-relaxed'>
											{data.skills.backend.join(" • ")}
										</div>
									</div>
								)}
								{data.skills.database.length > 0 && (
									<div>
										<h3 className='font-semibold text-slate-200 mb-2'>
											Database
										</h3>
										<div className='text-slate-300 leading-relaxed'>
											{data.skills.database.join(" • ")}
										</div>
									</div>
								)}
								{data.skills.tools.length > 0 && (
									<div>
										<h3 className='font-semibold text-slate-200 mb-2'>
											Tools & Platforms
										</h3>
										<div className='text-slate-300 leading-relaxed'>
											{data.skills.tools.join(" • ")}
										</div>
									</div>
								)}
								{data.skills.other.length > 0 && (
									<div>
										<h3 className='font-semibold text-slate-200 mb-2'>
											Other Skills
										</h3>
										<div className='text-slate-300 leading-relaxed'>
											{data.skills.other.join(" • ")}
										</div>
									</div>
								)}
							</div>
						</section>
					)}

					{/* Education */}
					{data.education.length > 0 && (
						<section>
							<h2 className='text-lg font-bold mb-4 text-blue-300 border-b border-slate-600 pb-2 uppercase tracking-wide'>
								Education
							</h2>
							<div className='space-y-4 text-sm'>
								{data.education.map((edu) => (
									<div key={edu.id}>
										<h3 className='font-semibold text-slate-200 leading-tight mb-1'>
											{edu.degree}
										</h3>
										<p className='text-slate-300 mb-1'>
											{edu.institution}
										</p>
										<p className='text-slate-400 text-xs mb-2'>
											{edu.duration}
										</p>
										{edu.description && (
											<p className='text-slate-300 text-xs leading-relaxed'>
												{edu.description}
											</p>
										)}
									</div>
								))}
							</div>
						</section>
					)}
				</div>

				{/* Right Content */}
				<div className='w-2/3 p-8 print:p-6'>
					{/* Summary */}
					{data.summary && (
						<section className='mb-8'>
							<h2 className='text-xl font-bold text-slate-800 mb-4 border-b-2 border-blue-500 pb-2 uppercase tracking-wide'>
								Professional Summary
							</h2>
							<p className='text-gray-700 leading-relaxed text-justify'>
								{data.summary}
							</p>
						</section>
					)}

					{/* Experience */}
					{data.experience.length > 0 && (
						<section className='mb-8'>
							<h2 className='text-xl font-bold text-slate-800 mb-4 border-b-2 border-blue-500 pb-2 uppercase tracking-wide'>
								Professional Experience
							</h2>
							<div className='space-y-6'>
								{data.experience.map((exp) => (
									<div key={exp.id}>
										<div className='flex justify-between items-start mb-3'>
											<div className='flex-1'>
												<h3 className='font-bold text-slate-800 text-lg leading-tight mb-1'>
													{exp.position}
												</h3>
												<p className='text-blue-600 font-semibold'>
													{exp.company}
												</p>
											</div>
											<span className='text-sm text-slate-600 bg-slate-100 px-3 py-1 rounded-full font-medium whitespace-nowrap ml-4'>
												{exp.duration}
											</span>
										</div>
										<ul className='list-disc list-inside text-sm text-gray-700 space-y-1 ml-4 leading-relaxed'>
											{exp.description.map(
												(desc, index) =>
													desc.trim() && (
														<li key={index}>
															{desc}
														</li>
													)
											)}
										</ul>
									</div>
								))}
							</div>
						</section>
					)}

					{/* Projects */}
					{data.projects.length > 0 && (
						<section>
							<h2 className='text-xl font-bold text-slate-800 mb-4 border-b-2 border-blue-500 pb-2 uppercase tracking-wide'>
								Key Projects
							</h2>
							<div className='space-y-5'>
								{data.projects.map((project) => (
									<div key={project.id}>
										<div className='mb-2'>
											<h3 className='font-bold text-slate-800 text-lg leading-tight mb-1'>
												{project.name}
											</h3>
											<p className='text-sm text-blue-600 font-medium italic'>
												{project.technologies}
											</p>
										</div>
										<ul className='list-disc list-inside text-sm text-gray-700 space-y-1 ml-4 leading-relaxed'>
											{project.description.map(
												(desc, index) =>
													desc.trim() && (
														<li key={index}>
															{desc}
														</li>
													)
											)}
										</ul>
									</div>
								))}
							</div>
						</section>
					)}
				</div>
			</div>
		</div>
	);

	const templates = {
		modern: renderModernTemplate,
		classic: renderClassicTemplate,
		minimal: renderMinimalTemplate,
		professional: renderProfessionalTemplate,
	};

	return templates[template]();
}
