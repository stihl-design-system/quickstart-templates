import test from '@playwright/test';
import { captureBreakpoint, getBreakpoints } from './visual-regression';

// Renders the same content as the start page, so the header/mobile menu
// scenarios are already covered by Home.vrt.ts. This suite only guards the
// subgrid based layout across breakpoints.
const options = { pagePath: '/subgrid-layout' };

test.describe('visual regression tests in different viewports', () => {
  getBreakpoints().forEach((breakpoint) => {
    test(`viewport width ${breakpoint}px`, async ({ page }, { title }) => {
      await captureBreakpoint(page, title, breakpoint, options);
    });
  });
});
