//import Vue from "vue";

import { storiesOf } from "@storybook/vue";
import { withNotes } from "@storybook/addon-notes";
import { withReadme, withDocs } from "storybook-readme";

import CountComponent from "../src/components/CountComponent.vue";
import CountComponentReadme from "../src/components/CountComponent.md";
import CountComponentDocs from "../src/components/CountComponentDoc.md";

const withDocsCustom = withDocs({
  PreviewComponent: {
    data() {
      return {
        styles: {
          textAlign: "left",
          padding: "25px",
          margin: "25px 0",
          boxShadow: "0 0 40px rgba(0, 0, 0, 0.1)"
        }
      };
    },
    template: `<div v-bind:style="styles"><slot></slot></div>`
  }
});

storiesOf("Note/CountComponent", module)
  .addDecorator(withNotes)
  .add(
    "CountComponent",
    () => ({
      components: { CountComponent },
      template: `
            <CountComponent />
        `
    }),
    {
      notes: `
        With Notes
        Counter
    `
    }
  );

storiesOf("Note/CountComponent", module)
  .addDecorator(withNotes)
  .addDecorator(withDocsCustom(CountComponentDocs))
  .addDecorator(withReadme(CountComponentReadme))
  .add(
    "CountComponent",
    () => ({
      components: { CountComponent },
      template: `
            <CountComponent />
        `
    }),
    {
      notes: `
        With Notes
        Counter
    `
    }
  );
