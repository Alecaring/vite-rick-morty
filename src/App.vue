<script>

import { store } from "./store";
import axios from 'axios';
import AppLoader from "./components/AppLoader.vue";
import AppHeader from "./components/AppHeader.vue";
import AppMain from './components/AppMain.vue';
import AppFilterSelection from "./components/AppFilterSelection.vue";

export default {
  components: {
    AppLoader,
    AppHeader,
    AppMain,
    AppFilterSelection,
},
  data() {
    return {
      store,
    }
  },
  created() {
    this.store.loading = true;

    this.getCards();


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
  methods: {
    getCards(selectedStatus = "All") {
      this.isLoading = true;

      const paramsObj = {};
      if (selectedStatus !== "All") {
        paramsObj.status = selectedStatus;
      }

      axios
        .get("https://rickandmortyapi.com/api/character", { params: paramsObj })
        .then((resp) => {
          store.ElemArray = resp.data.results;
          this.isLoading = false;
        })
        .catch((error) => {
          console.error("Errore durante il caricamento:", error);
          store.ElemArray = [];
          this.isLoading = false;
        });
    }
  }
}
</script>

<template>
  <AppLoader v-if="store.loading" />

  
  <AppHeader :class="store.loading === true ? 'none' : 'block'" />
  <AppFilterSelection @filter="getCards" :class="store.loading === true ? 'none' : 'block'" />

  <AppMain :characters="store.ElemArray" v-if="!store.loading" />
</template>

<style lang="scss" scoped>
.none {
  display: none;
}

.block {
  display: block;
}
</style>