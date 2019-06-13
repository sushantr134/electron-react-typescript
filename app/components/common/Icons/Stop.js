//@ flow
import React, { PureComponent } from "react";

type Props = {
	color: string
};
export default class Stop extends PureComponent<Props> {
	render() {
		return (
			<svg xmlns='http://www.w3.org/2000/svg' id='Layer_1' viewBox='0 0 300.003 300.003' width='18' height='18'>
				<path
					d='M150.005,0C67.164,0,0.001,67.159,0.001,150c0,82.838,67.162,150.003,150.003,150.003S300.002,232.838,300.002,150 C300.002,67.159,232.844,0,150.005,0z M196.63,210.605h-93.26c-7.706,0-13.974-6.269-13.974-13.974v-93.259 c0-7.706,6.269-13.974,13.974-13.974h93.259c7.706,0,13.974,6.269,13.974,13.974v93.259h0.001 C210.604,204.337,204.336,210.605,196.63,210.605z'
					fill={this.props.color}
				/>
			</svg>
		);
	}
}
