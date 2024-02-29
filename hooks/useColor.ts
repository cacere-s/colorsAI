"use client";
import { palettes } from "@/app/palettes/palettes";
import { useEffect, useState } from "react";
import { ColorPalettes } from "../types/index";

export function useColor() {
	const [color, setColor] = useState<{ colors: string[] | undefined }>({
		colors: [],
	});
	useEffect(() => {
		const getRandomIndex = (): number =>
			Math.floor(Math.random() * (palettes.length - 1)) + 1;
		const randomColor = getRandomIndex();
		const chosenColor: ColorPalettes | undefined = palettes.find(
			(color) => color.id === randomColor,
		);

		setColor({ colors: chosenColor?.colors });
	}, []);
	return { color };
}
