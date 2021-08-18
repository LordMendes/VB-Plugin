import React from 'react';
import { Screen } from '@vizir-banking/banking-app-core/dist/common';
import { Button } from '@vizir-banking/banking-app-core/dist/layout';
import { PAGE_NAVIGATION_SCREENS } from '../../sample/navigation/screen-definitions';
export const Page1 = ({ navigation }) => {
    return (React.createElement(Screen, null,
        React.createElement(Button, { onPress: () => navigation.navigate(PAGE_NAVIGATION_SCREENS.page2), text: 'Clique para ir para página 2' })));
};
