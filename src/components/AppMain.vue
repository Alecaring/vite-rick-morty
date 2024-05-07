<script>

import AppCards from './AppCards.vue';

export default {
    components: { AppCards, },
    data() { return {
            
        }},

}
</script>

<template>
    <div>
        <div class="containerCards">
            <AppCards />
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
    width: 90%;
    padding: 1vw 0 5vw;
    margin: 0 auto;
}

</style>