import * as React from 'react';

type Props = {
  color: string;
  size: number;
};
export class HexagonIcon extends React.PureComponent<Props> {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Capa_1"
        viewBox="0 0 490 490"
        width={this.props.size}
        height={this.props.size}
      >
        <g fill={this.props.color}>
          <path d="M466.032,367.5v-245L245,0L23.968,122.5v245L245,490L466.032,367.5z M118.865,175.094L245,105.188l126.136,69.906v139.813 L245,384.813l-126.135-69.906V175.094z" />
          <polygon points="331.299,292.828 331.299,197.172 245,149.343 158.701,197.172 158.701,292.828 245,340.657" />
        </g>
      </svg>
    );
  }
}

export default HexagonIcon;
