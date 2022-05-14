import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/reducer'
import colorReducer from './cart/reducerColor'
import arendTimeReducer from './cart/reducerArendTime'
import durationTimeOneReducer from './cart/reducerDuration'
import durationTimeTwoReducer from './cart/reducerDurationTwo' 
import checkedOneReducer from './cart/reducerCheckedOne'
import checkedTwoReducer from './cart/reducerCheckedTwo'
import checkedThreeReducer from './cart/reducerCheckedThree'
import classCarReducer from './cart/reducerClassCar'
// это хранилище (store)



export const store = configureStore({
    reducer: {
        cart: cartReducer,
        color: colorReducer,
        arendTime: arendTimeReducer,
        durationOne: durationTimeOneReducer,
        durationTwo: durationTimeTwoReducer,
        checkedOne: checkedOneReducer,
        checkedTwo: checkedTwoReducer,
        checkedThree: checkedThreeReducer,
        classCar: classCarReducer                                                   
    }
});    