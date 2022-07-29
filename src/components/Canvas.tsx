/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useRef, useEffect } from "react";
import Setup from "../Sprites/";
import player from "../assets/icons/player.png";
// @ts-ignore
import parkingLot from "../assets/icons/parking_lot.jpg";
import StyledCanvas from "../assets/styles/Components/Canvas";

const PIXEL_RATIO = (() => {
	const ctx: any = document.createElement("canvas").getContext("2d");
	const dpr: number = window.devicePixelRatio || 1;
	const bsr: number =
		ctx?.webkitBackingStorePixelRatio ||
		ctx?.mozBackingStorePixelRatio ||
		ctx?.msBackingStorePixelRatio ||
		ctx?.oBackingStorePixelRatio ||
		ctx?.backingStorePixelRatio ||
		1;

	return dpr / bsr;
})();
/**
 * Canvas: The Main Canvas Component
 * @constructor
 * @param {any} props - The title of the book.
 * @return {JSX.Element} The JSX Code for the Canvas Component
 */
const Canvas = (props: any) => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;

		// @ts-ignore
		const ctx: any = canvas?.getContext("2d");
		let animationFrameId: any;

		const setup = new Setup(
			player,
			1600 * PIXEL_RATIO,
			800 * PIXEL_RATIO,
			parkingLot,
			ctx,
		);
		setup.init();
		return () => {
			window.cancelAnimationFrame(animationFrameId);
		};
	}, []);

	return (
		<StyledCanvas
			ref={canvasRef}
			{...props}
			// The pixel ratio is used to make it responsive on all screens
			width={1600 * PIXEL_RATIO}
			height={700 * PIXEL_RATIO}
		/>
	);
};

export default Canvas;
