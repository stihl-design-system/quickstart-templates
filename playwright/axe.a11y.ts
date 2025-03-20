import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { createHtmlReport } from 'axe-html-reporter';

const PAGES_TO_TEST = ['/'];

test.describe('Next.js App Accessibility Tests', () => {
  for (const pagePath of PAGES_TO_TEST) {
    test(`Verify no accessibility issues on ${pagePath}`, async ({
      page,
      browserName,
    }) => {
      await page.goto(`http://localhost:3000${pagePath}`);

      const accessibilityScanResults = await new AxeBuilder({ page })
        .options({
          runOnly: {
            type: 'tag',
            // rule descriptions https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#experimental-rules
            values: [
              'wcag2a',
              'wcag2aa',
              'wcag21a',
              'wcag21aa',
              // Also add non-default WCAG 2.2 A and WCAG 2.2 AA to our tests
              'wcag22a',
              'wcag22aa',
            ],
          },
        })
        .analyze();

      const reportFileName = `accessibility-report-${browserName}${pagePath.replace(
        /\//g,
        '-'
      )}.html`;
      createHtmlReport({
        results: accessibilityScanResults,
        options: {
          projectKey: `${pagePath.replace(/\//g, '-')}`,
          outputDir: 'playwright/a11y-results',
          reportFileName: reportFileName,
        },
      });

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  }
});
