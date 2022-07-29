import tw, { theme } from "twin.macro";
{
	/* <a
	href=""
	type="button"
	className="relative inline-flex items-center transition-all  ease-in duration-75 justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-400"
>
	<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
		Github
	</span>
</a>;*/
}

const StyledButtonPrimaryWrapper = tw.a`relative inline-flex items-center transition-all  ease-in duration-75 justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg  bg-gradient-to-br from-purple-600 to-blue-500  hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-400`;
const StyledButtonPrimarySpan = tw.span`relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md `;

export { StyledButtonPrimaryWrapper, StyledButtonPrimarySpan };
