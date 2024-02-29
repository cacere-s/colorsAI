import { Button, Divider } from "@nextui-org/react";
import { AlertIcon, CloseIcon } from "./icons";

export function BannerSection({ color }: { color: string }) {
	return (
		<section className="mb-8">
			<div className="flex items-center gap-2">
				<div
					className="h-5 w-5 rounded-sm "
					style={{ backgroundColor: color }}
				/>
				<h3 className="my-2 text-lg lg:text-xl text-default-600">Banner</h3>
			</div>

			<div
				className="w-full py-4 px-6 rounded-xl"
				style={{ backgroundColor: `${color}1F`, border: `2px solid ${color}` }}
			>
				<div className="flex justify-between items-start">
					<div className="flex items-start gap-2">
						<AlertIcon style={{ color: color }} />
						<div>
							<h3 className="font-medium mb-1">Title of the banner</h3>
							<p className="text-sm font-normal mb-3">Body of the banner</p>
							<Button
								className="rounded-lg"
								variant="light"
								style={{ border: `1.5px solid ${color}` }}
							>
								Learn more
							</Button>
						</div>
					</div>

					<CloseIcon />
				</div>
			</div>
			<Divider className="mt-4" />
		</section>
	);
}
