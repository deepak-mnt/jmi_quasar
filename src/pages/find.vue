<template>
  <q-page padding align="center">
    <!-- <router-link to="/test_jmi"><q-btn>Home</q-btn></router-link><br><br> -->
    <q-card >
      <q-card-title >
        <h4>Find Item</h4>
        <p>Please scan or enter item ID Code</p>
      </q-card-title>
      <q-card-main >
        <q-input v-model="newTemp" inverted style="border-style: solid; border-color:black" /><br>
        <q-btn>Scan</q-btn><br>
        <div id="find" style="display:none">
          <img src="~/assets/img/last_conference.png" alt="Last Conference" width="100%">
          <p>Is this the correct ITEM?</p>
          <router-link to="/map"><q-btn>Yes</q-btn></router-link>
          <router-link to="/test_jmi"><q-btn>No</q-btn></router-link><br><br>
        </div>
      </q-card-main>
    </q-card>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data () {
    return {
      temp: ""
      // imgValue: "~/assets/img/last_conference.png"
    }  
  },
  computed: {
    newTemp: {
      get () {
        return this.temp
      },
      set (val) {
        if (val == "item1") {
          var x = document.getElementById("find");
          if (x.style.display == "none") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
          }
        }
      }
    }
  }
}
</script>

<style>
</style>
