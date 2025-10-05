export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/contact.html", { loader: () => import(/* webpackChunkName: "contact.html" */"C:/Projects/KayhanPortfolio/docs/.vuepress/.temp/pages/contact.html.js"), meta: {"title":""} }],
  ["/projects.html", { loader: () => import(/* webpackChunkName: "projects.html" */"C:/Projects/KayhanPortfolio/docs/.vuepress/.temp/pages/projects.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Projects/KayhanPortfolio/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"👋 Hi, I'm Kayhan"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Projects/KayhanPortfolio/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
