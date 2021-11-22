export default class Model {
  constructor () {
    this.view = null
    this.toDos = JSON.parse(window.localStorage.getItem('toDos'))

    if (!this.toDos || this.toDos.length < 1) {
      this.toDos = [
        {
          id: 0,
          title: 'Learn JS',
          description: 'Watch tutorials',
          completed: false
        }
      ]
      this.currentId = 1
    } else {
      this.currentId = this.toDos[this.toDos.length - 1].id + 1
    }
  }

  setView (view) {
    this.view = view
  }

  getToDos () {
    return this.toDos.map((toDo) => ({ ...toDo }))
  }

  toggleCompleted (id) {
    const index = this.findToDo(id)
    const toDo = this.toDos[index]
    toDo.completed = !toDo.completed
    this.save()
  }

  findToDo (id) {
    return this.toDos.findIndex((toDo) => toDo.id === id)
  }

  addToDo (title, description) {
    const toDo = {
      id: this.currentId++,
      title,
      description,
      completed: false
    }

    this.toDos.push(toDo)
    this.save()

    return { ...toDo } // Retorna clon de toDo
  }

  removeToDo (id) {
    const index = this.findToDo(id)
    this.toDos.splice(index, 1)

    this.save()
  }

  editToDo (id, values) {
    const index = this.findToDo(id)
    Object.assign(this.toDos[index], values)
    this.save()
  }

  save () {
    window.localStorage.setItem('toDos', JSON.stringify(this.toDos))
  }
}
