import { configureStore } from "@reduxjs/toolkit";

import ShopSlice from "./feature/ShopSlice";
const store = configureStore({
    reducer:{
    shop:ShopSlice
    }
})

export default store