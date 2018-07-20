<template>
    <q-page padding >
        <div>
            <p>testing </p>
            <!-- <q-toggle v-model="drawerState" label="toggle label" /><br>
            <p>drawerState value is : {{ drawerState }}</p>
            <q-input v-model="drawerState" stack-label="getter testing" /><br>
            <p>getterTestValue value is : {{ drawerState }}</p>
            <q-input v-model="tempVlaue" stack-label="getter testing" /><br>
            <p>getterTestValue value is : {{ tempVlaue }}</p>
            <q-btn size="lg" >click me</q-btn> -->
        </div>
        <component :is="newTemp"></component>
        <component :is="newTemp"></component>
        <component :is="newTemp"></component>
    </q-page>
</template>

<script>
import testComponent from '../components/new-component.vue'

export default {
  // computed: {
  //   data () {
  //     return {
  //       tempVlaue : 'tempVariable'
  //     } 
  //   },
  //   drawerState: {
  //     get () {
  //       return this.$store.state.showcase.drawerState
  //     },
  //     set (val) {
  //       this.$store.commit('showcase/updateDrawerState', val)
  //     }
  //   },
  //   tempVlaue: {
  //      get () {
  //       return this.$store.state.showcase.tempVlaue
  //     },
  //     set (val) {
  //       this.$store.commit('showcase/getterTestValue', val)
  //     } 
  //   }
  // }
  data () {
    return {
      newTemp: testComponent
    }
  },
  computed: {
  }
  // components: {
  //   testComponent
  // }
}
</script>
