import { subtitle, title } from "@/components/primitives";
import { colors } from "./colors";

export default function ColorsPage() {
	return (
		<main className="flex flex-col items-center justify-center">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Tailwind&nbsp;</h1>
				<h1 className={title({ color: "blue" })}>CSS&nbsp;</h1>
				<h1 className={title()}>Colors&nbsp;</h1>
				<h3 className={subtitle({ class: "mt-4" })}>
					Tailwind includes a default color palette. It´s a starting point if
					you don´t have a specific brand in mind.
				</h3>
			</div>

			<section className="mt-8 w-full">
				{colors.map((palette, index) => (
					<div key={`${palette.paletteName}-${index}`}>
						<p
							className={subtitle({
								class: "text-center md:text-start mb-2 uppercase font-semibold",
							})}
						>
							{palette.paletteName}
						</p>

						<section className="w-full grid grid-cols-1 md:grid-cols-11 gap-x-2 mb-6">
							{palette.swatches.map((swatch, index) => (
								<div key={`${swatch.name}-${index}`}>
									<div
										className="hidden md:grid h-14 rounded-xl"
										style={{ backgroundColor: swatch.color }}
									/>
									<div
										className="grid md:hidden h-10 rounded-xl"
										style={{ backgroundColor: swatch.color }}
									/>

									<div className="flex justify-between mb-1 md:flex-col md:text-start">
										<p>{swatch.name}</p>
										<p className="uppercase text-sm">{swatch.color}</p>
									</div>
								</div>
							))}
						</section>
					</div>
				))}
			</section>
		</main>
	);
}
