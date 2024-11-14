/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export type ColorIndex =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | string;

interface IBrightnessMap {
  brightness: number;
  colorIndex: ColorIndex;
}

/*
 * Do not modify these values unless UX give us new values,
 * they are used to generate our Figma palette
 */
const brightnessCoefficient: IBrightnessMap[] = [
  {
    brightness: 0.9,
    colorIndex: 50,
  },
  {
    brightness: 0.69,
    colorIndex: 100,
  },
  {
    brightness: 0.54,
    colorIndex: 200,
  },
  {
    brightness: 0.33,
    colorIndex: 300,
  },
  {
    brightness: 0.2,
    colorIndex: 400,
  },
  {
    brightness: 0,
    colorIndex: 500,
  },
  {
    brightness: -0.09,
    colorIndex: 600,
  },
  {
    brightness: -0.29,
    colorIndex: 700,
  },
  {
    brightness: -0.45,
    colorIndex: 800,
  },
  {
    brightness: -0.58,
    colorIndex: 900,
  },
];

export const hexToRGB = (color: string): number[] | undefined => {
  let r = '';
  let g = '';
  let b = '';

  if ((color.length !== 4 && color.length !== 7) || color[0] !== '#')
    return undefined;

  if (color.length === 4) {
    r = `0x${color[1]}${color[1]}`;
    g = `0x${color[2]}${color[2]}`;
    b = `0x${color[3]}${color[3]}`;
  } else if (color.length === 7) {
    r = `0x${color[1]}${color[2]}`;
    g = `0x${color[3]}${color[4]}`;
    b = `0x${color[5]}${color[6]}`;
  }

  return [Number(r), Number(g), Number(b)];
};

export const RGBToHex = (r: number, g: number, b: number): string => {
  let R = r.toString(16);
  let G = g.toString(16);
  let B = b.toString(16);

  if (R.length === 1) R = `0${R}`;
  if (G.length === 1) G = `0${G}`;
  if (B.length === 1) B = `0${B}`;

  return `#${R.slice(0, 2)}${G.slice(0, 2)}${B.slice(0, 2)}`;
};

export const lightenRGB = (
  color: string,
  percentage: number,
): string | undefined => {
  const RGBColor = hexToRGB(color);

  if (!RGBColor) return undefined;

  if (percentage === 0) return color;

  if (percentage > 0) {
    return RGBToHex(
      Math.round(RGBColor[0] + ((255 - RGBColor[0]) * percentage) / 100),
      Math.round(RGBColor[1] + ((255 - RGBColor[1]) * percentage) / 100),
      Math.round(RGBColor[2] + ((255 - RGBColor[2]) * percentage) / 100),
    );
  }

  return RGBToHex(
    Math.round(RGBColor[0] * (1 + percentage / 100)),
    Math.round(RGBColor[1] * (1 + percentage / 100)),
    Math.round(RGBColor[2] * (1 + percentage / 100)),
  );
};

export const figmaColorGenerator = (
  color: string,
): Record<ColorIndex, string> => {
  const colorPalette = {} as unknown as Record<ColorIndex, string>;
  brightnessCoefficient.forEach(({ brightness, colorIndex }) => {
    const generatedColor = lightenRGB(color, brightness * 100);
    if (generatedColor) colorPalette[colorIndex] = generatedColor;
  });
  return colorPalette;
};

export const generatePaletteColors = <
  T extends { colorName: U; colorHEX: string },
  U extends string,
>(
  colors: T[],
): Record<U, Record<ColorIndex, string>> => {
  const colorPalette = {} as unknown as Record<U, Record<ColorIndex, string>>;
  colors.forEach(color => {
    colorPalette[color.colorName] = figmaColorGenerator(color.colorHEX);
  });
  return colorPalette;
};
