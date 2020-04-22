export const state = () => ({
  // {id: "fL136KlJNQNssVoOmO4r", text: "Buy Apples FST"}
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

export const actions = {
  loadTODOLIST (context) {
    this.$fireStore.collection('todolist').get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const record = {
            id: doc.id,
            text: doc.data().item
          }
          console.log('RECORD', record)
          context.commit('addtoList', record)
        })
        console.log(snapshot)
      })
      .catch((err) => {
        console.log('Error getting documents', err)
      })
  },
  removeITEM (context, id) {
    // Remove from store then remove from cloud
    // there is no break in forEach loop
    // https://medium.com/front-end-weekly/3-things-you-didnt-know-about-the-foreach-loop-in-js-ff02cec465b1
    for (let i = 0; i < context.state.todo_list.length; i++) {
      if (context.state.todo_list[i].id === id) {
        context.commit('removeList', i)
        break
      }
    }
    this.$fireStore.collection('todolist').doc(id).delete()
      .then((response) => {
        console.log('REMOVE ACTION', response)
      })
      .catch((err) => {
        console.log('Error getting documents', err)
      })
  },
  addITEM (context, text) {
    this.$fireStore.collection('todolist').add({ item: text })
      .then((response) => {
        console.log('Added document with ID: ', response.id)
        const record = {
          id: response.id,
          text
        }
        context.commit('addtoList', record)
      })
      .catch((err) => {
        console.log('Error getting documents', err)
      })
  }
}
