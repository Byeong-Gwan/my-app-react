
// 호출할 때 넘겨주는 값 -> 인수(Arguments)
onDelete(todo.id);

// 전달 받아서 가공할 때 쓰는 값 -> 매개변수(Parameters)
function handleDelete(id) {
    setTodos(todos.filter((t) => t.id !== id));
}