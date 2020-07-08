/**
 * @prettier
 */

// eslint-disable-next-line import/no-extraneous-dependencies
import shelljs from 'shelljs';

shelljs.mkdir('-p', './lib/icons');
shelljs.cp('-R', './node_modules/mdi-material-ui/*', './lib/icons');
