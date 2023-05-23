import "./App.css";
import { ThemeProvider } from "./components/ThemeContext";
import Dashboard from "./components/Dashboard";

function App() {
	return (
		<ThemeProvider>
			<Dashboard />
		</ThemeProvider>
	);
}

export default App;
