import {
	Avatar,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
} from "@nextui-org/react";
import React from "react";

export function CardTweet({ color }: { color: string }) {
	const [isFollowed, setIsFollowed] = React.useState(false);

	return (
		<section className="w-full flex justify-start">
			<Card className="max-w-[340px] h-56">
			<CardHeader className="justify-between">
				<div className="flex gap-5">
					<div
						className="rounded-full p-1"
						style={{ border: `2.5px solid ${color}` }}
					>
						<Avatar radius="full" size="md" src="./avatar.jpg" />
					</div>

					<div className="flex flex-col gap-1 items-start justify-center">
						<h4 className="text-small font-semibold leading-none text-default-600">
							John Doe
						</h4>
						<h5 className="text-small tracking-tight text-default-400">
							@johndoe
						</h5>
					</div>
				</div>
				<Button
					className={
						isFollowed
							? "bg-transparent text-foreground border-default-200"
							: ""
					}
					radius="full"
					style={
						isFollowed
							? { border: `2px solid ${color}` }
							: { backgroundColor: color }
					}
					size="sm"
					onPress={() => setIsFollowed(!isFollowed)}
				>
					{isFollowed ? "Unfollow" : "Follow"}
				</Button>
			</CardHeader>
			<CardBody className="px-3 py-0 text-small text-default-400">
				<p>
					Frontend developer and UI/UX enthusiast. Join me on this coding
					adventure!
				</p>
				<span className="pt-2">
					#FrontendWithJohn
					<span className="py-2" aria-label="computer" role="img">
						💻
					</span>
				</span>
			</CardBody>
			<CardFooter className="gap-3">
				<div className="flex gap-1">
					<p className="font-semibold text-default-400 text-small">4</p>
					<p className=" text-default-400 text-small">Following</p>
				</div>
				<div className="flex gap-1">
					<p className="font-semibold text-default-400 text-small">97.1K</p>
					<p className="text-default-400 text-small">Followers</p>
				</div>
			</CardFooter>
		</Card>
		</section>
		
	);
}
