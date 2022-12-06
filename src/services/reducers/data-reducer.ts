import {
	GET_DATA_REQUEST,
	GET_DATA_SUCCESS,
	GET_DATA_ERROR,
} from '../actions';
import { TDataState } from '../utils/types';
import { TDataActions } from '../actions/data';

export const initialState: TDataState = {
	data: {
		project: '',
		period: '',
		chart: {
			id: '',
			title: '',
			period_start: '',
			period_end: '',
			sub: []
		}
	},
	dataRequest: false,
	dataError: false,
};

export const getDataReducer = (state = initialState, action: TDataActions): TDataState => {
	switch (action.type) {
		case GET_DATA_REQUEST:
			{
				return {
					...state,
					dataRequest: true,
				};
			}
		case GET_DATA_SUCCESS:
			{
				return {
					...state,
					data: {
						...state.data,
						project: action.data.project,
						period: action.data.period,
						chart: action.data.chart
					},
					dataRequest: false,
					dataError: false,
				};
			}
		case GET_DATA_ERROR:
			{
				return {
					...state,
					dataRequest: false,
					dataError: true,
				};
			}
		default:
			{
				return state;
			}
	}
};