import { used } from '@local-package/example';
import { asyncTest } from './asyncTest';

console.log('local package', { used });

console.log('top level await', await asyncTest());
