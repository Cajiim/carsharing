import { configureStore } from "@reduxjs/toolkit";

import finalOrderReducer from "./cart/reducerFinalOrder";
import tableIndexReducer from "./cart/reducerTableIndex";
import carCartSettingsReducer from "./cart/reducerCarCartSettings";
import validateErrorsReducer from './cart/reducerValidateErrors'
import carOrdersReducer from './cart/reducerCarOrders'

const store = configureStore({
  reducer: {
    finalOrder: finalOrderReducer,
    tableIndex: tableIndexReducer,
    carSettings: carCartSettingsReducer,
    validateErrors: validateErrorsReducer,
    carOrders: carOrdersReducer,
  },
});

export default store;
