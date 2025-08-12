import { useState } from 'react';
import { socialLinks } from '@/assets/assets';
import emailjs from '@emailjs/browser';
import {
	AlertCircle,
	CheckCircle2,
	Mail,
	MessageCircle,
	Send,
} from 'lucide-react';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		title: '',
		message: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null);

	// EmailJS Configuration
	const EMAIL_SERVICE_ID = 'service_pb2ixfr';
	const EMAIL_TEMPLATE_ID = 'template_bqvpa7e';
	const EMAIL_PUBLIC_KEY = '-c4Zq229xlMMTeXDk';

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus(null);

		try {
			emailjs.init(EMAIL_PUBLIC_KEY);

			const templateParams = {
				from_name: formData.name,
				from_email: formData.email,
				title: formData.title,
				message: formData.message,
				to_name: 'Hasbi Nabil',
			};

			const response = await emailjs.send(
				EMAIL_SERVICE_ID,
				EMAIL_TEMPLATE_ID,
				templateParams
			);

			console.log('Email sent successfully:', response);
			setSubmitStatus('success');

			setFormData({
				name: '',
				email: '',
				title: '',
				message: '',
			});
		} catch (error) {
			console.error('Error sending email:', error);
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div id="contact" className="w-full px-[12%] py-20 scroll-mt-20">
			<h4 className="text-center text-gray=500 mb-1 text-lg">
				Get In Touch
			</h4>
			<h2 className="text-center text-5xl mb-16">Contact Me</h2>
			<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
				{/* Left Side - Contact Info & Social Links */}
				<div className="space-y-8">
					<div>
						<h3 className="text-2xl font-semibold text-gray-900 mb-4">
							Let's Build Your Project!
						</h3>
						<p className="text-gray-600 mb-6 text-justify">
							Whether you have a project in mind that you’d like
							to bring to life or you’re looking for a partner to
							collaborate with, I’m here to help. Let’s turn your
							ideas into reality. Feel free to reach out through
							any of the channels below or send me an email
							message.
						</p>
					</div>

					{/* Social Links */}
					<div>
						<h4 className="text-lg font-semibold text-gray-900 mb-4">
							Connect With Me
						</h4>
						<div className="grid grid-cols-2 gap-4">
							{socialLinks.map((social, index) => {
								const IconComponent = social.icon;
								return (
									<a
										key={index}
										href={social.url}
										target="_blank"
										rel="noopener noreferrer"
										className={`flex items-center gap-3 p-4 bg-gray-50 border border-gray-200 rounded-xl transition-all duration-300 ${social.color} group`}
									>
										<IconComponent className="w-5 h-5 text-gray-600 group-hover:scale-110 transition-transform duration-300" />
										<span className="font-sc_pro font-medium text-gray-700">
											{social.name}
										</span>
									</a>
								);
							})}
						</div>
					</div>

					<h4 className="text-lg font-semibold text-gray-900 mb-4">
						Quick Contact
					</h4>
					<div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
						<div className="space-y-2 text-gray-600">
							<p className="flex items-center gap-2">
								<Mail className="w-4 h-4" />
								<span>hasbinabil.work@gmail.com</span>
							</p>
							<p className="flex items-center gap-2">
								<MessageCircle className="w-4 h-4" />
								<span>+62 895 4033 24676 (Whatsapp)</span>
							</p>
						</div>
					</div>
				</div>

				{/* Right Side - Contact Form */}
				<div className="bg-white border border-gray-200 rounded-xl p-8">
					<h3 className="text-2xl font-semibold text-gray-900 mb-6">
						Send Me an Email
					</h3>

					{/* Status Messages */}
					{submitStatus === 'success' && (
						<div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-2">
							<CheckCircle2 className="w-5 h-5 text-green-600" />
							<span className="text-green-700">
								Message sent successfully! I'll get back to you
								soon.
							</span>
						</div>
					)}

					{submitStatus === 'error' && (
						<div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2">
							<AlertCircle className="w-5 h-5 text-red-600" />
							<span className="text-red-700">
								Failed to send message. Please try again or
								contact me directly.
							</span>
						</div>
					)}

					<form onSubmit={handleSubmit} className="space-y-6">
						{/* Name & Email Row */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Your Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleInputChange}
									required
									className="w-full bg-gray-50 px-4 py-3 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:border-amber-700 focus:border-2 transition-colors duration-200"
									placeholder="John Doe"
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Email Address
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleInputChange}
									required
									className="w-full bg-gray-50 px-4 py-3 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:border-amber-700 focus:border-2 transition-colors duration-200"
									placeholder="john@example.com"
								/>
							</div>
						</div>

						{/* title */}
						<div>
							<label
								htmlFor="title"
								className="block text-sm font-medium text-gray-700 mb-2"
							>
								title
							</label>
							<input
								type="text"
								id="title"
								name="title"
								value={formData.title}
								onChange={handleInputChange}
								required
								className="w-full bg-gray-50 px-4 py-3 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:border-amber-700 focus:border-2 transition-colors duration-200"
								placeholder="Project Title or Collaboration Idea"
							/>
						</div>

						{/* Message */}
						<div>
							<label
								htmlFor="message"
								className="block text-sm font-medium text-gray-700 mb-2"
							>
								Message
							</label>
							<textarea
								id="message"
								name="message"
								value={formData.message}
								onChange={handleInputChange}
								required
								rows={5}
								className="w-full bg-gray-50 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-amber-700 focus:border-2 focus:bg-white transition-colors duration-200 resize-none"
								placeholder="Describe your project or how we can work together..."
							/>
						</div>

						{/* Submit Button */}
						<button
							type="submit"
							disabled={isSubmitting}
							className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
								isSubmitting
									? 'bg-gray-400 text-gray-600 cursor-not-allowed'
									: 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg cursor-pointer'
							}`}
						>
							{isSubmitting ? (
								<>
									<div className="w-4 h-4 border-2 border-gray-600 border-t-transparent rounded-full animate-spin" />
									Sending...
								</>
							) : (
								<>
									Send Message
									<Send className="w-4 h-4" />
								</>
							)}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
