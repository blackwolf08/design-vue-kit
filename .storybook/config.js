import { configure } from '@storybook/vue';
//importing bootstrap italia and bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
