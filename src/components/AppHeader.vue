<script>
export default {

    props: {
        headerTitle: String,
    },
    methods: {
        hiddenHeader:
        setTimeout(() => {
            
        }, 2000),

    },

}
</script>

<template>
    <div>
        <nav class="nav">
            <h1>{{ headerTitle }}</h1>
        </nav>
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