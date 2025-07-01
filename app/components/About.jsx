import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const About = () => {
	return (
		<div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
			<h4 className="text-center mb-2 text-lg">Introduction</h4>
			<h2 className="text-center text-5xl">About Me</h2>
			<div className="flex flex-col w-full lg:flex-row items-center gap-20 my-20">
				<div className="w-64 sm:w-80 rounded-3xl max-w-none">
					<Image
						src={assets.user_photo}
						alt="User Image"
						className="w-full rounded-3xl"
					/>
				</div>
				<div className="flex-1">
					<p className="mb-10 max-w-2xl text-justify">
						A Bachelor’s graduate in Informatics Engineering with 2
						years of hands-on experience as a full-stack developer,
						building tailored web solutions that solve real client
						problems and support their growth. Passionate about
						turning complex ideas into clean, scalable applications,
						I’m highly adaptable, fast at learning new technologies,
						and always driven to take on challenges that push my
						skills forward.
					</p>

					<ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
						{infoList.map(({ icon, title, description }, index) => (
							<li
								key={index}
								className="p-6 border-[0.5px] border-gray-400 rounded-xl cursor-pointer hover:bg-amber-100 hover:-translate-y-1 hover:shadow-xl duration-500"
							>
								<Image
									src={icon}
									alt={title}
									className="w-7 mt-3"
								/>
								<h3 className="my-4 font-semibold text-gray-700">
									{title}
								</h3>
								<p className="text-gray-600 text-sm">
									{description}
								</p>
							</li>
						))}
					</ul>

					<h4 className="my-6 text-gray-700">Tools</h4>
					<ul className="flex items-center gap-3 sm:gap-5">
						{toolsData.map((tool, index) => (
							<li
								key={index}
								className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
							>
								<Image
									src={tool}
									alt="Tool"
									className="w-5 sm:w-7"
								/>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default About;
