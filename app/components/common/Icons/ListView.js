// @flow
import React, { PureComponent } from "react";
//#d9d9d9
type Props = {
	color: string
};
export class ListView extends PureComponent<Props> {
	render() {
		return (
			<svg xmlns='http://www.w3.org/2000/svg' width='20' height='18' viewBox='0 0 20 18'>
				<g id='Group_304' data-name='Group 304' transform='translate(-584 -341)'>
					<g
						id='Rectangle_42'
						data-name='Rectangle 42'
						transform='translate(586 354.5)'
						fill={this.props.color}
						stroke={this.props.color}
						strokeWidth='1'>
						<rect width='18' height='2.5' stroke='none' />
						<rect x='0.5' y='0.5' width='17' height='1.5' fill='none' />
					</g>
					<rect id='Rectangle_38' data-name='Rectangle 38' width='20' height='18' transform='translate(584 341)' fill='none' />
					<g
						id='Rectangle_39'
						data-name='Rectangle 39'
						transform='translate(586 341)'
						fill={this.props.color}
						stroke={this.props.color}
						strokeWidth='1'>
						<rect width='18' height='2.5' stroke='none' />
						<rect x='0.5' y='0.5' width='17' height='1.5' fill='none' />
					</g>
					<g
						id='Rectangle_40'
						data-name='Rectangle 40'
						transform='translate(586 345.6)'
						fill={this.props.color}
						stroke={this.props.color}
						strokeWidth='1'>
						<rect width='18' height='2.5' stroke='none' />
						<rect x='0.5' y='0.5' width='17' height='1.5' fill='none' />
					</g>
					<g
						id='Rectangle_41'
						data-name='Rectangle 41'
						transform='translate(586 350.4)'
						fill={this.props.color}
						stroke={this.props.color}
						strokeWidth='1'>
						<rect width='18' height='2.5' stroke='none' />
						<rect x='0.5' y='0.5' width='17' height='1.5' fill='none' />
					</g>
				</g>
			</svg>
		);
	}
}
