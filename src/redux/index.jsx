import { configureStore, /* getDefaultMiddleware */ } from "@reduxjs/toolkit";

import finalOrderReducer from './cart/reducerFinalOrder'
import tableIndexReducer from './cart/reducerTableIndex'


export const store = configureStore({
    reducer: {
        finalOrder: finalOrderReducer,
        tableIndex: tableIndexReducer                                                   
    },
    
});    