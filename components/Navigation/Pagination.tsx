import {
	Pagination,
	PaginationItemRenderProps,
	PaginationItemType,
} from "@nextui-org/react";
import clsx from "clsx";
import { ChevronIcon } from "../icons";

export function PagingSystem({ color }: { color: string }) {
	const renderItem = ({
		ref,
		key,
		value,
		isActive,
		onNext,
		onPrevious,
		setPage,
		className,
	}: PaginationItemRenderProps) => {
		if (value === PaginationItemType.NEXT) {
			return (
				<button
					type="button"
					key={key}
					className={clsx(className, "bg-default-200/80 min-w-8 w-8 h-8")}
					onClick={onNext}
				>
					<ChevronIcon className="rotate-180" style={{ color: color }} />
				</button>
			);
		}

		if (value === PaginationItemType.PREV) {
			return (
				<button
					type="button"
					key={key}
					className={clsx(className, "bg-default-200/80 min-w-8 w-8 h-8")}
					onClick={onPrevious}
				>
					<ChevronIcon style={{ color: color }} />
				</button>
			);
		}

		if (value === PaginationItemType.DOTS) {
			return (
				<button type="button" key={key} className={className}>
					...
				</button>
			);
		}

		// cursor is the default item
		return (
			<button
				type="button"
				ref={ref}
				key={key}
				className={clsx(className)}
				onClick={() => setPage(value)}
				style={isActive ? { backgroundColor: color } : {}}
			>
				{value}
			</button>
		);
	};

	return (
		<div className="w-full p-4 border rounded-lg flex justify-center items-center">
			<Pagination
				disableCursorAnimation
				showControls
				total={10}
				initialPage={2}
				className="gap-2"
				radius="full"
				renderItem={renderItem}
				variant="light"
			/>
		</div>
	);
}
