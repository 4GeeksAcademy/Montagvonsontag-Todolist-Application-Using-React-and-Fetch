import React from "react";
import { TodoList } from "./TodoList.jsx";

const Home = () => {
	return (
		<div className="text-center">

			<TodoList/>
			
			<p>
			Made with <i className="fa fa-heart text-danger" /> by{" "}
			<a href="https://www.linkedin.com/in/rgonzalezf1/">Roberto González</a>	
			</p>
			
		</div>
	);
};

export default Home;