<!-- prettier-ignore -->
<docs>
#コンポーネント内のdocs

> NOTE: → **docs** のタグで囲んだ部分を.vueファイル内に入れておくとDocとして反映してくれる

さんぷるぷる

```
some command
```

↓の感じでコンポーネントの表示場所を決めれる `<!-- STORY -->`
<!-- STORY -->

表

| propName | propType | defaultValue | isRequired |
| -------- | -------- | ------------ | ---------- |
| onClick  | func     | -            |            |
| alert    | boolean  | false        | -          |
| success  | boolean  | false        | -          |
</docs>

<template>
  <section>
    <input v-model="count" />
    <button v-on:click="count += 1;">count up!!!</button>
  </section>
</template>

<script>
export default {
  data() {
    return { count: 0 };
  }
};
</script>

<style></style>
