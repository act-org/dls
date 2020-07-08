/**
 * @prettier
 */

// eslint-disable-next-line import/no-extraneous-dependencies
import shelljs from 'shelljs';

shelljs.mkdir('-p', './lib/types');
shelljs.cp('-R', './src/types/*', './lib/types');
