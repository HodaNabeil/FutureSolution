import { Helper } from "@/Utility";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Lang: Helper.GetStorage("Lang"),
  Rtl: Helper.GetStorage("Lang") == "ar",
  NavHeight: "9.70",
};
const Reducer = createSlice({
    name: "Helper",
    initialState,
    reducers: {
        SetNewLang: (state, action) => {
            Helper.SetStorage("Lang", action.payload);
            if (action.payload == "ar") {
                return {
                    ...state,
                    Lang: action.payload,
                    Rtl: true
                };
            }
            return {
                ...state,
                Lang: action.payload,
                Rtl: false
            };
        },

        SetHelperData: (state, action) => {
            return {
                ...state,
                ...action.payload
            };
        },
    }
});
export default Reducer.reducer;
export const { SetNewLang, SetHelperData, } =
    Reducer.actions;
