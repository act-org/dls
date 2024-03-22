import { standard } from '~/helpers/test';

import { PopperComponent } from '.';

const defaultProps = {
  bodyElement: <div>Body</div>
}

describe('Popper (inner Component) with Body', () => {
  standard(<PopperComponent {...defaultProps} />);
});

describe('Popper (inner Component) with Footer', () => {
  standard(<PopperComponent {...defaultProps} footerElement={<div>Footer</div>} />);
});

describe('Popper (inner Component) with Header', () => {
  standard(<PopperComponent {...defaultProps} headerElement={<div>Header</div>} />);
});

describe('Popper (inner Component) with Header Divider', () => {
  standard(<PopperComponent {...defaultProps} headerElement={<div>Header</div>} shouldRenderHeaderDivider/>);
});

describe('Popper (inner Component) with Footer Divider', () => {
  standard(<PopperComponent {...defaultProps} footerElement={<div>Footer</div>} shouldRenderFooterDivider />);
});

describe('Popper (inner Component) with All Divider', () => {
  standard(<PopperComponent {...defaultProps} footerElement={<div>Footer</div>} headerElement={<div>Header</div>} shouldRenderFooterDivider shouldRenderHeaderDivider/>);
});

