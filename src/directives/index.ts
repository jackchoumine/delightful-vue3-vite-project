import type { App } from 'vue'
import copy from './copy'
import clickOutside from './clickOutside'
import auth from './auth'
import title from './title'
const directiveObj = {
  copy,
  clickOutside,
  auth,
  title,
}

export default function (app: App<Element>) {
  Object.keys(directiveObj).forEach(key => {
    app.directive(key, directiveObj[key])
  })
  return app
}
