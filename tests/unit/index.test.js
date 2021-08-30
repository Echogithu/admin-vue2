/* eslint-disable no-undef */
import { mount } from '@vue/test-utils';
import HelloWorld from '../../src/components/HelloWorld.vue';
import { a } from './a';

test('1+1=2', () => {
  console.log(a());
  console.log(mount(HelloWorld));
  expect(1 + 1).toBe(2);
});
