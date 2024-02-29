import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

export function Bread({ color }: { color: string }) {
	return (
		<div className="w-full h-full border rounded-lg flex justify-center items-center p-4">
			<Breadcrumbs>
				<BreadcrumbItem>
					<span className="text-base" style={{ color: `${color}BD` }}>Home</span>
				</BreadcrumbItem>
				<BreadcrumbItem>
					<span className="text-base" style={{ color: `${color}BD` }}>Music</span>
				</BreadcrumbItem>
				<BreadcrumbItem>
					<span className="text-base" style={{ color: `${color}BD` }}>Artist</span>
				</BreadcrumbItem>
				<BreadcrumbItem>
					<span className="text-base" style={{ color: `${color}BD` }}>Album</span>
				</BreadcrumbItem>
				<BreadcrumbItem>
					<span className="text-base" style={{ color: color }}>Song</span>
				</BreadcrumbItem>
			</Breadcrumbs>
		</div>
	);
}
