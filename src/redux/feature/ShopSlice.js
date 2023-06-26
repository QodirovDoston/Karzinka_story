import { createSlice } from "@reduxjs/toolkit";

const ShopSlice = createSlice({
    name:"shop",
    initialState:{
        shop:[],
        count:0
    },
    reducers:{
        addCard:function(state,action){
            if(action.payload){
               const value = action.payload;
               const find = state.shop.find((val)=>val.id== value.id)
               if(find){addCard
                for(let i = 0; i < state.shop.length;i++){
                    if(value.id == state.shop[i].id){
                        if(!isNaN(parseInt(value.price))){
                            state.shop[i].price = +state.shop[i].price
                            state.shop[i].price += Number(parseInt(value.price))
                        }
                    }
                  }
               }else{
                   state.shop = [...state.shop,action.payload]
               }
            }

        },
        count:function(state,action){
            state.count = state.shop.length;
        },
        deleteCard:function(state,action){
             
        }
    }
});

export const {addCard ,count} = ShopSlice.actions;
export default ShopSlice.reducer;