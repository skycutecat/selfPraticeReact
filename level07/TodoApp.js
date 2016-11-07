const { TodoHeader, InputField, TodoList, TodoItem } = window.APP;

class TodoApp extends React.Component{
    render(){
        //因此我們加入 name (待辦清單名稱), username (使用者名稱), todoCount (待辦數量) 三個參數。
        //使用props 大大增加了元件的可用性
        return <div>
            <TodoHeader name="Les" todoCount= { 99 }/>
            <InputField placeholder="新增待辦清單"/>
            <TodoList/>
        </div>;
    }
}

window.APP.TodoApp = TodoApp;
//此章節主要設計為防呆用
