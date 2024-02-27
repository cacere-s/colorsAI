import { subtitle, title } from "@/components/primitives";
import { Tooltip } from "@nextui-org/react";
import clsx from "clsx";
import { palettes } from "./palettes";

export default function PalettesPage() {
	return (
		<main className="flex flex-col items-center justify-center">
			<section className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Color palettes</h1>

				<h3 className={subtitle({ class: "mt-4" })}>
					Get modern
					<span className="text-[#b249f8]"> UI </span> color palettes.
					<span className="text-[#0072F5]"> Colors</span> are the smiles of
					<span className="text-[#17c964]"> nature</span>, it is a
					<span className="text-[#FF705B]"> power</span> that directly
					influences the
					<span className="text-[#00b7fa]"> soul</span>
				</h3>
			</section>

			<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-14 mt-8">
				{palettes.map((item) => (
					<section
						key={item.id}
						className={clsx(
							"flex justify-center p-4",
							item.id === 0 ? "bg-slate-200 rounded-2xl relative" : "",
						)}
					>
						{item.id === 0 ? (
							<p className="absolute text-black text-4xl top-6">upcoming</p>
						) : (
							""
						)}

						{item.colors.map((hexa) => (
							<div key={`${hexa}-${item.id}`}>
								<Tooltip
									className={item.id === 0 ? "hidden" : ""}
									content={
										<div className="flex uppercase items-center gap-x-2">
											<div
												className="h-4 w-4 rounded-sm border-2"
												style={{ backgroundColor: hexa }}
											/>
											{hexa}
										</div>
									}
								>
									<div
										className={clsx(
											"h-16 w-8 m-0.5 rounded-full border-2 border-neutral-500 dark:border-neutral-200 cursor-copy",
											item.id === 0 ? "rounded-2xl opacity-40 border-none cursor-auto" : "",
										)}
										style={{ backgroundColor: hexa }}
									/>
								</Tooltip>
							</div>
						))}
					</section>
				))}
			</section>
		</main>
	);
}
