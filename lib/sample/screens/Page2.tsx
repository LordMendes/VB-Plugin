import React, {ReactElement} from 'react';
import {Screen} from '@vizir-banking/banking-app-core/dist/common';
import {Button} from '@vizir-banking/banking-app-core/dist/layout';
import {WebView} from 'react-native-webview';
import {ApplicationContextType} from '@vizir-banking/banking-app-core/dist/contexts/application-context';
import {withContexts} from '~/contexts/withContext';
interface Props {
  applicationContext: ApplicationContextType;
  navigation: {
    goBack: Function;
  };
}

const BasePage2 = ({navigation, applicationContext}: Props) => {
  return (
    <Screen>
      <Button
        onPress={() => navigation.goBack()}
        text={'Voltar para página 1'}
      />
      <WebView
        originWhitelist={['*']}
        source={{uri: 'https://vizirbank.com/'}}
      />
      {console.log(applicationContext.env)}
    </Screen>
  );
};

export const Page2 = withContexts(BasePage2);
