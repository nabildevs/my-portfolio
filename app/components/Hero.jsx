import { ArrowDownToLine, ArrowRight } from 'lucide-react';
import React from 'react';
import { motion } from 'motion/react';

const Hero = () => {
	return (
		<motion.div
			initial={{ y: -30, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			viewport={{ amount: 0.2 }}
			transition={{ duration: 0.6 }}
			id="home"
			className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
		>
			<h3 className="text-xl md:text-2xl mb-3">
				Greetings! I'm Hasbi Nabil👋
			</h3>
			<h1 className="font-sc_pro text-3xl sm:text-6xl lg:text-[66px]">
				fullstack developer based in Indonesia.
			</h1>
			<p className="max-w-2xl mx-auto">
				Enjoys building clean, functional, and thoughtful web apps. With
				over 2 years of experience, I turn ideas into reality, one line
				of code at a time.
			</p>
			<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
				<a
					href="#about"
					className="px-10 py-3 border border-white rounded-full bg-gray-950 text-white flex items-center gap-2"
				>
					Discover Me <ArrowRight className="w-5 h-5" />
				</a>
				<a
					href="/cv-hasbi-nabil.pdf"
					download
					className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
				>
					My Resume <ArrowDownToLine className="w-5 h-5" />
				</a>
			</div>
		</motion.div>
	);
};

export default Hero;
