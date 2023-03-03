import {
  Action,
  AnyAction,
  configureStore,
  Dispatch,
  ThunkAction,
} from '@reduxjs/toolkit';
import {Launch, LaunchesState} from '../models/launches';
import launches from './slices/launches';
import rockets from './slices/rockets';

const store = configureStore({
  reducer: {
    rockets: rockets,
    launches: launches,
  },
});

export default store;

export interface RootState {
  launches: LaunchesState;
}
import {useDispatch, TypedUseSelectorHook, useSelector} from 'react-redux';

// Obtém o dispatch com o tipo correto
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Define o hook de seleção com o tipo correto
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

// Definir um tipo para o dispatch de funções assíncronas
export type ThunkDispatch = Dispatch<
  ThunkAction<void, RootState, null, Action<any>>
>;

// Define o tipo AppDispatch usando o tipo ThunkDispatch e AnyAction
export type AppDispatch = ThunkDispatch & Dispatch<AnyAction>;
