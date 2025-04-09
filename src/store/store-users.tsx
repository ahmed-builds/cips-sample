import { configureStore } from "@reduxjs/toolkit";
import menuSlicer from '../users/layout/menu/menu-slicer';
import headSliceReducer from "../users/layout/topbar/header-size-slicer";

export default configureStore({
    reducer: {
        store: menuSlicer,
        header: headSliceReducer
    }
});