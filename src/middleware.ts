/* eslint-disable import/no-default-export */
/* eslint-disable hardcore/export-match-filename */
import createMiddleware from 'next-intl/middleware';

import { i18n } from '@/i18n-config';

export default createMiddleware({
  // A list of all locales that are supported
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  locales: i18n.locales,

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'fr',
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
