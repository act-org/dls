/**
 * @prettier
 */

// eslint-disable-next-line import/no-extraneous-dependencies
import shelljs from 'shelljs';

shelljs.mkdir('-p', './lib/colors');
shelljs.cp('-R', './node_modules/@material-ui/core/colors/*', './lib/colors');
