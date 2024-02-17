export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "ColorsAI",
	description: "Color palette generator for UI with AI",
	navItems: [
		{
			label: "Create",
			href: "/",
		},
    {
      label: "Palettes",
      href: "/palettes",
    },
    {
      label: "Colors",
      href: "/colors",
    },
	],

	links: {
		github: "https://github.com/cacere-s/colorsAI",
		twitter: "https://twitter.com/cacere__s",
		docs: "https://nextui.org"
	},
};
