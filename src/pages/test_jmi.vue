<template>
  <q-page padding style="background-color:#D0D0D0">
    <div class="row">
      <div class="col-lg-3 col-xs-4">
        <router-link to="/find">
          <q-card inline class="q-ma-sm" color="purple-14" style="width:50%;" >
              <q-card-main align="center">
                <q-icon name="fa fa-search" size="250%" style="width:100%" />
                <span>Find</span>
              </q-card-main>
          </q-card>
        </router-link>
      </div> 
      <div class="col-lg-3 col-xs-4">
        <router-link to="/pick-up">
          <q-card inline class="q-ma-sm" color="green-5" style="width:50%;">
              <q-card-main align="center">
                <q-icon name="fa fa-arrow-alt-circle-up" size="250%" style="width:100%" />
                <span>Pick Up</span>
              </q-card-main>
          </q-card>
        </router-link>  
      </div> 
      <div class="col-lg-3 col-xs-4">
        <router-link to="/drop">
          <q-card inline class="q-ma-sm" color="red-6" style="width:50%">
              <q-card-main align="center">
                <q-icon name="fa fa-arrow-alt-circle-down" size="250%" style="width:100%" />
                <span>Drop</span>
              </q-card-main>
          </q-card>
        </router-link> 
      </div>
      <div class="col-lg-3 col-xs-4">
        <router-link to="/open-moves">
          <q-card inline class="q-ma-sm" color="blue-4" style="width:50%">
              <q-card-main align="center">
                <q-icon name="fa fa-arrow-alt-circle-right" size="250%" style="width:100%" />
                <span>Open Moves</span>
              </q-card-main>
          </q-card>
        </router-link>  
      </div>
      <div class="col-lg-3 col-xs-4">
        <router-link to="/add-items">
          <q-card inline class="q-ma-sm" color="light-blue" style="width:50%">
              <q-card-main align="center">
                <q-icon name="fa fa-plus-square" size="250%" style="width:100%" />
                <span>Add Items</span>
              </q-card-main>
          </q-card>
        </router-link>  
      </div>
      <div class="col-lg-3 col-xs-4">
        <router-link to="/audit">
          <q-card inline class="q-ma-sm" color="yellow-5" style="width:50%">
              <q-card-main align="center">
                <q-icon name="fa fa-id-card" size="250%" style="width:100%" />
                <span>Audit</span>
              </q-card-main>
          </q-card>
        </router-link>  
      </div>
      <div class="col-lg-3 col-xs-4">
        <router-link to="/reports">
          <q-card inline class="q-ma-sm" color="blue-14" style="width:50%;" >
              <q-card-main align="center">
                <q-icon name="fa fa-clipboard-list" size="250%" style="width:100%" />
                <span>Reports</span>
              </q-card-main>
          </q-card>
        </router-link>
      </div> 
      <div class="col-lg-3 col-xs-4">
        <router-link to="/sync-lists">
          <q-card inline class="q-ma-sm" color="light-green-13" style="width:50%;">
              <q-card-main align="center">
                <q-icon name="fa fa-undo-alt" size="250%" style="width:100%" />
                <span>Sync Lists</span>
              </q-card-main>
          </q-card>
        </router-link>  
      </div> 
      <div class="col-lg-3 col-xs-4">
        <router-link to="/item">
          <q-card inline class="q-ma-sm" color="pink-5" style="width:50%">
              <q-card-main align="center">
                <q-icon name="fa fa-cube" size="250%" style="width:100%" />
                <span>Item</span>
              </q-card-main>
          </q-card>
        </router-link> 
      </div>
      <div class="col-lg-3 col-xs-4">
        <router-link to="/users">
          <q-card inline class="q-ma-sm" color="brown-6" style="width:50%">
              <q-card-main align="center">
                <q-icon name="fa fa-user" size="250%" style="width:100%" />
                <span>Users</span>
              </q-card-main>
          </q-card>
        </router-link>  
      </div>
      <div class="col-lg-3 col-xs-4">
        <router-link to="/add-items">
          <q-card inline class="q-ma-sm" color="orange-6" style="width:50%">
              <q-card-main align="center">
                <q-icon name="fa fa-sliders-h" size="250%" style="width:100%" />
                <span>Setup</span>
              </q-card-main>
          </q-card>
        </router-link>  
      </div>
      <div class="col-lg-3 col-xs-4">
        <router-link to="/audit">
          <q-card inline class="q-ma-sm" color="grey-6" style="width:50%">
              <q-card-main align="center">
                <q-icon name="fa fa-strikethrough" size="250%" style="width:100%" />
                <span>Server Functions</span>
              </q-card-main>
          </q-card>
        </router-link>  
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>

<style>
  .q-ma-sm {
    border-radius: 30px;
  }
  span {
    font-size: 85%;
  }
</style>
