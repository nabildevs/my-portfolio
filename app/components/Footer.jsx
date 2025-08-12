import Image from 'next/image';
import { assets } from '@/assets/assets';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="w-full bg-gray-50 border-t border-gray-200">
			<div className="px-[12%] py-8">
				<div className="max-w-6xl mx-auto">
					<div className="flex flex-col items-center text-center space-y-5">
						<Image src={assets.logo} alt="Logo" className="w-42" />

						<p className="text-gray-600 text-sm italic">
							Turn ideas into reality, one line of code at a time.
						</p>

						<div className="flex flex-wrap justify-center gap-6">
							{[
								'Home',
								'About',
								'Services',
								'Portfolio',
								'Contact',
							].map((link, index) => (
								<a
									key={index}
									href={`#${link.toLowerCase()}`}
									className="text-gray-600 hover:text-amber-700 text-sm transition-colors duration-300"
								>
									{link}
								</a>
							))}
						</div>
					</div>

					<div className="pt-6 border-t border-gray-200 mt-6">
						<div className="flex flex-col sm:flex-row justify-between items-center gap-4">
							<p className="text-gray-500 text-sm">
								© {currentYear} Hasbi Nabil. All rights
								reserved.
							</p>
							<p className="text-gray-500 text-sm">
								Built with Next.js & Tailwind CSS
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
