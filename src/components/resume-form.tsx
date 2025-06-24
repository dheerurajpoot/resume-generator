"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Plus,
	Trash2,
	User,
	Briefcase,
	GraduationCap,
	Code,
	FolderOpen,
} from "lucide-react";
import type { ResumeData } from "./resume-generator";

interface ResumeFormProps {
	data: ResumeData;
	onChange: (data: ResumeData) => void;
}

export function ResumeForm({ data, onChange }: ResumeFormProps) {
	const updateData = <K extends keyof ResumeData>(
		section: K,
		value: ResumeData[K]
	) => {
		onChange({ ...data, [section]: value });
	};

	const addExperience = () => {
		const newExperience = {
			id: Date.now().toString(),
			position: "",
			company: "",
			duration: "",
			description: [""],
		};
		updateData("experience", [...data.experience, newExperience]);
	};

	const updateExperience = (
		id: string,
		field: keyof ResumeData["experience"][number],
		value: ResumeData["experience"][number][keyof ResumeData["experience"][number]]
	) => {
		const updated = data.experience.map((exp) =>
			exp.id === id ? { ...exp, [field]: value } : exp
		);
		updateData("experience", updated);
	};

	const removeExperience = (id: string) => {
		updateData(
			"experience",
			data.experience.filter((exp) => exp.id !== id)
		);
	};

	const addEducation = () => {
		const newEducation = {
			id: Date.now().toString(),
			degree: "",
			institution: "",
			duration: "",
			description: "",
		};
		updateData("education", [...data.education, newEducation]);
	};

	const updateEducation = (
		id: string,
		field: keyof ResumeData["education"][number],
		value: ResumeData["education"][number][keyof ResumeData["education"][number]]
	) => {
		const updated = data.education.map((edu) =>
			edu.id === id ? { ...edu, [field]: value } : edu
		);
		updateData("education", updated);
	};

	const removeEducation = (id: string) => {
		updateData(
			"education",
			data.education.filter((edu) => edu.id !== id)
		);
	};

	const addProject = () => {
		const newProject = {
			id: Date.now().toString(),
			name: "",
			technologies: "",
			description: [""],
		};
		updateData("projects", [...data.projects, newProject]);
	};

	const updateProject = (
		id: string,
		field: keyof ResumeData["projects"][number],
		value: ResumeData["projects"][number][keyof ResumeData["projects"][number]]
	) => {
		const updated = data.projects.map((proj) =>
			proj.id === id ? { ...proj, [field]: value } : proj
		);
		updateData("projects", updated);
	};

	const removeProject = (id: string) => {
		updateData(
			"projects",
			data.projects.filter((proj) => proj.id !== id)
		);
	};

	return (
		<div className='space-y-6'>
			{/* Personal Information */}
			<Card>
				<CardHeader>
					<CardTitle className='flex items-center gap-2'>
						<User className='h-5 w-5' />
						Personal Information
					</CardTitle>
				</CardHeader>
				<CardContent className='space-y-4'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						<div>
							<Label htmlFor='fullName'>Full Name</Label>
							<Input
								id='fullName'
								value={data.personalInfo.fullName}
								onChange={(e) =>
									updateData("personalInfo", {
										...data.personalInfo,
										fullName: e.target.value,
									})
								}
								placeholder='John Doe'
							/>
						</div>
						<div>
							<Label htmlFor='email'>Email</Label>
							<Input
								id='email'
								type='email'
								value={data.personalInfo.email}
								onChange={(e) =>
									updateData("personalInfo", {
										...data.personalInfo,
										email: e.target.value,
									})
								}
								placeholder='john@example.com'
							/>
						</div>
						<div>
							<Label htmlFor='phone'>Phone</Label>
							<Input
								id='phone'
								value={data.personalInfo.phone}
								onChange={(e) =>
									updateData("personalInfo", {
										...data.personalInfo,
										phone: e.target.value,
									})
								}
								placeholder='+1 (555) 123-4567'
							/>
						</div>
						<div>
							<Label htmlFor='website'>Website</Label>
							<Input
								id='website'
								value={data.personalInfo.website}
								onChange={(e) =>
									updateData("personalInfo", {
										...data.personalInfo,
										website: e.target.value,
									})
								}
								placeholder='www.johndoe.com'
							/>
						</div>
						<div>
							<Label htmlFor='linkedin'>LinkedIn</Label>
							<Input
								id='linkedin'
								value={data.personalInfo.linkedin}
								onChange={(e) =>
									updateData("personalInfo", {
										...data.personalInfo,
										linkedin: e.target.value,
									})
								}
								placeholder='linkedin.com/in/johndoe'
							/>
						</div>
						<div>
							<Label htmlFor='location'>Location</Label>
							<Input
								id='location'
								value={data.personalInfo.location}
								onChange={(e) =>
									updateData("personalInfo", {
										...data.personalInfo,
										location: e.target.value,
									})
								}
								placeholder='New York, NY'
							/>
						</div>
					</div>
				</CardContent>
			</Card>

			{/* Summary */}
			<Card>
				<CardHeader>
					<CardTitle>Professional Summary</CardTitle>
				</CardHeader>
				<CardContent>
					<Textarea
						value={data.summary}
						onChange={(e) => updateData("summary", e.target.value)}
						placeholder='Write a brief professional summary...'
						rows={4}
					/>
				</CardContent>
			</Card>

			{/* Work Experience */}
			<Card>
				<CardHeader>
					<CardTitle className='flex items-center justify-between'>
						<div className='flex items-center gap-2'>
							<Briefcase className='h-5 w-5' />
							Work Experience
						</div>
						<Button onClick={addExperience} size='sm'>
							<Plus className='h-4 w-4 mr-1' />
							Add Experience
						</Button>
					</CardTitle>
				</CardHeader>
				<CardContent className='space-y-4'>
					{data.experience.map((exp) => (
						<div
							key={exp.id}
							className='border rounded-lg p-4 space-y-3'>
							<div className='flex justify-between items-start'>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-3 flex-1'>
									<Input
										value={exp.position}
										onChange={(e) =>
											updateExperience(
												exp.id,
												"position",
												e.target.value
											)
										}
										placeholder='Job Title'
									/>
									<Input
										value={exp.company}
										onChange={(e) =>
											updateExperience(
												exp.id,
												"company",
												e.target.value
											)
										}
										placeholder='Company Name'
									/>
								</div>
								<Button
									variant='ghost'
									size='sm'
									onClick={() => removeExperience(exp.id)}
									className='text-red-600 hover:text-red-700'>
									<Trash2 className='h-4 w-4' />
								</Button>
							</div>
							<Input
								value={exp.duration}
								onChange={(e) =>
									updateExperience(
										exp.id,
										"duration",
										e.target.value
									)
								}
								placeholder='June 2024 - July 2024'
							/>
							<Textarea
								value={exp.description.join("\n")}
								onChange={(e) =>
									updateExperience(
										exp.id,
										"description",
										e.target.value.split("\n")
									)
								}
								placeholder='Describe your responsibilities and achievements...'
								rows={3}
							/>
						</div>
					))}
				</CardContent>
			</Card>

			{/* Education */}
			<Card>
				<CardHeader>
					<CardTitle className='flex items-center justify-between'>
						<div className='flex items-center gap-2'>
							<GraduationCap className='h-5 w-5' />
							Education
						</div>
						<Button onClick={addEducation} size='sm'>
							<Plus className='h-4 w-4 mr-1' />
							Add Education
						</Button>
					</CardTitle>
				</CardHeader>
				<CardContent className='space-y-4'>
					{data.education.map((edu) => (
						<div
							key={edu.id}
							className='border rounded-lg p-4 space-y-3'>
							<div className='flex justify-between items-start'>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-3 flex-1'>
									<Input
										value={edu.degree}
										onChange={(e) =>
											updateEducation(
												edu.id,
												"degree",
												e.target.value
											)
										}
										placeholder='Degree'
									/>
									<Input
										value={edu.institution}
										onChange={(e) =>
											updateEducation(
												edu.id,
												"institution",
												e.target.value
											)
										}
										placeholder='Institution'
									/>
								</div>
								<Button
									variant='ghost'
									size='sm'
									onClick={() => removeEducation(edu.id)}
									className='text-red-600 hover:text-red-700'>
									<Trash2 className='h-4 w-4' />
								</Button>
							</div>
							<Input
								value={edu.duration}
								onChange={(e) =>
									updateEducation(
										edu.id,
										"duration",
										e.target.value
									)
								}
								placeholder='2023 - 2025'
							/>
							<Textarea
								value={edu.description || ""}
								onChange={(e) =>
									updateEducation(
										edu.id,
										"description",
										e.target.value
									)
								}
								placeholder='Additional details (optional)...'
								rows={2}
							/>
						</div>
					))}
				</CardContent>
			</Card>

			{/* Technical Skills */}
			<Card>
				<CardHeader>
					<CardTitle className='flex items-center gap-2'>
						<Code className='h-5 w-5' />
						Technical Skills
					</CardTitle>
				</CardHeader>
				<CardContent className='space-y-4'>
					<div>
						<Label>Frontend</Label>
						<Input
							value={data.skills.frontend.join(", ")}
							onChange={(e) =>
								updateData("skills", {
									...data.skills,
									frontend: e.target.value
										.split(", ")
										.filter((s) => s.trim()),
								})
							}
							placeholder='React.js, Next.js, HTML5, CSS3, JavaScript'
						/>
					</div>
					<div>
						<Label>Backend</Label>
						<Input
							value={data.skills.backend.join(", ")}
							onChange={(e) =>
								updateData("skills", {
									...data.skills,
									backend: e.target.value
										.split(", ")
										.filter((s) => s.trim()),
								})
							}
							placeholder='Node.js, Express.js, Python'
						/>
					</div>
					<div>
						<Label>Database</Label>
						<Input
							value={data.skills.database.join(", ")}
							onChange={(e) =>
								updateData("skills", {
									...data.skills,
									database: e.target.value
										.split(", ")
										.filter((s) => s.trim()),
								})
							}
							placeholder='MongoDB, MySQL, PostgreSQL'
						/>
					</div>
					<div>
						<Label>Tools & Platforms</Label>
						<Input
							value={data.skills.tools.join(", ")}
							onChange={(e) =>
								updateData("skills", {
									...data.skills,
									tools: e.target.value
										.split(", ")
										.filter((s) => s.trim()),
								})
							}
							placeholder='Git, GitHub, Docker, AWS'
						/>
					</div>
					<div>
						<Label>Other</Label>
						<Input
							value={data.skills.other.join(", ")}
							onChange={(e) =>
								updateData("skills", {
									...data.skills,
									other: e.target.value
										.split(", ")
										.filter((s) => s.trim()),
								})
							}
							placeholder='REST APIs, GraphQL, Testing'
						/>
					</div>
				</CardContent>
			</Card>

			{/* Projects */}
			<Card>
				<CardHeader>
					<CardTitle className='flex items-center justify-between'>
						<div className='flex items-center gap-2'>
							<FolderOpen className='h-5 w-5' />
							Projects
						</div>
						<Button onClick={addProject} size='sm'>
							<Plus className='h-4 w-4 mr-1' />
							Add Project
						</Button>
					</CardTitle>
				</CardHeader>
				<CardContent className='space-y-4'>
					{data.projects.map((project) => (
						<div
							key={project.id}
							className='border rounded-lg p-4 space-y-3'>
							<div className='flex justify-between items-start'>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-3 flex-1'>
									<Input
										value={project.name}
										onChange={(e) =>
											updateProject(
												project.id,
												"name",
												e.target.value
											)
										}
										placeholder='Project Name'
									/>
									<Input
										value={project.technologies}
										onChange={(e) =>
											updateProject(
												project.id,
												"technologies",
												e.target.value
											)
										}
										placeholder='Technologies Used'
									/>
								</div>
								<Button
									variant='ghost'
									size='sm'
									onClick={() => removeProject(project.id)}
									className='text-red-600 hover:text-red-700'>
									<Trash2 className='h-4 w-4' />
								</Button>
							</div>
							<Textarea
								value={project.description.join("\n")}
								onChange={(e) =>
									updateProject(
										project.id,
										"description",
										e.target.value.split("\n")
									)
								}
								placeholder='Describe your project and key achievements...'
								rows={3}
							/>
						</div>
					))}
				</CardContent>
			</Card>
		</div>
	);
}
