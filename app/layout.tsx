import { Navbar } from "@/components/navbar";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/react";
import clsx from "clsx";
import { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
	title: {
		default: `${siteConfig.name} - ${siteConfig.description}`,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning className="white">
			<head>
				<meta
					property="og:image"
					content="https://res.cloudinary.com/dgaj83nvk/image/upload/v1710008888/cacere-s/project/clupl8uk8vol348ncbgs.png"
				/>
			</head>
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable,
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "white" }}>
					<div className="relative flex flex-col h-screen">
						<Navbar />
						<main className="container mx-auto max-w-5xl pt-16 px-6 flex-grow">
							{children}
						</main>
						<Divider className="my-4" />
						<footer className="w-full flex flex-col gap-y-2 items-center justify-center py-3">
							<p className="text-xs font-medium text-gray-500">
								<span className="text-sm">© </span>
								2024 COLORS AI
							</p>
							<Link
								isExternal
								className="flex items-center gap-1 text-current"
								href="https://cacere-s.vercel.app"
								title="nextui.org homepage"
							>
								<span className="text-gray-500">Built by</span>
								<p className="text-primary">Caceres</p>
							</Link>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
