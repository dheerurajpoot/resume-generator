"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Send } from "lucide-react";

export function ContactForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		category: "",
		message: "",
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 1000));

		setFormData({
			name: "",
			email: "",
			subject: "",
			category: "",
			message: "",
		});

		setIsSubmitting(false);
	};

	const handleChange = (field: string, value: string) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	return (
		<form onSubmit={handleSubmit} className='space-y-6'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				<div>
					<Label htmlFor='name'>Full Name *</Label>
					<Input
						id='name'
						value={formData.name}
						onChange={(e) => handleChange("name", e.target.value)}
						placeholder='Your full name'
						required
					/>
				</div>
				<div>
					<Label htmlFor='email'>Email Address *</Label>
					<Input
						id='email'
						type='email'
						value={formData.email}
						onChange={(e) => handleChange("email", e.target.value)}
						placeholder='your@email.com'
						required
					/>
				</div>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				<div>
					<Label htmlFor='category'>Category</Label>
					<Select
						value={formData.category}
						onValueChange={(value) =>
							handleChange("category", value)
						}>
						<SelectTrigger>
							<SelectValue placeholder='Select a category' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='general'>
								General Inquiry
							</SelectItem>
							<SelectItem value='support'>
								Technical Support
							</SelectItem>
							<SelectItem value='feature'>
								Feature Request
							</SelectItem>
							<SelectItem value='bug'>Bug Report</SelectItem>
							<SelectItem value='partnership'>
								Partnership
							</SelectItem>
							<SelectItem value='other'>Other</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div>
					<Label htmlFor='subject'>Subject *</Label>
					<Input
						id='subject'
						value={formData.subject}
						onChange={(e) =>
							handleChange("subject", e.target.value)
						}
						placeholder='Brief subject line'
						required
					/>
				</div>
			</div>

			<div>
				<Label htmlFor='message'>Message *</Label>
				<Textarea
					id='message'
					value={formData.message}
					onChange={(e) => handleChange("message", e.target.value)}
					placeholder='Tell us how we can help you...'
					rows={6}
					required
				/>
			</div>

			<Button
				type='submit'
				disabled={isSubmitting}
				className='w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'>
				{isSubmitting ? (
					"Sending..."
				) : (
					<>
						<Send className='mr-2 h-4 w-4' />
						Send Message
					</>
				)}
			</Button>
		</form>
	);
}
