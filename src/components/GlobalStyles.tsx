/* eslint-disable object-curly-spacing */
/* eslint-disable no-duplicate-imports */

import React from "react";
import { Global } from "@emotion/react";
import { css } from "@emotion/react";
import tw, { theme, GlobalStyles as BaseStyles } from "twin.macro";

const customStyles = css({
	body: {
		WebkitTapHighlightColor: theme`colors.purple.500`,
		...tw`antialiased`,
	},
});

const GlobalStyles = () => (
	<>
		<BaseStyles />
		<Global styles={customStyles} />
	</>
);

export default GlobalStyles;
