import {AppRoute} from '@vizir-banking/banking-app-core/dist/navigation/app-route/app-route';
import {RoutesManager} from '@vizir-banking/banking-app-core/dist/hooks/routes-manager';

import {Sample} from '~/sample/screens/sample';
import {SAMPLE_SCREENS} from '~/sample/navigation/screen-definitions';

export const registerScreens = (routesManager: typeof RoutesManager): void => {
  routesManager.addSection(
    'sample-plugin',
    SAMPLE_SCREENS,
    (routes: AppRoute[]): AppRoute[] => {
      return routes.concat([new AppRoute(SAMPLE_SCREENS.home, Sample)]);
    },
  );
};
