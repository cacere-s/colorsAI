import { Pagination } from "@nextui-org/react";

export function PagingSystem({color}: {color: string}) {
  const colorbg = `bg-[${color}]`
	return (
		<div className="w-full border rounded-lg flex justify-center py-4">
			<Pagination total={10} initialPage={1} />
		</div>
	);
}
