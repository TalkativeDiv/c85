// Imports
import React, { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import Game from "./Game";
import Help from "./components/Help";
/**
 * App: The Main App Component
 * @return {JSX.Element} The JSX Code for the Home Page
 */
const App = () => {
	const [open, setOpen] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setOpen(true);
		}, 500);
	}, [open]);
	return (
		<AnimatePresence>
			{open && (
				<motion.div
					initial={{ opacity: 0, scale: 0.9, y: 250 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
				>
					<Routes>
						<Route path="/" element={<Game />}></Route>
						<Route path="/help" element={<Help />}></Route>
					</Routes>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default App;
