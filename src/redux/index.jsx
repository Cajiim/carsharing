import { configureStore } from "@reduxjs/toolkit";

import finalOrderReducer from "./cart/reducerFinalOrder";
import tableIndexReducer from "./cart/reducerTableIndex";
import carCartSettingsReducer from "./cart/reducerCarCartSettings";
import validateErrorsReducer from "./cart/reducerValidateErrors";
import carOrdersReducer from "./cart/reducerCarOrders";
import userReducer from "./cart/reducerUserSlice";
import getDataReducer from "./cart/reducerGetData";
import reducerFiltrCarList from "./cart/reducerFiltrCarList";
import reducerCityStreet from "./cart/reducerCityStreet";

const store = configureStore({
  reducer: {
    finalOrder: finalOrderReducer,
    tableIndex: tableIndexReducer,
    carSettings: carCartSettingsReducer,
    validateErrors: validateErrorsReducer,
    carOrders: carOrdersReducer,
    user: userReducer,
    getData: getDataReducer,
    filterCarList: reducerFiltrCarList,
    cityStreetData: reducerCityStreet,
  },
});

export default store;
