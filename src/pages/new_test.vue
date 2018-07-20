<template>
<div class="row justify-center">
  <div class="column">
    <!-- <q-input
      v-model="form.email"
      @blur="$v.form.email.$touch"
      @keyup.enter="submit"
      :error="$v.form.email.$error"
    /><br> -->
    <q-input v-model="number" type="number" placeholder="enter number"
    :decimals="4" step="1.5" /><br>
    <q-input v-model="number" type="number" placeholder="enter number" inverted-light /><br>
    <q-input v-model="txt" placeholder="enter the text here" inverted  /><br>
    <p color="$red-2">this is to test the text color</p><br>
    <p>Model: {{ lazy }}</p><br>
    <q-chip icon="alarm" detail icon-right="alarm" class="shadow-1" color="info">
      q-chip
    </q-chip><br>
    <q-btn round icon="email" push color="dark" text-color="primary" label="Emails">
      <q-chip floating color="primary">22</q-chip>
    </q-btn><br>
    <q-btn push color="white" text-color="primary" label="Contact">
    <q-chip small floating color="primary">2018</q-chip>
    </q-btn><br>
    <q-field icon='cloud' class="shadow-1" /><br>
    <div class="bg-primary">
    <q-input v-model="txt" placeholder="testing for text color" />
    </div><br>
    <div id="idtest" v-html="template_test"></div><br>
   
      <br><q-btn color="primary" @click="methodTest">Submit</q-btn><br>
    </div>
    <component :is="componentTest"></component>
  </div>
</template>

<script>
// import { required, email } from 'vuelidate/lib/validators';
import testComponent from '../components/new-component.vue'

export default {
  data() {
    return {
      lazy: 'new value for lazy',
      template_test: '<p>testing for template</p>',
      form: {
        email: '',
      },
      componentTest: testComponent
    }
  },
  computed: {
    // testComponent
  },
  // mounted () {
  //   this.$store.commit('showcase/updateRightDrawerComponent', testComponent)
  // },
//   validations: {
//     form: {
//       email: { required, email },
//     },
//   },
  methods: {
    submit() {
      this.$v.form.$touch();

      if (this.$v.form.$error) {
        this.$q.notify('Please review fields again.');
      }
    },
    methodTest() {
      for(var i = 1; i <= 5; i++) {
        // var str = 'this is to test',
        span = document.getElementById("idtest");

        // span.innerHTML = str;
        var body = document.getElementById('idtest');
        body.appendChild(span);
      }
    }
  },
};
</script>
