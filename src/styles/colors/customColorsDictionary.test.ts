import { Color, PaletteColor } from '@mui/material';

import {CustomColorsDictionary} from './customColorsDictionary';

describe("CustomColorsDictionary", () => {
  describe("deterministicColorGenerator", () => {
    it("should produce a consistent result", () => {
      const color1 = CustomColorsDictionary.deterministicColorGenerator("testColor");
      const color2 = CustomColorsDictionary.deterministicColorGenerator("testColor");

      expect(color1).toEqual(color2);
    });

    it("should produce different results across names", () => {
      const color1 = CustomColorsDictionary.deterministicColorGenerator("testColor");
      const color2 = CustomColorsDictionary.deterministicColorGenerator("testColor2");

      expect(color1).not.toEqual(color2);
    });
  });

  describe('getColor', () => {
    it("will retrieve a preset color", () => {
      const navy = '#003057';
      const colors = new CustomColorsDictionary();
      colors.setColor("navy", navy);

      const retrievedNavy = colors.getColor('navy');

      expect('main' in retrievedNavy).toBe(true);
      expect((retrievedNavy as PaletteColor).main).toEqual(navy);
    });
    
    it("will retrieve a color by name for colors in the MUI library", () => {
      const defaultAmber = '#ffc107';
      const colors = new CustomColorsDictionary();

      const retrievedAmber = colors.getColor('amber');

      expect('500' in retrievedAmber).toBe(true);
      expect((retrievedAmber as Color)['500']).toEqual(defaultAmber);
    });

    it("will retrieve a color by name for colors in the color-name library", () => {
      const defaultNavy = '#000080';
      const colors = new CustomColorsDictionary();

      const retrievedNavy = colors.getColor('navy');

      expect('main' in retrievedNavy).toBe(true);
      expect((retrievedNavy as PaletteColor).main).toEqual(defaultNavy);
    });

    it("will generate a determistic color by name for colors not found elsewhere", () => {
      const colorName = 'this_color_doesnt_exist';
      const colors = new CustomColorsDictionary();

      const retrievedColor = colors.getColor(colorName);
      const deterministicColor = CustomColorsDictionary.deterministicColorGenerator(colorName);

      expect(retrievedColor).toEqual(deterministicColor);
    });
  });
});
