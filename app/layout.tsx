import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'React and wordpress',
	description: 'getting started with react and wordpress',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
