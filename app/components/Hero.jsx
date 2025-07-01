import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
	return (
		<div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
			<h3 className="text-xl md:text-2xl mb-3">
				Greetings! I'm Hasbi Nabil👋
			</h3>
			<h1 className="text-3xl sm:text-6xl lg:text-[66px]">
				fullstack developer based in Indonesia.
			</h1>
			<p className="max-w-2xl mx-auto">
				Enjoys building clean, functional, and thoughtful web apps. With
				2 years of experience, I turn ideas into reality—one line of
				code at a time.
			</p>
			<div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
				<a
					href="#contact"
					className="px-10 py-3 border border-white rounded-full bg-gray-950 text-white flex items-center gap-2"
				>
					Get In Touch{' '}
					<Image
						src={assets.right_arrow_white}
						alt="Arrow Icon"
						className="w-4"
					/>
				</a>
				<a
					href="/sample-resume.pdf"
					download
					className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
				>
					My CV{' '}
					<Image
						src={assets.download_icon}
						alt="Download Icon"
						className="w-4"
					/>
				</a>
			</div>
		</div>
	);
};

export default Hero;
