import { reactive } from "vue";
export const store = reactive ({
    ElemArray: [],
    loading: false,
    
    headerTitle: "Rick And Morty App",
    selectedStatus: "All",
});