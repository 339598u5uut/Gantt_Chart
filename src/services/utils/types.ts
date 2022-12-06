export type TSubChart<T> = {
	[K in keyof T]: string | number;
}

export type TChart = {
	id: string | number;
	title: string;
	period_start: string;
	period_end: string;
	// sub: TSubChart<TChart>| Array<TChart>|undefined|[];
	sub?: any;
}

export type TData = {
	[x: string]: any;
	project: string;
	period: string;
	chart: TChart;
}

export type TMain = {
	children?: React.ReactNode;
	project: string;
	period: string;
}

export type TDataState = {
	data: TData;
	dataRequest: boolean;
	dataError: boolean;
}

export type TargsOnBeforeTimeHeaderRender = {
	header: {
		level: number;
		html: string;
		start: {
			firstDayOfWeek: () => {
				(): number;
				new(): {};
				toString: (arg0: string) => string;
				addDays: (arg0: number) => {
					(): number;
					toString: (arg0: string) => string;
				};
			};
			getDayOfWeek: () => number;
		};
		backColor: string;
		cssClass: string;
	};
}

// export type  Tconfiguration={
// 	rowHeaderHideIconEnabled:boolean;
// 	timeHeaders: ({
// 		groupBy: string;
// 		формат: string;
// 	} | {
// 		groupBy: string;
// 	} | {
// 		groupBy: string;
// 		format: string;
// 	})[];
// 	startDate: string;
// 	cellWidth: number;
// 	scale: string;
// 	days: number;
// 	locale: string;
// 	columns: {
// 		title: string;
// 		width: number;
// 		heigth: number;
// 		property: string;
// 	}[];
// 	heightSpec: string;
// 	height: number;
// 	completeBarVisible: boolean;
// 	headerHeight: number;
// 	rowMinHeight: number;
// 	taskHeight: number;
// 	rowMoveHandling: string;
// 	taskGroupMode: string;
// 	onBeforeTimeHeaderRender: (args: TargsOnBeforeTimeHeaderRender) => void;
//   }