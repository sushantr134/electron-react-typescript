import React, { PureComponent } from "react";

type Props = {
	width: number,
	height: number
};

export default class UploadIcon extends PureComponent<Props> {
	render() {
		return (
            <svg xmlns="http://www.w3.org/2000/svg" width={this.props.width} height={this.props.height} viewBox="0 0 49.384 60.467">
            <g id="icon-upload" transform="translate(-538.34 -377.776)">
              <path id="ic_insert_drive_file_24px" d="M10.173,2A6.1,6.1,0,0,0,4.031,8.047L4,56.421a6.1,6.1,0,0,0,6.142,6.047H47.211a6.129,6.129,0,0,0,6.173-6.047V20.14L34.865,2Z" transform="translate(534.34 375.776)" fill="#dfe2f2"/>
              <text id="yaml" transform="translate(563 428)" fill="#bfc4de" fontSize="11" fontFamily="Roboto-Medium, Roboto" fontWeight="500"><tspan x="-11.803" y="0">yaml</tspan></text>
              <path id="ic_file_upload_24px" d="M11.046,23.65h9.069V13.581h6.046L15.581,3,5,13.581h6.046Z" transform="translate(547.419 388.941)" fill="#bfc4de"/>
            </g>
          </svg>

		);
	}
}
