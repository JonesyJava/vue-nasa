<template>
<div class="app">
  <header class="container-fluid bg-dark text-light">
    <div class="row">
      <div class="col text-center">
        <h1>Welcome to <img alt="Vue logo" src="./assets/logo.png">ue NASA</h1>
      </div>
    </div>
  </header>
  <main class="container">
    <div class="row">
      <div class="col">
        <div>
          <form @submit.prevent="searchApod">
            <input type="date" v-model="state.query">
            <button type="submit">Search</button>
          </form>
        </div>
        <APOD />
      </div>
    </div>
  </main>
</div>
</template>

<script>
import { computed, reactive } from '@vue/reactivity'
import { apodService } from './Services/ApodService'
import { AppState } from './AppState'
import APOD from './components/APOD'

export default {
  name: 'App',
  setup () {
    const state = reactive({
      query: '',
      APOD: computed(() => AppState.APOD)
    })
    return {
      state,
      async searchApod () {
        await apodService.searchApod(state.query)
      }
    }
  },
  components: {
    APOD
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 img {
  height: 1em;
}
</style>
