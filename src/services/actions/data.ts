import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_ERROR } from ".";
import { URL } from "../utils/utils";
import checkResponse from ".";
import { AppDispatch, AppThunk } from "../reducers/root-reducer";
import { TData } from "../utils/types";


export type TgetDataReq = {
	readonly type: typeof GET_DATA_REQUEST;
}

export type TgetDataSucc = {
	readonly type: typeof GET_DATA_SUCCESS;
	readonly data: TData
}

export type TgetDataError = {
	readonly type: typeof GET_DATA_ERROR;
}

export type TDataActions =
	TgetDataReq | TgetDataSucc | TgetDataError;


export const getDataRequest = () => {
	return fetch(URL)
		.then(checkResponse)
		.then(data => {
			return data;
		})
		.catch(e => {
			return Promise.reject(e)
		})
};

export function getDataReq(): TgetDataReq {
	return {
		type: GET_DATA_REQUEST
	}
}

export function getDataSucc(res: TData): TgetDataSucc {
	return {
		type: GET_DATA_SUCCESS,
		data: res
	}
}

export function getDataError(): TgetDataError {
	return {
		type: GET_DATA_ERROR
	}
}

export const getData: AppThunk = () => (dispatch: AppDispatch) => {
	dispatch(getDataReq());
	getDataRequest()
		.then(res => {
			dispatch(getDataSucc(res));
		}).catch(() => {
			dispatch(getDataError());
		})
}
