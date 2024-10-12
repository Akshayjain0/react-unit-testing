import { Skills } from "./components/skills/Skills";

const App = () => {
	return (
		<div className='App'>
			<Skills skills={["HTML", "CSS", "Javascript"]} />
		</div>
	);
};

export default App;
