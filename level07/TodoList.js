const { TodoItem } = window.APP;

class TodoList extends React.Component{
    render(){
        return (
            //透過屬性的放式傳遞參數給子元件
            <ul>
                <li><TodoItem title = "item1" completed = {true} /></li>
                <li><TodoItem title = "item2" completed = {false} /></li>
                <li><TodoItem title = "item3" completed = {true} /></li>
            </ul>);

    }
}
window.APP.TodoList = TodoList;

