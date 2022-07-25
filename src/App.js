import Header from "./components/Layout/Header/Header";
import { Fragment } from "react";
import Main from "./components/Layout/Main/main";
import Footer from "./components/Layout/Footer/footer";

function App() {
	return (
		<Fragment>
			<Header/>
			<Main/>
			<Footer/>
		</Fragment>
	);
}

export default App;
