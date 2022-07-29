import React from "react";
import Canvas from "./components/Canvas";
import {
	StyledButtonPrimaryWrapper,
	StyledButtonPrimarySpan,
} from "./assets/styles/Components/Button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { css, cx } from "@emotion/css";
import tw from "twin.macro";
/**
 * Game: The Main Game Component
 * @return {JSX.Element} The JSX Code for the Home Page
 */

const Game = () => {
	return (
		<motion.div tw="flex justify-center items-center flex-col min-w-[100vw] min-h-[100vh] gap-4">
			<motion.h1 tw="text-3xl font-bold">Parking Lot Game</motion.h1>
			<motion.div>
				<Canvas />
			</motion.div>
			<br />
			<div className="flex justify-center items-center">
				<StyledButtonPrimaryWrapper className="group-hover:from-purple-600 group-hover:to-blue-500 group">
					<StyledButtonPrimarySpan className="group-hover:bg-opacity-0">
						Github
					</StyledButtonPrimarySpan>
				</StyledButtonPrimaryWrapper>
				<Link
					to="/help"
					tw="relative inline-flex items-center transition-all  ease-in duration-75 justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg  bg-gradient-to-br from-green-400 to-blue-600  hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-400"
					className="group-hover:from-green-400 group-hover:to-blue-600 group"
				>
					<span
						tw="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md"
						className="group-hover:bg-opacity-0"
					>
						Help
					</span>
				</Link>
			</div>
		</motion.div>
	);
};

export default Game;
