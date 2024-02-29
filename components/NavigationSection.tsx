import { Divider } from "@nextui-org/react";
import { Bread } from "./Navigation/Breadcrums";
import { PagingSystem } from "./Navigation/Pagination";

export function NavigationSection({ color }: { color: string }) {
	return (
		<section className="mb-8">
			<div className="flex items-center gap-2">
				<div
					className="h-5 w-5 rounded-sm "
					style={{ backgroundColor: color }}
				/>
				<h3 className="my-2 text-lg lg:text-xl text-default-600">Navigation</h3>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center">
				<PagingSystem color={color} />
				<Bread color={color} />
			</div>
			<Divider className="mt-4" />
		</section>
	);
}
