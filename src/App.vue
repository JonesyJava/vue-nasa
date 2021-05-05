<template>
  <div class="app">
    <header class="container-fluid bg-dark text-light">
      <div class="row">
        <div class="col text-center">
          <h1>
            Welcome to <img alt="Vue logo" src="./assets/logo.png" />ue NASA
          </h1>
        </div>
      </div>
    </header>
    <main class="container mt-2">
      <div class="row">
        <div class="col">
          <div>
            <form @submit.prevent="searchApod">
              <input type="date" v-model="state.query" />
              <button type="submit">Search</button>
            </form>
          </div>
          <div class="mt-3">
            <APOD />
          </div>
        </div>
      </div>
    </main>
    <footer class="container-fluid bg-dark text-light">
      <div class="row">
        <div class="col text-center">
          <p class="m-3">Made with ♥ by JONESY</p>
        </div>
      </div>
    </footer>
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

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}

h1 img {
  height: 1em;
}

form {
  border: 3px solid gray;
  background-color: rgb(65, 184, 131);
  border-radius: 20px;
  box-shadow: 5px 5px 5px black;
  padding-block: 10px;
  margin-left: 115px;
  margin-right: 115px;
}

input {
  border-radius: 20px;
  box-shadow: 5px 3px 3px black;
  margin-right: 15px;
}

button {
  border-radius: 20px;
  box-shadow: 5px 3px 3px black;
}
</style>
