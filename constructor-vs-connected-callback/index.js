export { Example1ComponentA } from './example-1.js';
import { Example2ComponentA } from './example-2.js';
import { Example3ComponentA } from './example-3.js';
import { Example4ComponentA } from './example-4.js';

const example2Container = document.querySelector('#example-2');
const example3Container = document.querySelector('#example-3');
const example4Container = document.querySelector('#example-4');

example2Container.append(new Example2ComponentA());
example3Container.append(new Example3ComponentA());
example4Container.append(new Example4ComponentA());
