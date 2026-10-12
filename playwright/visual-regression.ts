import test, { expect, Locator, Page } from '@playwright/test';

// **************************************************************
// Shared helpers for all *.vrt.ts suites. Lives outside the `**.vrt.ts`
// testMatch pattern (see playwright.config.vrt.ts) so Playwright does not pick
// it up as a test file itself.
// **************************************************************

// Copy of the Playwright ScreenshotOptions type which is not exposed
// See: https://playwright.dev/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1
export interface ScreenshotOptions {
  animations?: 'disabled' | 'allow';
  caret?: 'hide' | 'initial';
  clip?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  fullPage?: boolean;
  mask?: Array<Locator>;
  maskColor?: string;
  maxDiffPixelRatio?: number;
  maxDiffPixels?: number;
  omitBackground?: boolean;
  scale?: 'css' | 'device';
  stylePath?: string | Array<string>;
  threshold?: number;
  timeout?: number;
}

export type Options = {
  // Route to screenshot, relative to the served app root (e.g. '/subgrid-layout').
  // Defaults to the start page.
  pagePath?: string;
  scenario?: (page: Page) => Promise<void>;
  customBreakpoints?: number[];
  shouldUseExtendedBreakpoints?: boolean;
  // custom height of the screenshot
  height?: number;
};

/**
 * Skips tests for Firefox and Webkit browsers within a Playwright test suite.
 *
 * @param {string} - The message to display for skipped tests.
 */
export const skipFFAndWebkitBrowser = (
  message = 'Tests skipped on FF & Webkit'
) => {
  test.skip(({ browserName }) => {
    return browserName === 'firefox' || browserName === 'webkit';
  }, message);
};

const BREAKPOINTS = [319, 320, 768, 1024, 1536];
const BREAKPOINTS_EXTENDED = [1668, 1920, 2560];
const BASE_URL = 'http://localhost:3000';

/**
 * Take a screenshot with disabled animations and an YIQ color space threshold of 0.2
 * Read more about threshold here: https://playwright.dev/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1-option-threshold
 * @param page Playwright Page object
 * @param title filename of screenshot
 * @param screenshotOptions {ScreenshotOptions} (optional) - Options object for the screenshot
 */
const takeScreenshot = async (
  page: Page,
  title: string,
  screenshotOptions?: ScreenshotOptions
) => {
  return expect(page).toHaveScreenshot(`${title}.png`, {
    animations: 'disabled',
    threshold: 0.1,
    maxDiffPixelRatio: 0,
    ...screenshotOptions,
  });
};

/**
 * Returns the viewport widths a suite should be screenshotted at.
 *
 * If customBreakpoints are passed, only those breakpoints are returned.
 */
export const getBreakpoints = ({
  customBreakpoints,
  shouldUseExtendedBreakpoints,
}: Options = {}): number[] => {
  // Custom breakpoints have priority over shouldUseExtendedBreakpoints
  if (customBreakpoints) {
    return customBreakpoints;
  }

  return shouldUseExtendedBreakpoints
    ? [...BREAKPOINTS, ...BREAKPOINTS_EXTENDED]
    : BREAKPOINTS;
};

/**
 * Opens the page at the given viewport width and screenshots it.
 *
 * Note: the surrounding `test()` call has to stay inside the *.vrt.ts suite.
 * Playwright derives both the test location and the `{testFileName}` of
 * `snapshotPathTemplate` from the call site, so declaring tests from this
 * module would make all suites share one snapshot folder.
 *
 * @param page Playwright Page object
 * @param title filename of the screenshot, usually the test title
 * @param breakpoint viewport width to test
 * @param options {Options} (optional) - Options object
 * @param screenshotOptions {ScreenshotOptions} (optional) - Options object for the screenshot
 */
export const captureBreakpoint = async (
  page: Page,
  title: string,
  breakpoint: number,
  options: Options = {},
  screenshotOptions?: ScreenshotOptions
): Promise<void> => {
  const { pagePath = '', scenario, height } = options;

  // Needs to be set for proper screen height
  await page.setViewportSize({ width: breakpoint, height: 1 });

  await page.goto(`${BASE_URL}${pagePath}`, { waitUntil: 'networkidle' });
  await page.setViewportSize({
    width: breakpoint,
    height: height
      ? height
      : await page.evaluate(() => document.body.clientHeight),
  });

  if (scenario) {
    await scenario(page);
  }

  await takeScreenshot(page, title, screenshotOptions);
};
