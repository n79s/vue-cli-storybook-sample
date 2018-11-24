# vue-cli-storybook-sample

## 作り方

### プロジェクトの初期セット

```
#vul-cli3でプロジェクトを作る
vue create vue-cli-storybook-sample

#プロジェクトは↓で作る
Vue CLI v3.1.3
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, Linter, Unit
? Pick a linter / formatter config: Prettier
? Pick additional lint features: Lint on save
? Pick a unit testing solution: Jest
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? (y/N)

#適当にコンポーネント作る
src/CountComponent.vue

#Unitテストを書く
tests/unit/counter.spec.js

#Unitテスト実行
npm run test:unit
```

### StoryBook のインストール

```
#https://storybook.js.org/basics/guide-vue/
npm install --save-dev @storybook/vue
npm install --save-dev babel-core babel-loader babel-preset-vue

#package.jsonに下記を追記
{
    .....
    "scripts": {
        "storybook": "start-storybook -p 9001 -c .storybook"
    }
    .....
}

#.storybookディレクトリを作って設定ファイルを作る
mkdir .storybook

#.storybook/config.js
import { configure } from '@storybook/vue';
import Vue from 'vue';

function loadStories() {
  require('../stories');
  const req = require.context('../stories', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);

#ストーリを作る(storiesディレクトリに作る)
mkdir stories

#stories/index.js
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

#stories/counter.stories.js
import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import CountComponent from '../src/components/CountComponent.vue'

storiesOf('CountComponent', module)
    .add('CountComponent', () => ({
        components: { CountComponent },
        template: `
            <CountComponent />
        `
    })
);

#storybookの実行
npm run storybook

```

### StoryBook で VisualTest をやれるようにする

```
#https://storybook.js.org/testing/automated-visual-testing/
#https://github.com/vuejs/vue-cli/issues/1584

#必要なパッケージのインストール
npm install --save-dev jest puppeteer jest-puppeteer jest-image-snapshot start-server-and-test

#jest.configの設定。単体テストとはファイルを分ける(jest.config-visual.js)
module.exports = {
    moduleFileExtensions: ['js','jsx','json','vue'],
    preset: 'jest-puppeteer',
    testRegex: './*\\.test\\.js$',
    setupTestFrameworkScriptFile: './tests/setupVisualTests.js',
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+\\.js$': 'babel-jest',
    },
    transformIgnorePatterns: ['/node_modules/'],
};

#テストのセットアップファイルを作る(tests/setupVisualTests.js)
import { toMatchImageSnapshot } from 'jest-image-snapshot';
expect.extend({ toMatchImageSnapshot });

#テストを書く(tests/visual/counter.test.js)
describe('CounterComponentTest', () => {
  it('visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto('http://localhost:9001/iframe.html?selectedKind=CountComponent&selectedStory=CountComponent');
    const image = await page.screenshot();
    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });
});

#テストを実行
npm run test:visual

#画像の更新はこれ
npm run test:visual-update

#単体テスト側のスナップショットの更新は↓(途中の--は間違ってるわけじゃない)
npm run test:unit -- --updateSnapshot

```

テストの中で書く URL は `npm run storybook` で動かして、アクセスした URL を以下の感じで指定する。

```
http://localhost:9001/?selectedKind=HelloWorld&selectedStory=HelloWorld&full=0&addons=1&stories=1&panelRight=0
↓
http://localhost:9001/iframe.html?selectedKind=CountComponent&selectedStory=CountComponent
```

### StoryBook をいい感じにする

```
#必要なAddOnのインストール
npm install --save-dev @storybook/addons @storybook/addon-actions @storybook/addon-links @storybook/addon-notes @storybook/addon-knobs @storybook/addon-viewport @storybook/addon-storysource @storybook/addon-options storybook-readme

#設定ファイルを作る(.storybook/addons.js)
import 'storybook-readme/register';
import '@storybook/addon-storysource/register'
import '@storybook/addon-knobs/register'
import '@storybook/addon-notes/register'
import '@storybook/addon-actions/register'
import '@storybook/addon-links/register'
import '@storybook/addon-viewport/register'
import '@storybook/addon-options/register';

#.storybook/config.jsを↓に変える
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

```

### ESLint とか

```
npm install --save-dev prettier

#vscodeでPrettier - Code formatterとESLint入れる。
#Ctrl+Shift+P→基本設定→setting.json
{
  "workbench.list.openMode": "doubleClick",
  "editor.formatOnSave": true,
  "prettier.eslintIntegration": true,
  "javascript.format.enable": false,
  "files.watcherExclude": {
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/node_modules/**": true,
    "**/.cache/**": true,
    "**/dist/**": true
  }
}

```

## npm のコマンド

```
npm install

npm run serve

npm run build

npm run test:unit

npm run lint
```
