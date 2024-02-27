"use client";
import { CardSection } from "@/components/CardSection";
import { NavigationSection } from "@/components/NavigationSection";
import { subtitle, title } from "@/components/primitives";
import { Button, Tooltip } from "@nextui-org/react";
import { useState } from "react";

export default function Home() {
	const writeText = async (item: string): Promise<void> =>
		await navigator.clipboard.writeText(item);

	const [color, setColor] = useState({
		colors: ["#F0B67F", "#FE5F55", "#D6D1B1", "#C7EFCF", "#EEF5DB"],
	});

	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Color palette generator for&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>UI&nbsp;</h1>
				<h1 className={title()}>with AI</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Beautiful, fast and modern React UI library.
				</h2>
			</div>

			<div className="flex flex-col sm:flex-row justify-center sm:justify-between w-full items-center gap-y-3">
				<div className="flex">
					{color.colors.map((color) => (
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

				<Button color="secondary" className="text-base">
					Generate palette
				</Button>
			</div>

			<section className="w-full">
				<CardSection color={color.colors[0]} />
				<NavigationSection color={color.colors[1]} />
			</section>
		</section>
	);
}
