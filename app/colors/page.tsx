import { subtitle, title } from "@/components/primitives";
import { colors } from "./colors";

export default function ColorsPage() {
	return (
		<main className="flex flex-col items-center justify-center gap-4">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Tailwind&nbsp;</h1>
				<h1 className={title({ color: "blue" })}>CSS&nbsp;</h1>
				<h1 className={title()}>Colors&nbsp;</h1>
				<h3 className={subtitle({ class: "mt-4" })}>
					Tailwind includes a default color palette. It´s a starting point if
					you don´t have a specific brand in mind.
				</h3>
			</div>

			<section className="mt-8">
				{colors.map((palette, index) => (
					<div key={`${palette.paletteName}-${index}`}>
						<p
							className={subtitle({
								class: "text-start mb-2 uppercase font-semibold",
							})}
						>
							{palette.paletteName}
						</p>
						<section className="grid grid-cols-11 gap-x-2">
							{palette.swatches.map((swatch, index) => (
								<div
									key={`${swatch.name}-${index}`}
									className="mb-6 hidden md:grid text-start"
								>
									<div
										className="h-16 w-16 rounded-xl"
										style={{ backgroundColor: swatch.color }}
									/>
									<p>{swatch.name}</p>
									<p className="uppercase text-sm">{swatch.color}</p>
								</div>
							))}
						</section>
					</div>
				))}
			</section>
		</main>
	);
}
