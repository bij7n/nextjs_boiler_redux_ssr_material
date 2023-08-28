import type {
  ImmutableStateInvariantMiddlewareOptions,
  SerializableStateInvariantMiddlewareOptions,
} from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { nextReduxCookieMiddleware, wrapMakeStore } from "next-redux-cookie-wrapper";
import type { Context } from "next-redux-wrapper";
import { createWrapper } from "next-redux-wrapper";
import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from "react-redux";

import { testSlice } from "./slices/test";

interface MyThunkOptions<E> {
  extraArgument: E;
}

// GetDefaultMiddlewareOptions in getDefaultMiddleware does not allow
// providing type for ThunkOptions, so here is our custom version
// https://redux-toolkit.js.org/api/getDefaultMiddleware#api-reference
interface MyDefaultMiddlewareOptions {
  thunk?: boolean | MyThunkOptions<Context>;
  immutableCheck?: boolean | ImmutableStateInvariantMiddlewareOptions;
  serializableCheck?: boolean | SerializableStateInvariantMiddlewareOptions;
}

const rootReducer = {
  [testSlice.name]: testSlice.reducer,
};

const configStore = (ctx: Context) =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (gDM) =>
      gDM<MyDefaultMiddlewareOptions>({
        thunk: {
          extraArgument: ctx,
        },
        // serializableCheck: false,
        // immutableCheck: false,
      }).prepend(
        nextReduxCookieMiddleware({
          subtrees: [
            `${testSlice.name}`,

            // {
            //   subtree: `${testSlice.name}.counter`,
            //   cookieName: 'test_next',
            //   serializationFunction: String,
            //   deserializationFunction: String,
            //   defaultState: testSlice.getInitialState().counter,
            // },
          ],
        })
      ),
  });

const makeStore = wrapMakeStore((ctx: Context) => configStore(ctx));

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const useDispatch = () => useAppDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: false,
  serializeState: (state) => JSON.stringify(state),
  deserializeState: (state) => JSON.parse(state),
});
