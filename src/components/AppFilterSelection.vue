<script>
import { store } from "../store";
export default {
    data() {
        return {
            store,
            openSelectionData: false,
        }
    },
    methods: {
        openSelection() {
            this.openSelectionData = !this.openSelectionData;
        }
    },
}
</script>

<template>
    <div class="custom-select">
        <form action="select">
            <div class="contSelectior" @click="openSelection()">
                <p>Filter For</p>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-filter-circle-fill" viewBox="0 0 16 16">
                        <path
                            d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M3.5 5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1M5 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5" />
                    </svg>
                </span>
            </div>
            <div class="ContInputs" v-if="openSelectionData">
                <ul v-if="store.ElemArray.length">
                    <li class="first" >
                        <a href="#">
                            <img :src="store.ElemArray[11].image" alt="">
                            <div class="hh4">
                                <h4>{{ store.selectedArr[0] }}</h4>
                                <div class="bell"></div>
                            </div>
                        </a>
                    </li>
                    <li class="first" >
                        <a href="#">
                            <img :src="store.ElemArray[0].image" alt="">
                            <div class="hh4">
                                <h4>{{ store.selectedArr[1] }}</h4>
                                <div class="bell"></div>
                            </div>
                        </a>
                    </li>
                    <li class="second">
                        <a href="#">
                            <img :src="store.ElemArray[8].image" alt="">
                            <div class="hh4">
                                <h4>{{ store.selectedArr[2] }}</h4>
                                <div class="bell"></div>
                            </div>
                        </a>
                    </li>
                    <li class="third">
                        <a href="#">
                            <img :src="store.ElemArray[13].image" alt="">
                            <div class="hh4">
                                <h4>{{ store.selectedArr[3] }}</h4>
                                <div class="bell"></div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <!-- <select>
    <option value="0">Filter For:</option><hr>
    <option value="1">Alive</option>
    <option value="2">Dead</option>
    <option value="3">Unknown</option>
  </select> -->
        </form>
    </div>
</template>

<style lang="scss" scoped>
.custom-select {
    margin: 0 auto;
    width: 80%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 0 3rem;

    .contSelectior {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: antiquewhite;
        border: .1px solid red;
        border-radius: 1rem;
        width: 15vw;
        padding: .6vw 1vw;
        font-weight: bold;
        

        span {
            padding-top: .2vw;
        }
    }

    .ContInputs {
        position: absolute;
        margin-top: 1vw;
        width: 55vw;
        right: 5%;
        padding: 2vw 0;
        background-color: rgb(255, 255, 255);
        border-radius: 1rem;
        box-shadow: 0px 0px 20px 0px rgb(173, 165, 140);
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: scroll;

        ul {
            list-style-type: none;
            width: 90%;
            height: 90%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2vw;

            li {
                position: relative;
                background-color: red;
                width: 10vw;
                height: 10vw;
                border-radius: 50%;
                overflow: hidden;
                box-shadow: 0px 10px 20px 0px rgb(160, 160, 160);

                a {
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                    }

                    .hh4 {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: 100%;
                        height: 100%;
                        background-color: rgba(255, 228, 196, 0.411);

                        display: none;

                    }

                    h4 {
                        position: absolute;
                        top: 70%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        font-weight: bold;
                        font-size: 1.5vw;
                        z-index: 1;
                        color: rgb(41, 40, 40);
                    }

                    .bell {
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                        height: 45%;
                        background-color: rgba(255, 255, 255, 0.811);
                    }
                }

                &:hover .hh4 {
                    display: block;

                }
            }
        }



    }
}
</style>