import { configureStore, /* getDefaultMiddleware */ } from "@reduxjs/toolkit";

import finalOrderReducer from './cart/reducerFinalOrder'
import tableIndexReducer from './cart/reducerTableIndex'
// это хранилище (store)

/* const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
  }) */

export const store = configureStore({
    reducer: {
        finalOrder: finalOrderReducer,
        tableIndex: tableIndexReducer                                                   
    },
    /* middleware: (getDefaultMiddleware) => getDefaultMiddleware(), */
});    