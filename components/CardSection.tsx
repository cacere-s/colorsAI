import { Divider } from "@nextui-org/react";
import { CardNotify } from "./Card/CardNotify";
import { CardTweet } from "./Card/CardTweet";
import { subtitle } from "./primitives";

export function CardSection({ color }: { color: string }) {
	return (
		<section className="mb-8">
			<h3 className={subtitle()}>Card</h3>
			<div className="grid m-auto grid-cols-1 sm:grid-cols-2 gap-y-5">
				<CardNotify color={color} />
				<CardTweet color={color} />
			</div>
			<Divider className="mt-4" />
		</section>
	);
}
