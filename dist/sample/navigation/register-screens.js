import { AppRoute } from '@vizir-banking/banking-app-core/dist/navigation/app-route/app-route';
import { Sample } from '../../sample/screens/sample';
import { SAMPLE_SCREENS } from '../../sample/navigation/screen-definitions';
export const registerScreens = (routesManager) => {
    routesManager.addSection('sample-plugin', SAMPLE_SCREENS, (routes) => {
        return routes.concat([new AppRoute(SAMPLE_SCREENS.home, Sample)]);
    });
};
