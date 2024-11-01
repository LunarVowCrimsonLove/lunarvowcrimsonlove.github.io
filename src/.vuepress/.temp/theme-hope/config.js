import { HopeIcon, Layout, NotFound, injectDarkmode, setupDarkmode, setupSidebarItems, scrollPromise } from "E:/桌面/编程实例/易语言实例/Hakutaku/Doc/HakutakuDoc/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.59_markdown-it@14.1.0_sass-embedded@1.80.4_vuepress@2.0.0-rc.18__d24g2234lxo43klpguhsukh56e/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineCatalogInfoGetter } from "E:/桌面/编程实例/易语言实例/Hakutaku/Doc/HakutakuDoc/node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.56_vuepress@2.0.0-rc.18_@vuepress+bundler-vite@2.0.0-rc.18__zsnhlz37mpzoaslyda5vvn5vo4/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { GlobalEncrypt, LocalEncrypt } from "E:/桌面/编程实例/易语言实例/Hakutaku/Doc/HakutakuDoc/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.59_markdown-it@14.1.0_sass-embedded@1.80.4_vuepress@2.0.0-rc.18__d24g2234lxo43klpguhsukh56e/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "E:/桌面/编程实例/易语言实例/Hakutaku/Doc/HakutakuDoc/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.59_markdown-it@14.1.0_sass-embedded@1.80.4_vuepress@2.0.0-rc.18__d24g2234lxo43klpguhsukh56e/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"

import "E:/桌面/编程实例/易语言实例/Hakutaku/Doc/HakutakuDoc/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.56_vuepress@2.0.0-rc.18_@vuepress+bundler-vite@2.0.0-rc.18_@types+n_i6m6bxq6mqxleatoru5bus5q2i/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "E:/桌面/编程实例/易语言实例/Hakutaku/Doc/HakutakuDoc/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.56_vuepress@2.0.0-rc.18_@vuepress+bundler-vite@2.0.0-rc.18_@types+n_i6m6bxq6mqxleatoru5bus5q2i/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "E:/桌面/编程实例/易语言实例/Hakutaku/Doc/HakutakuDoc/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.59_markdown-it@14.1.0_sass-embedded@1.80.4_vuepress@2.0.0-rc.18__d24g2234lxo43klpguhsukh56e/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(HopeIcon, { icon }), title] : null,
    order: meta.O,
    index: meta.I,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);

    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
};
