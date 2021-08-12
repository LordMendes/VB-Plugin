import React, { PureComponent } from 'react';
import { Screen } from '@vizir-banking/banking-app-core/dist/common';
import { Text } from '@vizir-banking/banking-app-core/dist/layout';
export class Sample extends PureComponent {
    render() {
        return (React.createElement(Screen, null,
            React.createElement(Text, null, 'Olá mundo')));
    }
}
