import {EntrypointParams} from '@vizir-banking/banking-app-core/dist/utils/entrypoint-params';
import {sampleEntry} from '~/sample/entry';

export default (entryParams: EntrypointParams): void => {
  sampleEntry(entryParams);
};
