import { Promise } from 'es6-promise';

declare interface Register {
  Promise: typeof Promise;
  implementation: string;
}

declare function register (module?: string): Register;

export = register;
