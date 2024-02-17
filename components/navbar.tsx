"use client";
import { Link } from "@nextui-org/link";
import {
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
	Navbar as NextUINavbar,
} from "@nextui-org/navbar";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import clsx from "clsx";
import NextLink from "next/link";

import { GithubIcon, TwitterIcon } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";

import { Logo } from "@/components/icons";
import { usePathname } from "next/navigation";

export const Navbar = () => {
	const pathName = usePathname();
	return (
		<NextUINavbar maxWidth="xl" position="sticky" className="w-full">
			<NavbarContent className="basis-1/5 sm:basis-full">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-2" href="/">
						<Logo />
						<p className="font-bold text-inherit">COLORS AI</p>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent justify="center">
				<ul className="hidden sm:flex gap-4 ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem
							key={item.href}
							className={clsx(
								"w-20 h-8 flex justify-center ",
								pathName === item.href
									? "dark:bg-slate-700 bg-gray-300 rounded-xl"
									: "",
							)}
						>
							<NextLink
								className={clsx(linkStyles({ color: "foreground" }))}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">
					<Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
						<TwitterIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.github} aria-label="Github">
						<GithubIcon className="text-default-500" />
					</Link>
					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<Link isExternal href={siteConfig.links.github} aria-label="Github">
					<GithubIcon className="text-default-500" />
				</Link>
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navItems.map((item, index) => (
						<NavbarMenuItem key={`${item.href}-${index}`}
						className={clsx(
							pathName === item.href
							? "dark:bg-slate-700 bg-gray-300 rounded-xl px-2"
							: ""
						)}
						>
							<Link color={"foreground"} href={item.href} size="lg">
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
