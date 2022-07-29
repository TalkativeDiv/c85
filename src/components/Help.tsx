/* This example requires Tailwind CSS v2.0+ */
// @ts-ignore
import React from "react";
import { Accordion } from "flowbite-react";
import { repo } from "../constants/";
const Help = () => {
	return (
		<Accordion>
			<Accordion.Panel>
				<Accordion.Title>How to Move?</Accordion.Title>
				<Accordion.Content>
					<p className="mb-2 text-gray-500 dark:text-gray-400">
						You have to press the arrow keys or WASD to move.
					</p>
				</Accordion.Content>
			</Accordion.Panel>
			<Accordion.Panel>
				<Accordion.Title>Is it open source?</Accordion.Title>
				<Accordion.Content>
					<p className="mb-2 text-gray-500 dark:text-gray-400">
						Yes, the github repo is &nbsp;
						<a
							href={repo}
							className="text-blue-600 hover:underline dark:text-blue-500"
						>
							open source
						</a>
					</p>
				</Accordion.Content>
			</Accordion.Panel>
		</Accordion>
	);
};
export default Help;
