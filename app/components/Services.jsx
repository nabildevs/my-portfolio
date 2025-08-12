import { servicesData } from '@/assets/assets';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

const Services = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1, delay: 0.5 }}
			id="services"
			className="w-full px-[12%] py-20 scroll-mt-20"
		>
			<h4 className="text-center text-gray-500 mb-1 text-lg">
				What I Offer
			</h4>
			<h2 className="text-center text-5xl mb-16">Services</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
				{servicesData.map(
					({ icon: Icon, title, description }, index) => (
						<div
							key={index}
							className="group p-8 border border-gray-200 rounded-xl hover:border-amber-700 hover:shadow-lg transition-all duration-500 cursor-pointer"
						>
							<div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors duration-300">
								<Icon className="w-8 h-8 text-amber-700" />
							</div>
							<h3 className="text-xl font-sc_pro font-semibold mb-3 text-gray-800">
								{title}
							</h3>
							<p className="text-gray-600 text-sm leading-relaxed">
								{description}
							</p>
						</div>
					)
				)}
			</div>

			<div className="text-center mt-16">
				<div className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full hover:border-amber-700 transition-colors duration-300">
					<MessageCircle className="w-5 h-5 text-gray-600" />
					<span className="text-gray-700">
						Need other services? Let's discuss your project.
					</span>
				</div>
			</div>

			{/* Skills/Technologies Section */}
			<div className="mt-20 pt-8 pb-16">
				<div className="overflow-hidden relative">
					<div className="flex animate-slide-right space-x-26">
						{[
							'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
							'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
							'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
							'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg',
							'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
							'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
							'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
							'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
							'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
							'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
							'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
							'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
							'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
							'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
							'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
							'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
							//
							'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
							'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
							'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
							'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg',
							'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
							'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
							'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
							'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
							'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
							'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
							'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
							'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
							'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
							'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
							'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
							'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
						].map((logo, index) => (
							<div key={index} className="flex-shrink-0">
								<img
									src={logo}
									alt={`Technology ${index}`}
									className="w-12 h-12 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
									loading="lazy"
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Services;
