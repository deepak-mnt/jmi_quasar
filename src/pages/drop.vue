<template>
  <q-page padding align="center">
    <q-card >
      <q-card-title >
        <h4>Drop Item</h4>
        <p>Please scan or enter item ID Code</p>
      </q-card-title>
      <q-card-main >
        <q-input v-model="newTemp" /><br>
        <q-btn>Scan</q-btn><br>
        <div id="find" style="display:none">
          <img src="~/assets/img/last_conference.png" alt="Last Conference" width="100%">
          <p>Is this the correct ITEM?</p>
          <q-btn>Yes</q-btn>
          <q-btn>No</q-btn><br><br>
        </div>
      </q-card-main>
    </q-card>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
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
