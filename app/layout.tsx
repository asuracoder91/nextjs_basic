import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./(components)/NavBar";

export const metadata: Metadata = {
	title: "New York Times Bestsellers",
	description: "New York Times Bestsellers by devil",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<NavBar />
			<body>{children}</body>
		</>
	);
}
