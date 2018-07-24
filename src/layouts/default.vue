<template>
  <q-layout view="lHh Lpr lFf" >
    <q-layout-header>
      <q-toolbar
        color="teal"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          JMI App
          <div slot="subtitle">Asset Tracking System</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <component :is='showShortcutsComponent' color="primary"></component>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  computed: {
    showShortcutsComponent: {
      get () {
        return this.$store.state.ui.showShortcutsComponent
      }
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
