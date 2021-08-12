import React, {PureComponent, ReactElement} from 'react';
import {Screen} from '@vizir-banking/banking-app-core/dist/common';
import {Text} from '@vizir-banking/banking-app-core/dist/layout';

export class Sample extends PureComponent {
  public render(): ReactElement {
    return (
      <Screen>
        <Text>{'Olá mundo'}</Text>
      </Screen>
    );
  }
}
