import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "MetaRuby",
  description: "记录ruby的相关内容",

  base: "/",
  theme,
});
