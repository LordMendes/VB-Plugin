import {EntrypointParams} from '@vizir-banking/banking-app-core/dist/utils/entrypoint-params';
import {registerScreens} from '~/sample/navigation/register-screens';
import {PAGE_NAVIGATION_SCREENS} from '~/sample/navigation/screen-definitions';

export const sampleEntry = ({
  homeManager,
  routesManager,
  env,
}: EntrypointParams): void => {
  homeManager.addHomeMenuItem([
    {
      order: 2,
      label: 'Plugin Bacana',
      icon: 'pix',
      iconWidth: 25,
      iconHeight: 25,
      screenName: PAGE_NAVIGATION_SCREENS.page1,
    },
    {
      order: 2,
      label: 'Plugin Esquisito',
      icon: 'pix',
      iconWidth: 25,
      iconHeight: 25,
      screenName: PAGE_NAVIGATION_SCREENS.page2,
    },
  ]);
  registerScreens(routesManager);
};
