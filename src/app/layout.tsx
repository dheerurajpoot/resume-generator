import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
	title: "Resume Generator",
	description:
		"Create professional resumes online with our free resume builder.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head suppressHydrationWarning>
				{/* google Search Console code */}
			</head>
			<body suppressHydrationWarning>
				<Navigation />
				{children}
				<Footer />
			</body>
		</html>
	);
}
