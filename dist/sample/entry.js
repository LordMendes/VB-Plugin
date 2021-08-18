import { registerScreens } from '../sample/navigation/register-screens';
import { PAGE_NAVIGATION_SCREENS } from '../sample/navigation/screen-definitions';
export const sampleEntry = ({ homeManager, routesManager, }) => {
    homeManager.addHomeMenuItem([
        {
            order: 2,
            label: 'Plugin Bacana',
            icon: 'pix',
            iconWidth: 25,
            iconHeight: 25,
            screenName: PAGE_NAVIGATION_SCREENS.page1,
        },
    ]);
    registerScreens(routesManager);
};
