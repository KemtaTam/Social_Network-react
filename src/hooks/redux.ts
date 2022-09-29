import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppStateType } from './../redux/redux-store';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;

export type TypedDispatch = ThunkDispatch<AppStateType, {}, Action>
export const useAppDispatch = () => useDispatch<TypedDispatch>()