const { TodoHeader, InputField, TodoList, TodoItem } = window.APP;
//為了動態產生child component 先行宣告
const todos = [
    {
        id: 1,
        title: 'Item1',
        completed: true
    },
    {
        id: 2,
        title: 'Item2',
        completed: false
    },
    {
        id: 3,
        title: 'Item3',
        completed: false
    }
]
class TodoApp extends React.Component{
    render(){
        return <div>
            <TodoHeader name="Les" todoCount= { todos.filter((todo) => (!todo.completed)).length}/>
            <InputField placeholder="新增待辦清單"/>
            <TodoList todos={ todos }/>
        </div>;
    }
}

window.APP.TodoApp = TodoApp;
//此章節主要設計為防呆用
