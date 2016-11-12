const { TodoItem } = window.APP;

class TodoList extends React.Component{
    render(){
        //取得 parent 傳遞之內容
        const { todos, onDeleteTodo } = this.props
        //使用 arrow function 展開

        //當刪除時執行TodoApp 傳遞的參數function callback. 參數為todo.id
        const todoElements = todos.map((todo) => (
            <li key = { todo.id }>
                <TodoItem title = { todo.title } completed = { todo.completed }
                          onDelete={ () => onDeleteTodo && onDeleteTodo(todo.id)}/>
            </li>
        ))
        return (
            <ul>
                { todoElements }
            </ul>);

    }
}
window.APP.TodoList = TodoList;

TodoList.PropTypes = {
    title: React.PropTypes.string,
    completed: React.PropTypes.bool,
}