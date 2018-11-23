import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import HelloWorld from '../src/components/HelloWorld.vue';

storiesOf('HelloWorld', module)
  .add('HelloWorld', () => ({
    components: { HelloWorld },
    template: `
      <HelloWorld msg="Welcome to Your StoryBook"/>
    `
  })
);