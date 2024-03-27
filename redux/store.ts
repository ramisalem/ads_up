import { configureStore } from '@reduxjs/toolkit'
import { couponsReducer } from './slices/couponsSlice'
import { ticketsReducer } from './slices/ticketsSlice'
export const makeStore = () => {
    return configureStore({
        reducer: {
            coupons: couponsReducer,
            tickets: ticketsReducer,
        }
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']