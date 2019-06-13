// @flow
import React, { PureComponent } from "react";

type Props = {
	color?: string
};
export class Delete extends PureComponent<Props> {
	render() {
		let chosenColor;

		if (this.props.color) {
			chosenColor = this.props.color;
		} else {
			chosenColor = "#fff";
		}
		return (
			<svg xmlns='http://www.w3.org/2000/svg' id='Capa_1' width='18' height='18' viewBox='0 0 459 459'>
				<path
					d='M76.5,408c0,28.05,22.95,51,51,51h204c28.05,0,51-22.95,51-51V102h-306V408z M408,25.5h-89.25L293.25,0h-127.5l-25.5,25.5 H51v51h357V25.5z'
					fill={chosenColor}
					id='delete'
				/>
			</svg>
		);
	}
}

export default Delete;
