// export { version } from './version';
import { version } from '../package.json';


export { version };

export type { ButtonProps } from './button';
export { default as Button } from './button';


// export { something as somethingElse }; => export var something = true;
export { default as escape } from './lib/escape';
export { default as isFQDN } from './lib/http/isFQDN';
export { default as isDomain } from './lib/http/isDomain';
export { isRdata } from './lib/rr/validatorRR';
