import React from "react";
import { TodoList } from "./TodoList.jsx";

const Home = () => {
	return (
		<div className="text-center">

			<TodoList/>
			
			<p>
				Made by{" "}
				<a href="http:www.linkedin.com/in/rgonzalezf1">Roberto González</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;