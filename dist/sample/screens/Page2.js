import React from 'react';
import { Screen } from '@vizir-banking/banking-app-core/dist/common';
import { Button } from '@vizir-banking/banking-app-core/dist/layout';
import { WebView } from 'react-native-webview';
import { withContexts } from '../../contexts/withContext';
const BasePage2 = ({ navigation, applicationContext }) => {
    return (React.createElement(Screen, null,
        React.createElement(Button, { onPress: () => navigation.goBack(), text: 'Voltar para página 1' }),
        React.createElement(WebView, { originWhitelist: ['*'], source: { uri: 'https://vizirbank.com/' } }),
        console.log(applicationContext.env)));
};
export const Page2 = withContexts(BasePage2);
