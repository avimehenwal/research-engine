export const state = () => ({
  todo_list: [],
  counter: 0
})

export const mutations = {
  increment (state) {
    state.counter++
  },
  addtoList (state, payload) {
    state.todo_list.push(payload)
  },
  popList (state) {
    state.todo_list.pop()
  },
  removeList (state, index) {
    state.todo_list.splice(index, 1)
  }
}
