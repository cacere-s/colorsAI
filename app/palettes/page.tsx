import { subtitle, title } from "@/components/primitives";

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
					<span className="text-[#FF705B]"> power</span> that directly influences the
					<span className="text-[#00b7fa]"> soul</span>
				</h3>
			</section>
		</main>
	);
}
