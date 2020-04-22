<template>
  <v-container>
    <v-card>
      <v-card-title>
          Todo Application
          <v-spacer></v-spacer>
          <v-chip color="primary">
            {{ listCount }}
          </v-chip>
      </v-card-title>
      <v-card-text>
          <v-textarea
            label="Add New item to Todo list"
            clearable
            counter
            outlined
            rounded
            rows="1"
            v-model="value"
            @keydown.enter="addtolist"
          ></v-textarea>
        <v-list shaped>
          <v-list-item v-for="(item, index) in todolist" :key="item">
            <v-list-item-title>
              <v-chip outlined small>
                {{index + 1}}
              </v-chip>
              <strong>
                {{ item }}
              </strong>
            </v-list-item-title>
            <v-list-item-action>
              <v-btn @click="removeitem(index)" fab small>
                <v-icon color="error">mdi-delete-forever</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-btn color="error" @click="poplist">Pop item -</v-btn>
        <v-btn color="success" @click="addtolist()" :disabled="addtolistbtnstate">ADD to list +</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>

export default {
  data () {
    return {
      todolist: this.$store.state.todo_list,
      value: ''
    }
  },
  methods: {
    addtolist () {
      if (this.value) {
        this.$store.commit('addtoList', this.value)
        this.value = null
      }
    },
    poplist () {
      this.$store.commit('popList')
    },
    removeitem (index) {
      console.log('remove from list')
      this.$store.commit('removeList', index)
    }
  },
  computed: {
    addtolistbtnstate () {
      if (this.value && this.value.length > 1) {
        return false
      } else {
        return true
      }
    },
    listCount () {
      return this.$store.state.todo_list.length
    }
  }

}
</script>
