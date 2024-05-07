<script>
import { store } from "../store";
export default {
    data() {
        return {
            store,
            openSelectionData: false,
            title: "Rick And Morty Filter",
            selectedArr: [
                {
                    name: "All",
                    img: "https://media-assets.wired.it/photos/615f231327b5f17490c59a42/1:1/w_1080,h_1080,c_limit/wired_placeholder_dummy.png",
                },
                {
                    name: "Alive",
                    img: "https://i1.sndcdn.com/artworks-000236175246-rdejbu-t1080x1080.jpg",
                },
                {
                    name: "Dead",
                    img: "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/01/rick-and-morty-bury-themselves-dead-morty.jpg",
                },
                {
                    name: "Unknown",
                    img: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/09/rick-and-morty-in-the-flying-saucer-cockpit-in-season-7-trailer.jpg",
                }
            ],

        }
    },
    methods: {
        openSelection() {
            this.openSelectionData = !this.openSelectionData;

        },
        saveTitle(name) {
            // Imposta il filtro selezionato nello store
            this.store.selectedStatus = name;
            // Emetti l'evento con il filtro selezionato
            this.$emit("filter", name);
            this.openSelectionData = false;

        },
    },
}
</script>

<template>
    <div class="custom-select">
        <form action="select">

            <div class="contSelectiorLarge" @click="openSelection()">
                <p>Filter For</p>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(193, 167, 167)"
                        class="bi bi-filter-circle-fill" viewBox="0 0 16 16">
                        <path
                            d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M3.5 5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1M5 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5" />
                    </svg>
                </span>
            </div>

            <div class="ContInputs" v-if="openSelectionData">
                <div class="title"><span>{{ title }}</span></div>
                <ul v-if="store.ElemArray.length">
                    <li v-for="(curItem, index) in selectedArr" :key="index" @click="saveTitle(curItem.name)">
                        <a href="#">
                            <img :src="curItem.img" alt="">
                            <div class="hh4">
                                <h4>{{ curItem.name }}</h4>
                                <div class="bell"></div>
                            </div>
                        </a>
                    </li>

                </ul>
                
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
.custom-select {
    margin: 0 auto;
    width: 90%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 0 3rem;

    @media screen and (max-width: 425px) {
        padding: 3vw 3vw;
        margin-bottom: 10vw;
        background-color: white;
        width: 100%;

    }

    form {
        display: flex;
        justify-content: flex-end;

    }

    .contSelectiorLarge {

        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: .1px solid rgb(157, 106, 106);
        border-radius: 1rem;
        width: 15vw;
        padding: .8vw 1.5vw;
        color: black;
        letter-spacing: 1px;
        box-shadow: inset 0px 0px 5px 0px rgb(157, 106, 106);
        background-color: white;

        @media screen and (max-width: 425px) {
            display: flex;
            justify-content: center;
            padding: 1vw;
            background-color: transparent;
            border: none;
            box-shadow: none;

        }

        p {
            @media screen and (max-width: 425px) {
                display: none;
            }
        }


        span {
            padding-top: .2vw;
            color: rgb(193, 167, 167);

            @media screen and (max-width: 425px) {
                width: 9vw;
            }

            svg {
                @media screen and (max-width: 425px) {
                    width: 100%;
                    height: 100%;

                }
            }
        }
    }

    .ContInputs {
        position: absolute;
        margin-top: 1vw;
        top: 27%;
        width: 55vw;
        right: 5%;
        z-index: 1000;
        background-color: rgb(255, 255, 255);
        border-radius: 1rem;
        box-shadow: inset 0px 0px 20px 0px rgb(157, 106, 106);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 2vw 0 4vw;

        @media screen and (max-width: 425px) {
            position: absolute;
            margin: 1vw auto;
            padding: 5vw 0;
            top: 22%;
            right: 0;
            width: 100%;
            box-shadow: none;
            border-radius: 0;
        }



        .title {

            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: .5vw 0 3vw;
            font-weight: bold;
            font-size: 2.5vw;
            color: rgb(164, 72, 72);
            @media screen and (max-width: 425px) {
                display: none;
            }

            span {
                text-shadow: 5px 5px 6px rgb(224, 195, 195);
            }
        }

        ul {
            list-style-type: none;
            width: 90%;
            height: 90%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2vw;
            @media screen and (max-width: 425px) {
                flex-direction: column;


            }

            li {
                position: relative;
                width: 11vw;
                height: 11vw;
                border-radius: 50% 0;
                overflow: hidden;
                box-shadow: inset 100px 100px 100px 100px rgba(176, 122, 122, 0.423);
                @media screen and (max-width: 425px) {
                    width: 100%;
                    height: 50vh;
                }

                a {
                    img {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        border-radius: 50% 0;
                        width: 10vw;
                        height: 10vw;
                        object-fit: cover;
                        @media screen and (max-width: 425px) {
                            width: 95%;
                            height: 95%;
                        }
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
                        color: white;
                        @media screen and (max-width: 425px) {
                            font-size: 10vw;
                        }
                    }

                    .bell {
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                        height: 45%;
                        background-color: rgba(157, 106, 106, 0.481);
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