import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Colors = ColorCss[]

export interface ColorCss {
  paletteName: string
  swatches: Color[]
}

export interface Color {
  name: string
  color: string
}
