import { Divider } from "@nextui-org/react";
import { PagingSystem } from "./Navigation/Pagination";
import { subtitle } from "./primitives";

export function NavigationSection({ color }: { color: string }) {
	return (
		<section className="mb-8">
			<h3 className={subtitle()}>Navigation</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        <PagingSystem color={color} />
      </div>
			<Divider className="mt-4" />
		</section>
	);
}
