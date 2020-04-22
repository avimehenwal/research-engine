<template>
  <v-card>
    <v-card-title> Register New User </v-card-title>
    <v-card-text>
      <v-form ref="form">
        <v-text-field
          v-model="email"
          label="E-mail"
        />
        <v-text-field
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="Password"
          hint="At least 8 characters"
          counter
          @click:append="show1 = !show1"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn color="error" class="mr-4" @click="reset">
        Reset Form
      </v-btn>
      <v-btn color="warning" class="mr-4" @click="existingUser">
        Already has a Account
      </v-btn>
      <v-btn color="success" class="mr-4" @click="newUser">
        Register New user
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    password: '',
    email: '',
    show1: false,
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => ('The email and password you entered don\'t match')
    }
  }),

  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
    newUser () {
      this.$fireAuth.createUserWithEmailAndPassword(this.email, this.password)
        .catch(function (error) {
          // Handle Errors here.
          const errorCode = error.code
          const errorMessage = error.message
          console.log(errorCode, errorMessage)
          // ...
        })
    },
    existingUser () {
      this.$fireAuth.signInWithEmailAndPassword(this.email, this.password)
        .then((res) => {
          console.log('SIGNIN', res)
        })
        .catch(function (error) {
          const errorCode = error.code
          const errorMessage = error.message
          console.log(errorCode, errorMessage)
        })
    }
  }
}
</script>
