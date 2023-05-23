import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Dashboard = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<div className="flex justify-center items-center ">
			<div
				className={`dashboard ${theme} w-[1200px] h-[650px] flex flex-col justify-center items-center gap-10 rounded-3xl`}
			>
				<h1 className="">Dashboard</h1>
				<button className="text-xl text-black" onClick={toggleTheme}>
					Toggle Theme
				</button>
			</div>
		</div>
	);
};

export default Dashboard;
