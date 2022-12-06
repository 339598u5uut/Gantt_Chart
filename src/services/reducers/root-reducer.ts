import { ActionCreator, combineReducers } from 'redux';
import { getDataReducer } from './data-reducer';
import { store } from '../../';
import { TDataActions } from '../actions/data';
import {
  TypedUseSelectorHook, useSelector as selectorHook,
  useDispatch as dispatchHook
} from 'react-redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

export const rootReducer = combineReducers({
  data: getDataReducer,
});

export type TApplicationActions = TDataActions;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn,
    RootState,
    never,
    TApplicationActions>
>;

export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
export const useDispatch = () => dispatchHook<AppDispatch>();