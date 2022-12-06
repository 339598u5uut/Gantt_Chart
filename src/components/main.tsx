import React, { FC } from "react";
import "../index.css";
import { TMain } from '../services/utils/types';

export const Main: FC<TMain> = ({ project, period, children }) => {
	return (
		<div className="container">
			<div className="header_button">
				<h2 className="header_h2">{project} / {period}</h2>
				<button><span className="span">Export</span></button>
			</div>
			{children}
		</div>

	)
}