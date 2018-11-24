//import Vue from "vue";

import { storiesOf } from "@storybook/vue";
import CountComponent from "../src/components/CountComponent.vue";

storiesOf("CountComponent", module).add("CountComponent", () => ({
  components: { CountComponent },
  template: `
            <CountComponent />
        `
}));
