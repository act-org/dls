/* eslint-disable import/no-extraneous-dependencies */
import { configure } from '@testing-library/dom';
import '@testing-library/jest-dom';

configure({
  computedStyleSupportsPseudoElements: true
})