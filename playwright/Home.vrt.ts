import test, { expect, Locator, Page } from '@playwright/test';

// Copy of the Playwright ScreenshotOptions type which is not exposed
// See: https://playwright.dev/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1
interface ScreenshotOptions {
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

type Options = {
  scenario?: (page: Page) => Promise<void>;
  customBreakpoints?: number[];
  shouldUseExtendedBreakpoints?: boolean;
  // Should be passed if executing multiple media query tests in one .vrt file, to make the tests distinguishable
  testTitle?: string;
  shouldSkipFFAndWebkitBrowser?: boolean;
};

const BREAKPOINTS = [319, 320, 768, 1024, 1536];
const BREAKPOINTS_EXTENDED = [1668, 1920, 2560];
const PAGE_URL = 'http://localhost:3000';

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
 *
 * @param pageId - The page ID where the VRT should be done
 * @param options {Options} (optional) - Options object
 * @param screenshotOptions {ScreenshotOptions} (optional) - Options object for the screenshot
 *
 * Executes media query tests for all available breakpoints.
 * If executing multiple media query tests in one .vrt file
 * make sure to set testTitle param in the options object.
 *
 * If customBreakpoints are passed, only those breakpoints will be tested.
 * */
const executeMediaQueryTests = async (
  options?: Options,
  screenshotOptions?: ScreenshotOptions
): Promise<void> => {
  const {
    scenario,
    shouldUseExtendedBreakpoints,
    testTitle,
    customBreakpoints,
  } = options || {};

  let selectedBreakpoints = BREAKPOINTS;

  // Custom breakpoints have priority over shouldUseExtendedBreakpoints
  if (customBreakpoints) {
    selectedBreakpoints = customBreakpoints;
  } else if (shouldUseExtendedBreakpoints) {
    selectedBreakpoints = [...BREAKPOINTS, ...BREAKPOINTS_EXTENDED];
  }

  selectedBreakpoints.forEach((breakpoint) => {
    test(`${
      testTitle ? testTitle + ' ' : ''
    }viewport width ${breakpoint}px`, async ({ page }, { title }) => {
      // Needs to be set for proper screen height
      await page.setViewportSize({ width: breakpoint, height: 1 });

      await page.goto(PAGE_URL, { waitUntil: 'networkidle' });
      await page.setViewportSize({
        width: breakpoint,
        height: await page.evaluate(() => document.body.clientHeight),
      });

      if (scenario) {
        await scenario(page);
      }

      await takeScreenshot(page, title, screenshotOptions);
    });
  });
};

test.describe('visual regression tests in different viewports', () => {
  executeMediaQueryTests();
});
