import comp from "C:/Projects/KayhanPortfolio/docs/.vuepress/.temp/pages/projects.html.vue"
const data = JSON.parse("{\"path\":\"/projects.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{\"updatedTime\":1759688227000,\"contributors\":[{\"name\":\"shadKalhor\",\"username\":\"shadKalhor\",\"email\":\"shad.jalal.aziz@gmail.com\",\"commits\":1,\"url\":\"https://github.com/shadKalhor\"}],\"changelog\":[{\"hash\":\"31f61a363b2dd277f823b75401f58a12f4a5c187\",\"time\":1759688227000,\"email\":\"shad.jalal.aziz@gmail.com\",\"author\":\"shadKalhor\",\"message\":\"chore: initial VuePress v2 site\"}]},\"filePathRelative\":\"projects.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
