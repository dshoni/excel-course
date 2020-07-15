import {DomListener} from '@core/DomLIstener'

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
  }

  init() {
    this.initDOMListeners()
  }

  // returns component template
  toHTML() {
    return ''
  }
}
