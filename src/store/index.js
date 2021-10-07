import { createSlice, configureStore } from "@reduxjs/toolkit";

const productsSlice = createSlice ( {
    name:'products',
    initialState : {
        products: [
        {
            id: '1',
            name: 'coffee',
            description: 'Great coffee',
            price: 10
        },
        {
            id: '2',
            name: 'sugar',
            description: 'sweet',
            price: 5
        }],
        currentProduct: '1'
    },
    reducers: {
        addProduct (state, action){
            state.push(action.payload);
        },
        deleteProduct (state, action){
            const index = state.products.findIndex(product => product.id === action.payload);
            state.products.splice(index, 1);
        },
        updateCurrentProduct (state, action){
            state.currentProduct = action.payload;
        },
        updateProductDetails (state, action) {
            const index = state.products.findIndex(product => product.id === action.payload.id);
            state.products.splice(index, 1, action.payload);
        }
    }
})

const store = configureStore({
    reducer: {  products: productsSlice.reducer,
          
            }
});

export const productsActions = productsSlice.actions;
export default store;