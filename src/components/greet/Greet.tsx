import { GreetProps } from "./greet.types";

const Greet: React.FC<GreetProps> = ({ name }) => {
	return <div>Hello {name}</div>;
};

export default Greet;
