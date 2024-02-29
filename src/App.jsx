import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import BigCardsContainer from "./components/bigcardscontainer/BigCardsContainer";
import SmallCardsContainer from "./components/smallcardscontainer/SmallCardsContainer";

import Header from "./components/header/Header";

const App = () => {
	return <>
	<GlobalStyles/>
	<Header/>
	<BigCardsContainer/>
	<SmallCardsContainer/>
	

	</> 
	
};

export default App;
