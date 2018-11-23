import { configure } from '@storybook/vue';
import { setOptions } from '@storybook/addon-options';
import Vue from 'vue';

setOptions({
  name: 'Vue Cli StoryBook Sample',
  url: 'https://github.com/n79s/vue-npm-module-sample',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  hierarchyRootSeparator:'/\|/',
});

function loadStories() {
  require('../stories');
  const req = require.context('../stories', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);