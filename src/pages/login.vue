<template>
  <q-page padding class="row justify-center">
    <q-card style="width: 400px; max-width: 90vw; height:50%"> 
      <q-card-title>
        <span><q-radio value=1 val=1 color="green" /></span> Sign in
      </q-card-title>  
      <q-card-separator />
      <q-card-main>
        <!-- <q-input value='' class="text-dark" inverted color="white"
        v-model="form.email" placeholder="Email or Username"
        @blur="$v.form.email.$touch" @keyup.enter="submit" 
        :error="$v.form.email.$error" :ref="email" /><br><br> -->
        <q-input class="text-dark" inverted color="white"
        v-model="email_id" placeholder="Email or Username" /><br><br>
        <q-input value='' v-model="pwd" type="password" class="text-dark" inverted color="white" placeholder="password" />
        <br><br><br>
        <q-btn @click="sign_in" align="center" color="primary" style="width:100%">Sign in</q-btn>
      </q-card-main>  
    </q-card><br><br>
  </q-page>
</template>

<script>
// import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'PageName',
  data () {
    return {
      email_id:"",
      pwd:"",
      // form: {
      //   email: ''
      // }
    }
  },
  validations: {
    // form: {
    //   email: { required, email  }
    // }
  },
  methods: {
    sign_in () {
      // this.$v.form.$touch()

      // if (this.$v.form.$error) {
      //   console.log("email",this.$v.form.email);
      //   this.$q.notify('Please review email again.')
      // }
      if (this.email_id == "deepak@mnt.com" && this.pwd == 123456) {
        window.location="/test_jmi";
        // this.$route.router.go('/test_jmi');
      }
      else {
        this.$q.notify('Email ID or password is not correct.')
      }
    },
  },
};
</script>

<style>
</style>
