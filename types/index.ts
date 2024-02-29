import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Palettes = ColorPalettes[];
export type ColorPalettes = {
  id: number
  colors: string[]
}

export type Colors = ColorCss[]

export interface ColorCss {
  paletteName: string
  swatches: Color[]
}

export interface Color {
  name: string
  color: string
}
