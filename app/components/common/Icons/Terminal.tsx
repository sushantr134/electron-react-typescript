import * as React from 'react';

type Props = {
  color: string;
  size: number;
};

export default class Terminal extends React.PureComponent<Props> {
  render() {
    const extraPadding = {
      padding: '3px'
    };
    return (
      <svg
        style={extraPadding}
        xmlns="http://www.w3.org/2000/svg"
        width={this.props.size - 6}
        height={this.props.size - 6}
        viewBox="0 0 100 100"
      >
        <g id="icon" transform="translate(-452 -212)">
          <rect
            id="Rectangle_1"
            data-name="Rectangle 1"
            width="100"
            height="100"
            transform="translate(452 212)"
            fill={this.props.color}
          />
          <path
            id="ic_arrow_forward_24px"
            d="M13.5,4,10.59,6.908,24.487,20.5,10.59,34.092,13.5,37,30,20.5Z"
            transform="translate(453.41 263)"
            fill="#fff"
          />
          <line
            id="Line_1"
            data-name="Line 1"
            x2="26"
            transform="translate(479.5 298.5)"
            fill="none"
            stroke="#fff"
            strokeWidth="4"
          />
        </g>
      </svg>
    );
  }
}
