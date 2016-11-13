const { TodoItem } = window.APP;

class TodoList extends React.Component{
    render(){
        return (
            <ul>
                <li><TodoItem/></li>
                <li><TodoItem/></li>
                <li><TodoItem/></li>
            </ul>);

    }
}
window.APP.TodoList = TodoList;

