const { TodoHeader, InputField, TodoList, TodoItem } = window.APP;

class TodoApp extends React.Component{
    render(){
        return <div>
            <TodoHeader/>
            <InputField/>
            <TodoList/>
        </div>;
    }
}


window.APP.TodoApp = TodoApp;

