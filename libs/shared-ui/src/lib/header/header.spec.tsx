import { render } from '@testing-library/react';

import Header from './header';

describe('Header', () => {
  const pages = ['Home', 'About', 'Contact'];
  const settings = ['Settings', 'Logout'];
  it('should render successfully', () => {
    const { baseElement } = render(<Header pages={pages} settings={settings} />);
    expect(baseElement).toBeTruthy();
  });
});
