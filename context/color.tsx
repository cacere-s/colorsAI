"use client";
import { palettes } from "@/app/palettes/palettes";
import { ColorPalettes } from "@/types";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

export const ColorContext = React.createContext<{
	colors: string[] | undefined;
	setColor: Dispatch<SetStateAction<{ colors: string[] | undefined }>>;
}>({ colors: [], setColor: useState });

export function ColorProvider({ children }: { children: React.ReactNode }) {

	// In this context we will have the global variables
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

	return (
		<ColorContext.Provider value={{ colors: color?.colors, setColor }}>
			{children}
		</ColorContext.Provider>
	);
}
