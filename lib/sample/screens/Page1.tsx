import React from 'react';
import {Screen} from '@vizir-banking/banking-app-core/dist/common';
import {Button} from '@vizir-banking/banking-app-core/dist/layout';
import {PAGE_NAVIGATION_SCREENS} from '~/sample/navigation/screen-definitions';

interface Props {
  navigation: {
    navigate: Function;
    goBack: Function;
  };
}

export const Page1 = ({navigation}: Props) => {
  return (
    <Screen>
      <Button
        onPress={() => navigation.navigate(PAGE_NAVIGATION_SCREENS.page2)}
        text={'Clique para ir para página 2'}
      />
    </Screen>
  );
};
