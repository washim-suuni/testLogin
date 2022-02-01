import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from '@react-native-community/async-storage';
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    stateReconciler: hardSet,
    // whiteList: ['user', 'cart']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    let store = createStore(persistedReducer, applyMiddleware(thunk));
    let persistor = persistStore(store, null, () => {
        store.getState();
    });
    return { store, persistor };
};