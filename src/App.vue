<script>

import { store } from "./store";
import axios from 'axios';
import AppLoader from "./components/AppLoader.vue";
import AppHeader from "./components/AppHeader.vue";
import AppMain from './components/AppMain.vue';

export default {
  components: {

    AppLoader,
    AppHeader,
    AppMain,

  },
  data() {
    return {
      store,
    }
  },
  created() {
    this.store.loading = true;
    axios.get("https://rickandmortyapi.com/api/character")
      .then((resp) => {
        setTimeout(() => {
          this.store.ElemArray = resp.data.results
          console.log(this.store.ElemArray);
        }, 2000);
      }).finally(() => {
        setTimeout(() => {
          this.store.loading = false;
        }, 2000);
      });
  },
}
</script>

<template>
  <AppLoader v-if="store.loading" />

  <AppHeader :class="store.loading === true ? 'none' : 'block'" />

  <AppMain />
</template>

<style lang="scss" scoped>
.none {
  display: none;
}

.block {
  display: block;
}
</style>