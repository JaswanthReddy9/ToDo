const todoinput = document.querySelector(".todo-input");
const todobutton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");

todobutton.addEventListener('click', addtodo);
todolist.addEventListener('click', deletecheck);

function addtodo(event) {
	event.preventDefault();
	const tododiv = document.createElement("div");
	tododiv.classList.add("todo");

	const newtodo = document.createElement("li");
	newtodo.innerText = todoinput.value; 
	newtodo.classList.add('todo-item');
	tododiv.appendChild(newtodo);

	const completedbutton = document.createElement('button');
	completedbutton.innerHTML = '<i class="fas fa-check"></i>';
	completedbutton.classList.add("complete-button");
	tododiv.appendChild(completedbutton);

	const trashbutton = document.createElement('button');
	trashbutton.innerHTML = '<i class="fas fa-trash"></i>';
	trashbutton.classList.add("trash-button");
	tododiv.appendChild(trashbutton);

	todolist.appendChild(tododiv);
	todoinput.value = "";
}
function deletecheck(event2) {
	const item = event2.target;
	if (item.classList[0] === "trash-button") {
		const todo = item.parentElement;
		todo.remove();
	}
	if (item.classList[0] === "complete-button") {
		const todo = item.parentElement;
		todo.classList.toggle('completed');
	}
	
}