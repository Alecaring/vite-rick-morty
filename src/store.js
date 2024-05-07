import { reactive } from "vue";
export const store = reactive ({
    ElemArray: [],
    loading: false,
    
    headerTitle: "Rick And Morty App",
    selected: "All",
    selectedArr: ["All", "Alive", "Dead", "Unknown"],
});