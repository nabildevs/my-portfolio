import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useRef } from 'react';

const navigation = [
	{ name: 'Home', href: '#' },
	{ name: 'About', href: '#about' },
	{ name: 'Services', href: '#services' },
	{ name: 'Projects', href: '#projects' },
	{ name: 'Contact', href: '#contact' },
];

const Navbar = () => {
	const mobileMenuRef = useRef();

	const openMenu = () => {
		mobileMenuRef.current.style.transform = 'translateX(-16rem)';
	};

	const closeMenu = () => {
		mobileMenuRef.current.style.transform = 'translateX(16rem)';
	};

	return (
		<>
			<div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
				<Image
					src={assets.header_bg_color}
					alt="Navbar Background"
					className="w-full"
				/>
			</div>
			<nav className="font-ovo w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
				<a href="#top">
					<Image
						src={assets.logo}
						alt="Logo"
						className="w-28 mr-14 cursor-pointer"
					/>
				</a>

				<ul className="hidden md:flex items-center gap-5 lg:gap-8">
					{navigation.map((item) => (
						<li>
							<a
								key={item.name}
								href={item.href}
								// className={({ isActive }) => {
								// 	return (
								// 		'rounded-md px-3 py-2 text-sm font-medium ' +
								// 		(isActive
								// 			? 'bg-violet-800 text-white'
								// 			: 'text-slate-900 hover:bg-violet-800 hover:text-white')
								// 	);
								// }}
							>
								{item.name}
							</a>
						</li>
					))}
				</ul>

				<button onClick={openMenu} className="block md:hidden">
					<Image
						src={assets.menu_black}
						alt="Menu Icon"
						className="w-6"
					/>
				</button>

				{/* Mobile Menu */}
				<ul
					ref={mobileMenuRef}
					className="flex items-end md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-50 z-50 h-screen bg-gray-50 transition duration-500"
				>
					<div onClick={closeMenu} className="absolute right-6 top-6">
						<Image
							src={assets.close_black}
							alt="Close Button"
							className="w-5 cursor-pointer"
						/>
					</div>

					{navigation.map((item) => (
						<li>
							<a
								onClick={closeMenu}
								key={item.name}
								href={item.href}
								// className={({ isActive }) => {
								// 	return (
								// 		'rounded-md px-3 py-2 text-sm font-medium ' +
								// 		(isActive
								// 			? 'bg-violet-800 text-white'
								// 			: 'text-slate-900 hover:bg-violet-800 hover:text-white')
								// 	);
								// }}
							>
								{item.name}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
