import { configure, addParameters } from '@storybook/vue';
import { default as theme } from './theme.js';

//importing bootstrap italia and bootstrap
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import "../assets/docs.min.css";
import "../assets/css/fonts.css";

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  options: {
      name: 'Design Vue Kit',
      url: 'https://github.com/italia/design-vue-kit',
      theme: theme,
  },
});

configure(loadStories, module);
