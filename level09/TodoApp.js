const { TodoHeader, InputField, TodoList, TodoItem } = window.APP;
class TodoApp extends React.Component{
    constructor(props,context){
        super(props,context)

        //todos 改放置到state內. 好處是更新todos 會自動刷新. 可以看見最新的資料狀態
        this.state ={
            todos : [
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
            }]
        }

    }
    render(){
        const {todos} = this.state
        return <div>
            <TodoHeader name="Les" todoCount= { todos.filter((todo) => (!todo.completed)).length}/>
            <InputField placeholder="新增待辦清單"/>
            <TodoList
                todos={ todos }
                onDeleteTodo={
                    (id) => this.setState({
                        todos: _deleteTodo(todos, id)
                    })
                }
            />
        </div>;
    }
}

const _deleteTodo = (todos, id) => {
    const  idx = todos.findIndex((todo) => todo.id ===id )
    if(idx !== -1) todos.splice(idx,1)
    return todos
}

window.APP.TodoApp = TodoApp;
//此章節主要設計為防呆用
