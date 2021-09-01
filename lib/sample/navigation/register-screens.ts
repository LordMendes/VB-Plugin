import {AppRoute} from '@vizir-banking/banking-app-core/dist/navigation/app-route/app-route';
import {RoutesManager} from '@vizir-banking/banking-app-core/dist/hooks/routes-manager';

import {Page1} from '~/sample/screens/Page1';
import {Page2} from '~/sample/screens/Page2';
import {PAGE_NAVIGATION_SCREENS} from '~/sample/navigation/screen-definitions';

export const registerScreens = (routesManager: typeof RoutesManager): void => {
  routesManager.addSection(
    'sample-plugin',
    PAGE_NAVIGATION_SCREENS,
    (routes: AppRoute[]): AppRoute[] => {
      return routes.concat([
        new AppRoute(PAGE_NAVIGATION_SCREENS.page1, Page1),
        new AppRoute(PAGE_NAVIGATION_SCREENS.page2, Page2),
      ]);
    },
  );
};
