import { configureStore } from "@reduxjs/toolkit";

import finalOrderReducer from './cart/reducerFinalOrder'
import tableIndexReducer from './cart/reducerTableIndex'


 const store = configureStore({
    reducer: {
        finalOrder: finalOrderReducer,
        tableIndex: tableIndexReducer                                                   
    },
    
});    


export default store;