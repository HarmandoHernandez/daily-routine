
import Alert from './alert.js'

export default class AddToDo {
  constructor () {
    this.title = document.getElementById('title')
    this.description = document.getElementById('description')
    this.btn = document.getElementById('add')
    this.alert = new Alert('alert')
  }

  onClick (callback) {
    this.btn.onclick = () => {
      if (this.title.value === '' || this.description.value === '') {
        this.alert.show('title and description are required')
      } else {
        this.alert.hide()
        callback(this.title.value, this.description.value)
      }
    }
  }
}
