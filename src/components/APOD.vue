<template>
  <div class="APOD">
    <img :src="state.APOD.url"/>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from 'vue'
import { AppState } from '../AppState'

export default {
  name: 'APOD',
  setup () {
    const state = reactive({
      APOD: computed(() => AppState.APOD)
    })
    return {
      state
    }
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
