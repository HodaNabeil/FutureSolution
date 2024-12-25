import {  configureStore } from "@reduxjs/toolkit";
import Reducers from "./Reducers";
const actionSanitizer = (action) =>
    action.type === "FILE_DOWNLOAD_SUCCESS" && action.data
        ? { ...action, data: "<<LONG_BLOB>>" }
        : action;
class Store {

    static Configration = configureStore({
        reducer: {
            ...Reducers,
        },
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware({
                serializableCheck: false,
                serialize: true,
                actionSanitizer
            })
        }
    });
}
export default Store;
