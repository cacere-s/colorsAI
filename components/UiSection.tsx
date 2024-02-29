import { Divider } from "@nextui-org/react";
import { Bread } from "./Navigation/Breadcrums";
import { ProgressCircleIcon, ProgressDashedIcon, ProgressIcon } from "./icons";

export function UiSection({ color }: { color: string }) {
	return (
		<section className="mb-8">
			<div className="flex items-center gap-2">
				<div
					className="h-5 w-5 rounded-sm "
					style={{ backgroundColor: color }}
				/>
				<h3 className="my-2 text-lg lg:text-xl text-default-600">UI</h3>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center">
				<div className="border p-4 flex gap-8 justify-center rounded-lg">
					<span className="inline-flex gap-2 items-center rounded-md tracking-wide border bg-gray-50 dark:bg-gray-800 px-2 py-1 text-xs font-medium">
						<div>
							<span className="relative flex h-3 w-3">
								<span
									className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
									style={{ backgroundColor: `${color}` }}
								/>
								<span
									className="relative inline-flex rounded-full h-3 w-3"
									style={{ backgroundColor: `${color}` }}
								/>
							</span>
						</div>
						Badge
					</span>
					<span
						className="inline-flex items-center rounded-md tracking-wide bg-gray-50 px-2 py-1 text-xs font-medium"
						style={{
							backgroundColor: `${color}1F`,
							color: color,
							border: `.5px solid ${color}`,
						}}
					>
						Badge
					</span>
				</div>

				<div className="border p-3 flex gap-8 justify-center rounded-lg">
					<ProgressCircleIcon
						className="animate-spin"
						size={30}
						style={{ color: `${color}` }}
					/>
					<ProgressIcon
						className="animate-spin"
						size={30}
						style={{ color: `${color}` }}
					/>
					<ProgressDashedIcon
						className="animate-spin"
						size={30}
						style={{ color: `${color}` }}
					/>
				</div>
			</div>
			<Divider className="mt-4" />
		</section>
	);
}
