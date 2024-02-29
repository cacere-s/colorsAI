import { Divider } from "@nextui-org/react";
import { CardNotify } from "./Card/CardNotify";
import { CardTweet } from "./Card/CardTweet";

export function CardSection({ color }: { color: string }) {
	return (
		<section className="mb-8">
			<div className="flex items-center gap-2">
				<div
					className="h-5 w-5 rounded-sm "
					style={{ backgroundColor: color }}
				/>
				<h3 className="my-2 text-lg lg:text-xl text-default-600">Card</h3>
			</div>
			<div className="grid m-auto grid-cols-1 sm:grid-cols-2 gap-y-5">
				<CardNotify color={color} />
				<CardTweet color={color} />
			</div>
			<Divider className="mt-4" />
		</section>
	);
}
