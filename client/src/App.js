import { useEffect, useState } from "react";
import "./App.css";
import Preloader from "./components/preloader";
import { createTodos, readTodos } from "./functions";

function App() {
	const [todo, setTodo] = useState({
		title: "",
		content: "",
		category: "",
		deadline: "",
	});
	const [todolist, setTodolist] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const result = await readTodos();
			setTodolist(result);
			console.log(result);
		};
		fetchData();
	}, []);

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		console.log(todo);
		const result = await createTodos(todo);
		console.log(result);
	};

	return (
		<div className="App">
			<div className="container">
				<div className="row">
					<form className="col s12" onSubmit={onSubmitHandler}>
						<div className="row">
							<div className="input-field col s6">
								<i className="material-icons prefix">title</i>
								<input
									id="title"
									type="text"
									className="validate"
									onChange={(e) => setTodo({ ...todo, title: e.target.value })}
								/>
								<label htmlFor="title">Title</label>
							</div>
							<div className="input-field col s6">
								<i className="material-icons prefix">description</i>
								<input
									id="description"
									type="tel"
									className="validate"
									onChange={(e) =>
										setTodo({ ...todo, content: e.target.value })
									}
								/>
								<label htmlFor="description">Description</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s6">
								<i className="material-icons prefix">date_range</i>
								<input
									id="deadline"
									type="datetime-local"
									name="deadline"
									className="validate"
									onChange={(e) =>
										setTodo({ ...todo, deadline: e.target.value })
									}
								/>
								<label htmlFor="deadline"></label>
							</div>
							<div className="input-field col s6">
								<i className="material-icons prefix">bookmark</i>
								<input
									id="tags"
									type="tel"
									className="validate"
									onChange={(e) =>
										setTodo({ ...todo, category: e.target.value })
									}
								/>
								<label htmlFor="tags">Tag</label>
							</div>
						</div>
						<div className="row right-align">
							<button className="waves-effect waves-light btn">Submit</button>
						</div>
					</form>
				</div>
				{!todolist ? (
					<Preloader />
				) : (
					todolist.length > 0 && (
						<div className="collection">
							{todolist.map((item) => {
								if (item.title && item.title.length > 0) {
									return (
										<li class="collection-item" key={item._id}>
											<div>
												<h5>{item.title}</h5>
												<p>{item.content}</p>
												{item.category && item.category.length > 0 && (
													<div class="chip">{item.category}</div>
												)}
												{item.deadline && item.deadline.length > 0 && (
													<div class="chip right-align">{item.deadline}</div>
												)}
												<button href="#!" className="secondary-content btn">
													<i class="material-icons">delete</i>
												</button>
											</div>
										</li>
									);
								} else {
									return <></>;
								}
							})}
						</div>
					)
				)}
			</div>
		</div>
	);
}

export default App;
