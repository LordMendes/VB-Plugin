import React, {ReactElement, ComponentType, PropsWithChildren} from 'react';
import {
  ApplicationContext,
  ApplicationContextType,
} from '@vizir-banking/banking-app-core/dist/contexts/application-context';

export type ContextProps = {
  applicationContext: ApplicationContextType;
};

type OmitContextProps<Props> = Exclude<
  PropsWithChildren<Props>,
  keyof ContextProps
>;

export function withContexts<Props>(
  Component: ComponentType<Props & ContextProps>,
): ComponentType<OmitContextProps<Props>> {
  return (props: OmitContextProps<Props>): ReactElement => {
    return (
      <ApplicationContext.Consumer>
        {(applicationContext): ReactElement => (
          <Component {...props} applicationContext={applicationContext} />
        )}
      </ApplicationContext.Consumer>
    );
  };
}
