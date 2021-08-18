import React from 'react';
import {Screen} from '@vizir-banking/banking-app-core/dist/common';
import {Button} from '@vizir-banking/banking-app-core/dist/layout';

interface Props {
  navigation: {
    navigate: Function;
    goBack: Function;
  };
}

export const Page2 = ({navigation}: Props) => {
  return (
    <Screen>
      <Button
        onPress={() => navigation.goBack()}
        text={'Voltar para página 1'}
      />
    </Screen>
  );
};
