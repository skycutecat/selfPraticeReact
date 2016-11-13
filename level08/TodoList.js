const { TodoItem } = window.APP;

class TodoList extends React.Component{
    render(){
        //取得 parent 傳遞之內容
        const { todos } = this.props
        //使用 arrow function 展開
        const todoElements = todos.map((todo) => (
            <li key = { todo.id }>
                <TodoItem title = { todo.title } completed = { todo.completed } />
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