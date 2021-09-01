/*
使用babel-plugin-import按需引入antd，具体配置在babel.config.js中。
另外因为是定制主题的方式，还需要在vue.config.js中配置less的相关参数，
其中javascriptEnabled的值必须为true，否则主题定制的样式无法生效
 */
import Vue from 'vue';
import { Button, Dropdown, Input, Layout, Menu, Avatar } from 'ant-design-vue';

/*需要注册的组件名字, 注册之前需要确保已经import这个组件*/
const components = [Button, Input, Layout, Menu, Dropdown, Avatar];
register(components);

function register(components) {
  components.forEach(comp => {
    Vue.use(comp);
  });
  Vue.component(Button.name, Button);
}
