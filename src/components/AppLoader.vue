
<script>
export default {

}
</script>

<template>
    <div class="containerLoader">
        <div class="contInnerLoader">
            <div class="loader"></div>
            <h1>Rick And Morty</h1>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.containerLoader {
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
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
</style>