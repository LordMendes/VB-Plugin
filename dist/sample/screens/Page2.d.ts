import React from 'react';
import { ApplicationContextType } from '@vizir-banking/banking-app-core/dist/contexts/application-context';
interface Props {
    applicationContext: ApplicationContextType;
    navigation: {
        goBack: Function;
    };
}
export declare const Page2: React.ComponentType<React.PropsWithChildren<Props>>;
export {};
