// @flow
import React, { PureComponent } from "react";

type Props = {
	color: string
};
export default class CustomLaunchLogo extends PureComponent<Props> {
	render() {
		console.log(`Color : ${this.props.color}`);
		("fill:#101c24;fill-opacity:0.88235295");
		const borderStyle = { fill: this.props.color, fillOpacity: 0.79803922 };
		const borderDarkStyle = { fill: "#101c24", fillOpacity: 0.88235295 };
		return (
			<svg xmlns="http://www.w3.org/2000/svg" width='120' height='100' viewBox="0 0 110.544 446.333">
			<defs>
			  <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
				<stop offset="0" stopColor="#5985df"/>
				<stop offset="1" stopColor="#436cc2"/>
			  </linearGradient>
			  <linearGradient id="linear-gradient-2" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
				<stop offset="0" stopColor="#8babee"/>
				<stop offset="1" stopColor="#17429d"/>
			  </linearGradient>
			  <linearGradient id="linear-gradient-3" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
				<stop offset="0" stopColor="#93b2f3"/>
				<stop offset="1" stopColor="#fff"/>
			  </linearGradient>
			  <linearGradient id="linear-gradient-4" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
				<stop offset="0" stopColor="#214ba4"/>
				<stop offset="1" stopColor="#9db8f1"/>
			  </linearGradient>
			  <linearGradient id="linear-gradient-6" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
				<stop offset="0" stopColor="#5684e5"/>
				<stop offset="1" stopColor="#bfd1f7"/>
			  </linearGradient>
			  <linearGradient id="linear-gradient-8" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
				<stop offset="0" stopColor="#073cac"/>
				<stop offset="1" stopColor="#99b7f5"/>
			  </linearGradient>
			</defs>
			<g id="rocket" transform="translate(6.044 -174)">
			  <path id="Path_5" data-name="Path 5" d="M2904,322s-21,8.5-39.5,32-20.5,41-20.5,41a194.921,194.921,0,0,0-6,54,417.06,417.06,0,0,0,6,56s7.875,46.5,14.5,78,12,48,12,48l24,8.5h9Z" transform="translate(-2829 -148)" fill="url(#linear-gradient)"/>
			  <path id="Path_6" data-name="Path 6" d="M2838.969,322s19.434,8.5,37.934,32,20.5,41,20.5,41a194.921,194.921,0,0,1,6,54,417.06,417.06,0,0,1-6,56s-7.875,46.5-14.5,78-12,48-12,48l-24,8.5h-9Z" transform="translate(-2764 -148)" fill="url(#linear-gradient-2)"/>
			  <path id="Subtraction_11" data-name="Subtraction 11" d="M-1945.5,89a44.223,44.223,0,0,1-17.322-3.5,44.357,44.357,0,0,1-14.145-9.537,44.342,44.342,0,0,1-9.536-14.145A44.208,44.208,0,0,1-1990,44.5a44.208,44.208,0,0,1,3.5-17.321,44.341,44.341,0,0,1,9.536-14.145A44.357,44.357,0,0,1-1962.821,3.5,44.224,44.224,0,0,1-1945.5,0a44.22,44.22,0,0,1,17.321,3.5,44.342,44.342,0,0,1,14.145,9.537,44.347,44.347,0,0,1,9.537,14.145A44.226,44.226,0,0,1-1901,44.5a44.226,44.226,0,0,1-3.5,17.322,44.348,44.348,0,0,1-9.537,14.145,44.342,44.342,0,0,1-14.145,9.537A44.22,44.22,0,0,1-1945.5,89Zm0-76.054A31.59,31.59,0,0,0-1977.055,44.5,31.59,31.59,0,0,0-1945.5,76.054,31.59,31.59,0,0,0-1913.946,44.5,31.59,31.59,0,0,0-1945.5,12.946Z" transform="translate(2020 233)" fill="url(#linear-gradient-6)"/>
			  <path id="Path_7" data-name="Path 7" d="M2875.25,633l2.25,22.5a43.81,43.81,0,0,0,11.75,6.5,46.188,46.188,0,0,0,13.5,2V639.25H2894Z" transform="translate(-2829 -148)" fill="url(#linear-gradient-4)"/>
			  <path id="Path_8" data-name="Path 8" d="M2902.75,633l-2.25,22.5a43.81,43.81,0,0,1-11.75,6.5,46.188,46.188,0,0,1-13.5,2V639.25H2884Z" transform="translate(-2801 -148)" fill="url(#linear-gradient-4)"/>
			  <path id="Path_11" data-name="Path 11" d="M2849.75,538.25l18.75,87.25s-8.625,3.125-14.5,17.25-9,39.25-9,39.25-23.187-62.812-22-98.75S2849.75,538.25,2849.75,538.25Z" transform="translate(-2829 -148)" fill="url(#linear-gradient-6)"/>
			  <path id="Path_12" data-name="Path 12" d="M2841.706,538.25l-18.75,87.25s8.625,3.125,14.5,17.25,9,39.25,9,39.25,23.188-62.812,22-98.75S2841.706,538.25,2841.706,538.25Z" transform="translate(-2714 -148)" fill="url(#linear-gradient-6)"/>
			  <path id="Path_13" data-name="Path 13" d="M2880.667,658.333a147.07,147.07,0,0,0,0,53.333c5.5,28,22,58.667,22,58.667v-112Z" transform="translate(-2829 -148)" fill="url(#linear-gradient-8)"/>
			  <path id="Path_14" data-name="Path 14" d="M2900.222,658.333a147.07,147.07,0,0,1,0,53.333c-5.5,28-22,58.667-22,58.667v-112Z" transform="translate(-2805 -148)" fill="url(#linear-gradient-8)"/>
			  <path id="Union_1" data-name="Union 1" d="M-1978.684,144.993c-.2.84-.316,1.257-.316,1.257v-2.6c-1.864-8.122-7.353-35.374-9.618-83.151C-1991,10.278-1981.571,1.668-1979,.263V0a1.754,1.754,0,0,1,.316.108,1.752,1.752,0,0,1,.316-.108V.263c2.571,1.406,12,10.015,9.618,60.237-2.266,47.777-7.754,75.028-9.618,83.151v2.6S-1978.481,145.833-1978.684,144.993Z" transform="translate(2053.118 387.5)" fill="url(#linear-gradient-6)"/>
			</g>
		  </svg>
		);
	}
}
