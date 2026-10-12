import test, { Page } from '@playwright/test';
import {
  captureBreakpoint,
  getBreakpoints,
  Options,
  skipFFAndWebkitBrowser,
} from './visual-regression';

test.describe('visual regression tests in different viewports', () => {
  getBreakpoints().forEach((breakpoint) => {
    test(`viewport width ${breakpoint}px`, async ({ page }, { title }) => {
      await captureBreakpoint(page, title, breakpoint);
    });
  });
});

const mobileMenuOptions: Options = {
  customBreakpoints: [320, 768],
  height: 768,
  scenario: async (page: Page) => {
    const menuButton = page.locator('button', { hasText: 'Menu' });
    await menuButton.click();
    // wait for Drawer to open
    await page.waitForTimeout(100);
  },
};

test.describe('mobile menu', () => {
  skipFFAndWebkitBrowser();

  getBreakpoints(mobileMenuOptions).forEach((breakpoint) => {
    test(`mobile menu viewport width ${breakpoint}px`, async ({ page }, {
      title,
    }) => {
      await captureBreakpoint(page, title, breakpoint, mobileMenuOptions);
    });
  });
});
