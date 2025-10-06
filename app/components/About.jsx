import { assets, infoList } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const About = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ amount: 0.3 }}
			transition={{ duration: 0.6, delay: 0.3 }}
			id="about"
			className="w-full px-[12%] py-20 scroll-mt-20"
		>
			<h4 className="text-center text-gray=500 mb-1 text-lg">
				Introduction
			</h4>
			<h2 className="text-center text-5xl">About Me</h2>
			<div className="flex flex-col w-full lg:flex-row items-center gap-20 my-20 max-w-6xl mx-auto">
				<div className="w-64 sm:w-80 max-w-none">
					<Image
						src="/user-photo.jpg"
						width={512}
						height={512}
						alt="User Image"
						className="about-image shadow-inset-white-frame"
					/>
				</div>
				<div className="flex-1">
					<p className="mb-10 max-w-2xl text-justify">
						As a full-stack developer, building tailored web
						solutions that solve real client problems and support
						their growth. Passionate about turning complex ideas
						into clean, scalable applications, I’m highly adaptable,
						fast at learning new technologies, and always driven to
						take on challenges that push my skills forward.
					</p>

					<ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
						{infoList.map(
							({ icon: Icon, title, description }, index) => (
								<li
									key={index}
									className="flex flex-col justify-center items-center text-center p-5 border border-gray-200 rounded-xl cursor-pointer hover:border-cyan-600 hover:shadow-lg transition-all duration-500"
								>
									<Icon className="w-7 h-7 mt-3 text-gray-700" />
									<h3 className="font-sc_pro mt-2 font-semibold text-gray-700">
										{title}
									</h3>
									<p className="text-gray-500 text-sm">
										{description}
									</p>
								</li>
							)
						)}
					</ul>
				</div>
			</div>
		</motion.div>
	);
};

export default About;
