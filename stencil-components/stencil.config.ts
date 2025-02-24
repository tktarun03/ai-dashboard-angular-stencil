import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-components',
  outputTargets: [
    { type: 'dist' },
    { type: 'www', serviceWorker: null }
  ]
};
