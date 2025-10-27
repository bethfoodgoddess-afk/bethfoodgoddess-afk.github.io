"use client"

import { useState } from "react"
import { Mail, MapPin, Clock, Phone, ShieldCheck, Rocket, MessageSquareHeart, Users, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

import { useTranslations } from 'next-intl'
import type { TranslationFunction } from '@/lib/types'

const getContactInfo = (t: TranslationFunction) => [
	{
		icon: Mail,
		title: t('contact.contactInfo.email.title'),
		value: t('contact.contactInfo.email.value'),
		link: "mailto:beth@wanderforlife.com",
		color: "text-bright-blue",
	},
	{
		icon: MapPin,
		title: t('contact.contactInfo.location.title'),
		value: t('contact.contactInfo.location.value'),
		link: "#",
		color: "text-bright-purple",
	},
]

export default function Contacto() {
	const t = useTranslations();
	const contactInfo = getContactInfo(t)
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	})

	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)

		const response = await fetch('/api/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		});

		setIsSubmitting(false);

		if (response.ok) {
			setSubmitStatus("success");
			setFormData({
				name: "",
				email: "",
				message: "",
			});
		} else {
			setSubmitStatus("error");
		}
	}

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-primary/10 via-bright-purple/10 to-bright-pink/10 py-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center max-w-4xl mx-auto">
						<h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-bright-purple">
								{t('contact.hero.title')}{" "}
								{t('contact.hero.titleHighlight')}
							</span>
						</h1>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
							{t('contact.hero.description')}
						</p>
					</div>
				</div>
			</section>

			{/* Contact Info Section */}
			<section className="py-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
						{contactInfo.map((info, index) => (
							<div key={index} className="text-center">
								<div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4`}>
									<info.icon className={`h-8 w-8 ${info.color}`} />
								</div>
								<h3 className="text-lg font-semibold text-foreground mb-2">
									{info.title}
								</h3>
								<a
									href={info.link}
									className="text-muted-foreground hover:text-foreground transition-colors duration-200"
								>
									{info.value}
								</a>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Form Section */}
			{/*
			<section className="py-20 bg-muted/30">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-2xl mx-auto">
						<h2 className="text-3xl font-bold text-foreground mb-6 text-center">
							{t('contact.form.title')}
						</h2>
						<p className="text-muted-foreground mb-8 text-center">
							{t('contact.form.description')}
						</p>

						{submitStatus === "success" && (
							<div className="bg-bright-green/10 border border-bright-green/20 rounded-lg p-4 mb-6">
								<p className="text-bright-green font-medium">
									{t('contact.form.successMessage')}
								</p>
							</div>
						)}

						{submitStatus === "error" && (
							<div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6">
								<p className="text-red-500 font-medium">
									{t('contact.form.errorMessage')}
								</p>
							</div>
						)}

						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
										{t('contact.form.fullNameLabel')}
									</label>
									<input
										type="text"
										id="name"
										name="name"
										required
										value={formData.name}
										onChange={handleChange}
										className="w-full px-4 py-3 rounded-lg border border-input bg-input text-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
										placeholder={t('contact.form.fullNamePlaceholder')}
									/>
								</div>
								<div>
									<label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
										{t('contact.form.emailLabel')}
									</label>
									<input
										type="email"
										id="email"
										name="email"
										required
										value={formData.email}
										onChange={handleChange}
										className="w-full px-4 py-3 rounded-lg border border-input bg-input text-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
										placeholder={t('contact.form.emailPlaceholder')}
									/>
								</div>
							</div>

							<div>
								<label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
									{t('contact.form.messageLabel')}
								</label>
								<textarea
									id="message"
									name="message"
									required
									rows={5}
									value={formData.message}
									onChange={handleChange}
									className="w-full px-4 py-3 rounded-lg border border-input bg-input text-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-colors resize-none"
									placeholder={t('contact.form.messagePlaceholder')}
								/>
							</div>

							<Button
								type="submit"
								size="lg"
								disabled={isSubmitting}
								className="w-full bg-gradient-to-r from-primary to-bright-purple hover:from-primary/90 hover:to-bright-purple/90"
							>
								{isSubmitting ? (
									t('contact.form.submitButton.submitting')
								) : (
									<>
										{t('contact.form.submitButton.text')}
										<Send className="ml-2 h-4 w-4" />
									</>
								)}
							</Button>
						</form>
					</div>
				</div>
			</section>
*/}
		</div>
	)
}