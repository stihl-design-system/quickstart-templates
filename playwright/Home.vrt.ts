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

/**
 * Take a screenshot with disabled animations and an YIQ color space threshold of 0.2
 * Read more about threshold here: https://playwright.dev/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1-option-threshold
 * @param page Playwright Page object
 * @param title filename of screenshot
 * @param screenshotOptions {ScreenshotOptions} (optional) - Options object for the screenshot
 */
export const takeScreenshot = async (
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

test('visual regression test for homepage', async ({ page }, { title }) => {
  // Navigate to the page you want to test
  await page.goto('http://localhost:3000/quickstart-templates', {
    waitUntil: 'networkidle',
  });

  // Take a screenshot of the full page
  await takeScreenshot(page, title, { fullPage: true });
});
