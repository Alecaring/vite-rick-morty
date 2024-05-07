<script>
import { store } from "../store";
import AppFilterSelection from "./AppFilterSelection.vue"
export default {
    components: {
        AppFilterSelection,
    },

    data() { return {
            store,
        }},
}
</script>

<template>
    <div>
        <nav class="nav">
            <h1>{{ store.headerTitle }}</h1>
        </nav>
        <AppFilterSelection />
    </div>
</template>

<style lang="scss" scoped>


.nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3vw;
    font-size: 3vw;
}

</style>