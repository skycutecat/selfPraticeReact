const { TodoHeader, InputField, TodoList, TodoItem } = window.APP;

class TodoApp extends React.Component{
    render(){
        //因此我們加入 name (待辦清單名稱), username (使用者名稱), todoCount (待辦數量) 三個參數。
        //使用props 大大增加了元件的可用性
        return <div>
            <TodoHeader name="天王老子的待辦清單"/>
            <InputField username="Les" todoCount="99"/>
            <TodoList/>
        </div>;
    }
}
window.APP.TodoApp = TodoApp;
/*
* 本章節需要特別著的參數傳遞方法
* - Object spread properties
*   重新assign 的概念
     let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
     x; // 1
     y; // 2
     z; // { a: 3, b: 4 }
* */


