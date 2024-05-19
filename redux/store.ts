import { configureStore } from '@reduxjs/toolkit';
import { couponsReducer } from './slices/couponsSlice';
import { ticketsReducer } from './slices/ticketsSlice';
import { metadataReducer } from './slices/metadataSlice';
import { adsReducer } from './slices/advSlices';
export const makeStore = () => {
    return configureStore({
        reducer: {
            coupons: couponsReducer,
            tickets: ticketsReducer,
            metadata: metadataReducer,
            ads: adsReducer
        },
        ///TODO find a way to repaire this wwithout middleware
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    // Ignore these action types
                    ignoredActions: ['ads/getOneAdvertisment/fulfilled'],
                    // Ignore these action paths in the
                    ignoredActionPaths: ['payload.headers']
                }
            })
    });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
