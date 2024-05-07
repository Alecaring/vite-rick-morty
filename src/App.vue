<script>
import axios from 'axios';
import AppHeader from "./components/AppHeader.vue"
import AppMain from './components/AppMain.vue';
export default {
  components: {
    AppHeader,
    AppMain,

  },
  data() {
    return {
      isVisible: false,
      headerTitle: "Rick And Morty App",
      loading: false,
      myArray: []

    }
  },
  created() {
    this.loading = true;

    axios.get("https://rickandmortyapi.com/api/character")
      .then((resp) => {
        // Imposta un timeout per ritardare l'impostazione dei dati
        setTimeout(() => {
          this.myArray = resp.data.results  // Imposta i dati solo dopo il ritardo
          console.log(resp.data.results);

        }, 2000);
      })

      .finally(() => {
        setTimeout(() => {
          this.loading = false;

        }, 2000);
      });


  },

}
</script>

<template>
  <div class="container">
    <div v-if="loading" class="containerLoader">
      <div class="contInnerLoader">
        <div class="loader"></div>
        <h1>Rick And Morty</h1>
      </div>

    </div>


    <AppHeader :class="loading === true ? 'none' : 'block'" :headerTitle="headerTitle" />
    <AppMain :myaArray="myArray" />


  </div>
</template>

<style lang="scss" scoped>
.containerLoader {
  width: 100%;
  height: 100vh;
  background-color: #f2d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  /* Imposta opacità iniziale piena */
  transition: opacity 0.5s ease-out;

  /* Aggiunge una transizione di opacità */
  .contInnerLoader {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
      padding: 2rem;
      color: #c85e5e;
      font-size: 5vw;
    }
  }
}

/* HTML: <div class="loader"></div> */
.loader {
  width: 60px;
  aspect-ratio: 2;
  --_g: no-repeat radial-gradient(circle closest-side, #000 90%, #0000);
  background:
    var(--_g) 0% 50%,
    var(--_g) 50% 50%,
    var(--_g) 100% 50%;
  background-size: calc(100%/3) 50%;
  animation: l3 1s infinite linear;
}

@keyframes l3 {
  20% {
    background-position: 0% 0%, 50% 50%, 100% 50%
  }

  40% {
    background-position: 0% 100%, 50% 0%, 100% 50%
  }

  60% {
    background-position: 0% 50%, 50% 100%, 100% 0%
  }

  80% {
    background-position: 0% 50%, 50% 50%, 100% 100%
  }
}

.none {
  display: none;
}

.block {
  display: block;
}
</style>