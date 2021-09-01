import React from 'react';
import { ApplicationContext, } from '@vizir-banking/banking-app-core/dist/contexts/application-context';
export function withContexts(Component) {
    return (props) => {
        return (React.createElement(ApplicationContext.Consumer, null, (applicationContext) => (React.createElement(Component, Object.assign({}, props, { applicationContext: applicationContext })))));
    };
}
