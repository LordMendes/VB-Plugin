import { AppRoute } from '@vizir-banking/banking-app-core/dist/navigation/app-route/app-route';
import { Sample } from '../../sample/screens/sample';
import { Page1 } from '../../sample/screens/Page1';
import { Page2 } from '../../sample/screens/Page2';
import { SAMPLE_SCREENS } from '../../sample/navigation/screen-definitions';
import { PAGE_NAVIGATION_SCREENS } from '../../sample/navigation/screen-definitions';
export const registerScreens = (routesManager) => {
    routesManager.addSection('sample-plugin', SAMPLE_SCREENS, (routes) => {
        return routes.concat([
            new AppRoute(SAMPLE_SCREENS.home, Sample),
            new AppRoute(PAGE_NAVIGATION_SCREENS.page1, Page1),
            new AppRoute(PAGE_NAVIGATION_SCREENS.page2, Page2),
        ]);
    });
};
