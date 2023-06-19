const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit');


export const STATUSES = Object.freeze({
    IDLE : 'idle',

    ERROR : 'error',

    LOADING : 'loading',

});

const productSlice = createSlice({

    name : 'product',

    initialState : {

        data : [],

        status : STATUSES.IDLE,

    },

    reducers : {
        setProducts(state,action){

            state.data = action.payload;

        },

        setStatus(state,action){

            state.status = action.payload;

        }

    },

    // extraReducers : (builder) => {
        
    //     builder
          
    //      .addCase(fetchProducts.pending, (state,action) => {

    //         state.status = STATUSES.LOADING;

    //      })

    //      .addCase(fetchProducts.fulfilled, (state,action) => {

    //         state.data = action.payload;
            
    //         state.status = STATUSES.IDLE

    //      })

    //      .addCase(fetchProducts.rejected, (state,acion) => {
    //         state.status = STATUSES.ERROR;
    //      })
    // }

});

export const {setProducts, setStatus} = productSlice.actions;

export default productSlice.reducer;


// Thunks

// export const fetchProducts = createAsyncThunk('prducts/fetch', async () => {

//     const res = await fetch('https://fakestoreapi.com/products');

//     const data = await res.json();

//     return data;
// });


//  This is the one method to add middleware thunk to fetch the data through the redux 

export function fetchProducts(){

    return async function fetchProductThunk(dispatch,getState){

        dispatch(setStatus(STATUSES.LOADING));

        try{

            const res = await fetch('https://fakestoreapi.com/products');

            const data = await res.json();

            dispatch(setProducts(data));

            dispatch(setStatus(STATUSES.IDLE));
        }

        catch(error){

            console.log(error);

            dispatch(setStatus(STATUSES.ERROR));
        }

    };

}


