import {ExcelComponent} from '@core/ExcelComponent'

export class Table extends ExcelComponent {
  static className = 'excel__table'
  toHTML() {
    return `
    <div class="row">
      <div class="row-info"></div>
      <div class="row-data">
        <div class="column">
          A
        </div>
        <div class="column">
          B
        </div>
        <div class="column">
          C
        </div>
      </div>
    </div>

    <div class="row">
      <div class="row-info">1</div>
      <div class="row-data">
        <div class="cell selected" contenteditable>a1</div>
        <div class="cell" contenteditable>b1</div>
        <div class="cell" contenteditable>c1</div>
      </div>
    </div>

    <div class="row">
      <div class="row-info">2</div>
      <div class="row-data">
        <div class="cell" contenteditable>a2</div>
        <div class="cell" contenteditable>b2</div>
        <div class="cell" contenteditable>c2</div>
      </div>
    </div>
    `
  }
}