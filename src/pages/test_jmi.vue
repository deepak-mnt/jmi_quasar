<template>
  <q-page id='temp' padding align="center">
    <div class="row justify-around">
      <div class="col-lg-4 col-xs-6">
        <router-link to="/find">
          <q-card  inline class="q-ma-sm " color="purple-14" style="width:60%;" >
              <q-card-main align="center">
                <q-icon name="fa fa-search" size="350%" style="width:100%" />
              </q-card-main> 
              <p>Find</p>   
          </q-card> 
        </router-link>    
      </div> 
      <div class="col-lg-4 col-xs-6">
        <router-link to="/pick-up">
          <q-card  inline class="q-ma-sm" color="green-5" style="width:60%;">
              <q-card-main align="center">
                <q-icon name="fa fa-arrow-alt-circle-up" size="350%" style="width:100%" />
              </q-card-main>
              <p>Pick Up</p>
          </q-card>
        </router-link>  
      </div> 
      <div class="col-lg-4 col-xs-6">
        <router-link to="/drop">
          <q-card  inline class="q-ma-sm" color="red-6" style="width:60%">
              <q-card-main align="center">
                <q-icon name="fa fa-arrow-alt-circle-down" size="350%" style="width:100%" />
              </q-card-main>
              <p>Drop</p>
          </q-card>
        </router-link> 
      </div>
      <div class="col-lg-4 col-xs-6">
        <router-link to="/open-moves">
          <q-card  inline class="q-ma-sm" color="blue-4" style="width:60%">
              <q-card-main align="center">
                <q-icon name="fa fa-arrow-alt-circle-right" size="350%" style="width:100%" />
              </q-card-main>
              <p>Open Moves</p>
          </q-card>
        </router-link>  
      </div>
      <div class="col-lg-4 col-xs-6">
        <router-link to="/add-items">
          <q-card  inline class="q-ma-sm" color="light-blue" style="width:60%">
              <q-card-main align="center">
                <q-icon name="fa fa-plus-square" size="350%" style="width:100%" />
              </q-card-main>
              <p>Add Items</p>
          </q-card>
        </router-link>  
      </div>
      <div class="col-lg-4 col-xs-6">
        <router-link to="/audit">
          <q-card  inline class="q-ma-sm" color="yellow-10" style="width:60%">
              <q-card-main align="center">
                <q-icon name="fa fa-id-card" size="350%" style="width:100%" />
              </q-card-main>
              <p>Audit</p>
          </q-card>
        </router-link>  
      </div>
      <div class="col-lg-4 col-xs-6">
        <router-link to="/reports">
          <q-card  inline class="q-ma-sm" color="blue-14" style="width:60%;" >
              <q-card-main align="center">
                <q-icon name="fa fa-clipboard-list" size="350%" style="width:100%" />
              </q-card-main>
              <p>Reports</p>
          </q-card>
        </router-link>
      </div> 
      <div class="col-lg-4 col-xs-6">
        <router-link to="/sync-lists">
          <q-card  inline class="q-ma-sm" color="light-green-13" style="width:60%;">
              <q-card-main align="center">
                <q-icon name="fa fa-undo-alt" size="350%" style="width:100%" />
              </q-card-main>
              <p>Sync Lists</p>
          </q-card>
        </router-link>  
      </div> 
      <div class="col-lg-4 col-xs-6">
        <router-link to="/item">
          <q-card  inline class="q-ma-sm" color="pink-5" style="width:60%">
              <q-card-main align="center">
                <q-icon name="fa fa-cube" size="350%" style="width:100%" />
              </q-card-main>
              <p>Item</p>
          </q-card>
        </router-link> 
      </div>
      <div class="col-lg-4 col-xs-6">
        <router-link to="/users">
          <q-card inline class="q-ma-sm" color="brown-6" style="width:60%">
              <q-card-main align="center">
                <q-icon name="fa fa-user" size="350%" style="width:100%" />
              </q-card-main>
              <p>Users</p>
          </q-card>
        </router-link>  
      </div>
      <div class="col-lg-4 col-xs-6">
        <router-link to="/setup">
          <q-card  inline class="q-ma-sm" color="orange-6" style="width:60%">
              <q-card-main align="center">
                <q-icon name="fa fa-sliders-h" size="350%" style="width:100%" />
              </q-card-main>
              <p>Setup</p>
          </q-card>
        </router-link>  
      </div>
      <div class="col-lg-4 col-xs-6">
        <router-link to="/server-functions">
          <q-card  inline class="q-ma-sm" color="grey-6" style="width:60%">
              <q-card-main align="center">
                <q-icon name="fa fa-strikethrough" size="350%" style="width:100%" />
              </q-card-main>
              <p>Server Functions</p>
          </q-card>
        </router-link>  
      </div>
    </div>
  </q-page>
</template>

<script>
import showShortcuts from '../components/shortcuts.vue'

export default {
  components: {
    showShortcuts
  },
  mounted () {
    this.$store.commit('ui/updateShowShortcutsComponent', showShortcuts)
  }
}
</script>

<style>
  p {
    font-size: 75%;
  }
</style>
