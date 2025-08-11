import { Lora, Poppins, Source_Code_Pro } from 'next/font/google';
import './globals.css';

const sc_pro = Source_Code_Pro({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400'],
});

const lora = Lora({
	subsets: ['latin'],
	weight: ['400'],
});

export const metadata = {
	title: 'Hasbi Nabil',
	description: 'Personal Portfolio Website',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="scroll-smooth">
			<body
				className={`${sc_pro.className} ${lora.className} antialiased leading-8 overflow-x-hidden`}
			>
				{children}
			</body>
		</html>
	);
}
