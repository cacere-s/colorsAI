"use client";
import { useColor } from "@/hooks/useColor";
import React from "react";

export const ColorContext = React.createContext<{
	colors: string[] | undefined;
}>({ colors: [] });

export function ColorProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	// In this context we will have the global variables
	const { color } = useColor();

	return (
		<ColorContext.Provider value={color}>{children}</ColorContext.Provider>
	);
}
