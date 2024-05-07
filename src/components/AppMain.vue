<script>
import AppCards from './AppCards.vue';

export default {
    props: {
    myaArray: Array,
  },
    components: {
    AppCards
},

}
</script>

<template>
    <div>
        <div class="containerCards">
            <AppCards :myArray="myaArray" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.containerCards {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 5vw;
    width: 100%;
}
</style>