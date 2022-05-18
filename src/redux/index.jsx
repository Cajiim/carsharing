import { configureStore } from "@reduxjs/toolkit";

import finalOrderReducer from './cart/reducerFinalOrder'
import tableIndexReducer from './cart/reducerTableIndex'
// это хранилище (store)



export const store = configureStore({
    reducer: {
        finalOrder: finalOrderReducer,
        tableIndex: tableIndexReducer                                                   
    }
});    