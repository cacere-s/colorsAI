import { IconSvgProps } from "@/types";
import * as React from "react";

export const Logo: React.FC<IconSvgProps> = ({
	size = 24,
	width,
	height,
	...props
}) => (
	<svg
		role="img"
		fill="none"
		viewBox="0 0 512 512"
		height={size || height}
		width={size || width}
		{...props}
	>
		<title>Colors AI</title>
		<path
			fill="currentColor"
			d="M232.1 1.1C183.5 5.4 133.3 26 94.5 57.5c-12.1 9.8-33.4 31.8-42.3 43.7C25.6 136.7 9.3 176 2.3 221c-2.4 16.1-2.4 53.9 0 70 7.4 47.6 26.2 90.8 55.2 126.5 9.8 12.1 31.8 33.4 43.7 42.3 35.2 26.4 75.8 43.3 118.8 49.6 15.3 2.2 36.3 3.1 43.5 1.7 22.5-4.2 37.5-25.2 34.4-48-1.2-8.1-3.6-13.6-9.4-21.1-6.7-8.7-10.5-17.4-11.2-25.7-1.6-20.7 11.6-39.6 31.3-44.8 4.5-1.2 12.2-1.5 34.4-1.5 30.4-.1 43.7-.9 56.5-3.5 46-9.5 86.5-44.2 103-88.2 15.4-40.8 11.4-92.2-10.8-139.4-10.5-22.3-24.3-41.5-44.2-61.5C432.2 62 424.9 56 409 45.3 359 11.8 294-4.4 232.1 1.1zM200.3 60c15.8 6 26.8 21.9 26.8 39.1 
		0 13.6-5.3 25-15.8 33.5-20.6 16.8-52.8 9.7-64.3-14.1-14.3-29.3 7.6-62.8 40-61.1 4.4.2 9.9 1.3 13.3 2.6zm137-1.5c8.1 2.1 13.2 4.9 19.2 10.6 16.8 15.9 17.2 43.8.8 60.3-18.8 18.9-50.5 15.8-65.4-6.4-4.9-7.3-7-14.4-7-23.9.1-27.5 25.9-47.5 52.4-40.6zM111.1 172.4c10 3 16.4 7.6 22.6 15.9 18.9 25.8 3.9 61.6-28 66.9-17.2 2.8-35.8-6.7-43.8-22.4-8.4-16.7-5.3-36.3 7.8-49.5 5.6-5.6 8.7-7.5 16.7-10.4 6.3-2.2 18.3-2.4 24.7-.5zm314.1.5c8.4 2.9 11.4 4.7 17.1 10.4 24.6 24.7 11 66.1-23.6 71.9-16.4 2.7-34.5-5.9-43.1-20.6-11.9-20.3-3.7-48.2 17.3-59.1 9.4-4.8 22.7-5.9 32.3-2.6z"
		/>
	</svg>
);

export const DiscordIcon: React.FC<IconSvgProps> = ({
	size = 24,
	width,
	height,
	...props
}) => {
	return (
		<svg
			role="img"
			height={size || height}
			viewBox="0 0 24 24"
			width={size || width}
			{...props}
		>
			<title>Discord Icon</title>
			<path
				d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
				fill="currentColor"
			/>
		</svg>
	);
};

export const TwitterIcon: React.FC<IconSvgProps> = ({
	size = 24,
	width,
	height,
	...props
}) => {
	return (
		<svg
			role="img"
			height={size || height}
			viewBox="0 0 24 24"
			width={size || width}
			{...props}
		>
			<title>Twitter</title>
			<path
				d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
				fill="currentColor"
			/>
		</svg>
	);
};

export const GithubIcon: React.FC<IconSvgProps> = ({
	size = 24,
	width,
	height,
	...props
}) => {
	return (
		<svg
			role="img"
			height={size || height}
			viewBox="0 0 24 24"
			width={size || width}
			{...props}
		>
			<title>Github</title>
			<path
				clipRule="evenodd"
				d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
				fill="currentColor"
				fillRule="evenodd"
			/>
		</svg>
	);
};

export const MoonFilledIcon = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		role="presentation"
		viewBox="0 0 24 24"
		width={size || width}
		{...props}
	>
		<path
			d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
			fill="currentColor"
		/>
	</svg>
);

export const SunFilledIcon = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		role="presentation"
		viewBox="0 0 24 24"
		width={size || width}
		{...props}
	>
		<g fill="currentColor">
			<path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
			<path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
		</g>
	</svg>
);

export const ChevronIcon = (props: IconSvgProps) => (
	<svg
		aria-hidden="true"
		fill="none"
		focusable="false"
		height="1em"
		viewBox="0 0 24 24"
		width="1em"
		{...props}
	>
		<path
			d="M15.5 19l-7-7 7-7"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="1.5"
		/>
	</svg>
);

export const AlertIcon = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg
		aria-hidden="true"
		focusable="false"
		fill="none"
		height={size || height}
		viewBox="0 0 512 512"
		width={size || width}
		{...props}
	>
		<path
			fill="currentColor"
			d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
		/>
	</svg>
);

export const CloseIcon = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		width={size || width}
		{...props}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className="lucide lucide-x"
	>
		<path d="M18 6 6 18" />
		<path d="m6 6 12 12" />
	</svg>
);

export const ProgressIcon = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		width={size || width}
		{...props}
		fill="none"
		viewBox="0 0 512 512"
	>
		<path
			fill="currentColor"
			d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"
		/>
	</svg>
);

export const ProgressDashedIcon = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		width={size || width}
		{...props}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2.5"
	>
		<path d="M10.1 2.182a10 10 0 0 1 3.8 0" />
		<path d="M13.9 21.818a10 10 0 0 1-3.8 0" />
		<path d="M17.609 3.721a10 10 0 0 1 2.69 2.7" />
		<path d="M2.182 13.9a10 10 0 0 1 0-3.8" />
		<path d="M20.279 17.609a10 10 0 0 1-2.7 2.69" />
		<path d="M21.818 10.1a10 10 0 0 1 0 3.8" />
		<path d="M3.721 6.391a10 10 0 0 1 2.7-2.69" />
		<path d="M6.391 20.279a10 10 0 0 1-2.69-2.7" />
	</svg>
);

export const ProgressCircleIcon = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		width={size || width}
		{...props}
		fill="none"
		viewBox="0 0 24 24"
	>
		<circle
			className="opacity-25"
			cx="12"
			cy="12"
			r="10"
			stroke="currentColor"
			strokeWidth="4"
		/>
		<path
			className="opacity-75"
			fill="currentColor"
			d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
		/>
	</svg>
);
