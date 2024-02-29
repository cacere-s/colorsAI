import { Accordion, AccordionItem } from "@nextui-org/react";

export function AccordionComponent({color}: {color: string}) {
	const defaultContent =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

	return (
		<section className="">
			<div className="border rounded-xl">
				<Accordion>
				<AccordionItem
					key="1"
          isCompact
					aria-label="Accordion 1"
					subtitle="Press to expand"
					title="Accordion 1"
					style={{ borderBottom: `1px solid ${color}` }}
				>
					{defaultContent}
				</AccordionItem>
				<AccordionItem
					key="2"
					aria-label="Accordion 2"
					subtitle={
						<span>
							Press to expand <strong>key 2</strong>
						</span>
					}
					isCompact
					title="Accordion 2"
					style={{ borderBottom: `1px solid ${color}` }}
				>
					{defaultContent}
				</AccordionItem>
				<AccordionItem
					key="3"
          isCompact
					aria-label="Accordion 3"
					subtitle="Press to expand"
					title="Accordion 3"
				>
					{defaultContent}
				</AccordionItem>
			</Accordion>
			</div>
			
		</section>
	);
}
