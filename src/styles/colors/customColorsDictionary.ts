/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as muiColors from '@mui/material/colors';
import { PaletteColorOptions } from '@mui/material/styles';
import { createTheme } from '@mui/system';
import Color from 'color';
import colorString from 'color-string';
import { isString } from 'lodash';
import md5 from 'md5';

import { figmaColorGenerator } from '.';

export class CustomColorsDictionary extends Map<string, PaletteColorOptions> {
  public setColor(name: string, value: PaletteColorOptions | string): void {
    if (isString(value)) {
      const colorValue = CustomColorsDictionary.toPaletteColorOptions(value);
      this.set(name, colorValue);
    } else {
      this.set(name, value);
    }
  }

  public getColor(name: string): PaletteColorOptions {
    const existingColor = this.get(name);

    if (existingColor) {
      return existingColor;
    }

    const muiMatches = Object.keys(muiColors).filter(c => c === name);
    if (muiMatches.length > 0) {
      // Go ahead and save this so we don't get a performance hit next time
      const paletteColor: PaletteColorOptions = (
        muiColors as Record<string, PaletteColorOptions>
      )[muiMatches[0]];
      this.setColor(name, paletteColor);
      return paletteColor;
    }

    const colorStringMatches = colorString.get(name);
    if (colorStringMatches) {
      const matchColor = Color(
        colorStringMatches.value,
        colorStringMatches.model,
      );
      const paletteColor = CustomColorsDictionary.toPaletteColorOptions(
        matchColor.hex(),
      );

      // Go ahead and save this so we don't get a performance hit next time
      this.setColor(name, paletteColor);
      return paletteColor;
    }

    const paletteColor =
      CustomColorsDictionary.deterministicColorGenerator(name);

    // Go ahead and save this so we don't get a performance hit next time
    this.setColor(name, paletteColor);
    return paletteColor;
  }

  public static deterministicColorGenerator(name: string): PaletteColorOptions {
    // What we need here is a function that will generate the same color for the same name every time.
    // That way between reloads/refreshes/rebuilds a color will stay the same rather than just using
    // a random color.
    // We could do this many ways, but here's what I think should work:
    // MD5 the name -> select the first 6 chars
    const hash: string = md5(name);
    if ((hash?.length ?? 0) < 6) {
      throw new Error(`Could not generate hash for ${name}`);
    }
    return CustomColorsDictionary.toPaletteColorOptions(hash.slice(0, 6));
  }

  public static toPaletteColorOptions(
    colorValue: string,
    useShades = false,
  ): PaletteColorOptions {
    if (useShades) {
      return figmaColorGenerator(colorValue);
    }
    // If someone has a better way to do this, I'm all ears.
    const tempTheme = createTheme({
      palette: { primary: { main: colorValue } },
    });
    return tempTheme.palette.primary;
  }
}

export default CustomColorsDictionary;
