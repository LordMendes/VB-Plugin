import React from 'react';
import { Screen } from '@vizir-banking/banking-app-core/dist/common';
import { Button } from '@vizir-banking/banking-app-core/dist/layout';
export const Page2 = ({ navigation }) => {
    return (React.createElement(Screen, null,
        React.createElement(Button, { onPress: () => navigation.goBack(), text: 'Voltar para página 1' })));
};
