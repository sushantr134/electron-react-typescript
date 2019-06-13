// @flow
import React, { PureComponent } from "react";

type Props = {
  color: string
};
export default class ScriptFile extends PureComponent<Props> {
  render() {
    return (
      <svg xmlns='http://www.w3.org/2000/svg' width='14.611' height='17' viewBox='0 0 14.611 17'>
        <g id='icon-script-filled' transform='translate(-374.895 -185)'>
          <line
            id='Line_62'
            data-name='Line 62'
            x2='14.6'
            y2='0.078'
            transform='translate(374.9 200.422)'
            fill='none'
            stroke={this.props.color}
            strokeWidth='2'
          />
          <text
            id='_'
            data-name='#!'
            transform='translate(376 198)'
            fill={this.props.color}
            fontSize='14'
            fontFamily='Roboto-Regular, Roboto'>
            <tspan x='0' y='0'>
              #!
            </tspan>
          </text>
        </g>
      </svg>
    );
  }
}
