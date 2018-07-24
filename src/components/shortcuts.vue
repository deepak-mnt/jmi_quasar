<template>
  <q-list
        no-border
        link
        inset-delimiter
      >
        <!-- <q-list-header>JMI App</q-list-header> -->
        <q-item>
          <q-item-side icon="home" />
          <router-link to="/test_jmi" style="text-decoration:none;color:black">Home</router-link>
        </q-item>
        <q-item>
          <q-item-side icon="fa fa-search" />
          <router-link to="/find" style="text-decoration:none;color:black">Find</router-link>
        </q-item>
        <q-item>
          <q-item-side icon="fa fa-arrow-alt-circle-up" />
          <router-link to="/pick-up" style="text-decoration:none;color:black">Pick Up</router-link>
        </q-item>
        <q-item>
          <q-item-side icon="fa fa-arrow-alt-circle-down" />
          <router-link to="/drop" style="text-decoration:none;color:black">Drop</router-link>
        </q-item>
        <q-item>
          <q-item-side icon="fa fa-arrow-alt-circle-right" />
          <router-link to="/open-moves" style="text-decoration:none;color:black">Open Moves</router-link>
        </q-item>
        <q-item>
          <q-item-side icon="fa fa-plus-square" />
          <router-link to="/add-items" style="text-decoration:none;color:black">Add Items</router-link>
        </q-item>
        <q-item>
          <q-item-side icon="fa fa-id-card" />
          <router-link to="/audit" style="text-decoration:none;color:black">Audit</router-link>
        </q-item>
        <q-item>
          <q-item-side icon="fa fa-clipboard-list" />
          <router-link to="/reports" style="text-decoration:none;color:black">Reports</router-link>
        </q-item>
        <q-item>
          <q-item-side icon="fa fa-undo-alt" />
          <router-link to="/sync-lists" style="text-decoration:none;color:black">Sync List</router-link>
        </q-item>
        <q-item>
          <q-item-side icon="fa fa-cube" />
          <router-link to="/item" style="text-decoration:none;color:black">Item</router-link>
        </q-item>
        <q-item>
          <q-item-side icon="fa fa-user" />
          <router-link to="/users" style="text-decoration:none;color:black">Users</router-link>
        </q-item>
        <q-item>
          <q-item-side icon="fa fa-sliders-h" />
          <router-link to="/setup" style="text-decoration:none;color:black">Setup</router-link>
        </q-item>
        <q-item>
          <q-item-side icon="fa fa-strikethrough" />
          <router-link to="/server-functions" style="text-decoration:none;color:black">Server Function</router-link>
        </q-item>
        <q-item>
          <q-item-side icon="fa fa-power-off" />
          <router-link to="/" style="text-decoration:none;color:black">Log Out</router-link>
        </q-item>
      </q-list>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  }
}
</script>

<style>
</style>
