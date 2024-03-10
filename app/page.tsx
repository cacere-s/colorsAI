"use client";
import { BannerSection } from "@/components/BannerSection";
import { CardSection } from "@/components/CardSection";
import { NavigationSection } from "@/components/NavigationSection";
import { OthersSection } from "@/components/OthersSection";
import { UiSection } from "@/components/UiSection";
import { subtitle, title } from "@/components/primitives";
import { useColorContext } from "@/hooks/useColorContext";
import { Button, Spinner, Tooltip } from "@nextui-org/react";
import clsx from "clsx";
import { useState } from "react";

export default function Home() {
	const color = useColorContext();
	const [progress, setProgress] = useState(false);

	const colorAI = () => {
		setProgress(true)
		fetch(`${process.env.NEXT_PUBLIC_API}`)
			.then((response) => response.json())
			.then((data) => {
				if (data.error) return colorAI();
				if (!data.error) return color.setColor({ colors: data.colors });
			}).finally(() => {
				setProgress(false)
			})
	};

	const writeText = (item: string) => navigator.clipboard.writeText(item);

	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Color palette generator for&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>UI&nbsp;</h1>
				<h1 className={title()}>with AI</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Color is a matter of taste and sensitivity.
				</h2>
			</div>

			<div className="flex flex-col sm:flex-row justify-center sm:justify-between w-full items-center gap-y-3">
				<div className="flex">
					{color.colors?.map((color) => (
						<div key={color}>
							<Tooltip
								content={
									<div className="flex uppercase items-center gap-x-2">
										<div
											className="h-4 w-4 rounded-sm border-2"
											style={{ backgroundColor: color }}
										/>
										{color}
									</div>
								}
							>
								{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
								<div
									className="h-14 w-8 sm:h-20 sm:w-14 m-0.5 rounded-lg border-2 border-neutral-500 dark:border-neutral-200 cursor-copy"
									style={{ backgroundColor: color }}
									onClick={() => writeText(color)}
								/>
							</Tooltip>
						</div>
					))}
				</div>

				<Button
					onClick={() => colorAI()}
					isDisabled={progress}
					color="secondary"
					className={clsx(
						"text-base w-[10rem]",
						progress ? "bg-slate-200 border-2 border-violet-400" : "",
					)}
				>
					{progress ? <Spinner color="secondary" /> : "Generate palette"}
				</Button>
			</div>

			<section className="w-full">
				{color.colors && <CardSection color={color.colors[0]} />}
				{color.colors && <NavigationSection color={color.colors[1]} />}
				{color.colors && <BannerSection color={color.colors[2]} />}
				{color.colors && <UiSection color={color.colors[3]} />}
				{color.colors && <OthersSection color={color.colors[4]} />}
			</section>
		</section>
	);
}
