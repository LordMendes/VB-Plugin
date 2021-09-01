import { ComponentType, PropsWithChildren } from 'react';
import { ApplicationContextType } from '@vizir-banking/banking-app-core/dist/contexts/application-context';
export declare type ContextProps = {
    applicationContext: ApplicationContextType;
};
declare type OmitContextProps<Props> = Exclude<PropsWithChildren<Props>, keyof ContextProps>;
export declare function withContexts<Props>(Component: ComponentType<Props & ContextProps>): ComponentType<OmitContextProps<Props>>;
export {};
