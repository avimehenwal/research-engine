<template>
  <v-container>
    <v-card>
      <v-card-title>
          Todo Application
          <v-spacer></v-spacer>
          <v-chip color="primary">{{ listCount }}</v-chip>
      </v-card-title>
        <v-card-subtitle>
        </v-card-subtitle>
        <v-textarea
          clearable
          counter
          outlined
          rounded
          rows="1"
          v-model="value"
        ></v-textarea>
      <v-card-text>
        <v-list>
          <v-list-item v-for="(item, index) in todolist" :key="item">
            <v-list-item-title>
              {{ item }}
            </v-list-item-title>
            <v-list-item-action>
              <v-btn color="red" @click="removeitem(index)">remove {{index}}</v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-btn color="success" @click="addtolist()" :disabled="addtolistbtnstate">ADD to list +</v-btn>
        <v-btn @click="$store.commit('increment')">Counter ++</v-btn>
        <v-btn color="warning" @click="poplist">Pop item</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>

export default {
  data () {
    return {
      todolist: this.$store.state.todo_list,
      value: null
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
