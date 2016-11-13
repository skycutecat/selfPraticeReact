class TodoItem extends React.Component{
    render(){
        return <div>
            <input type="checkbox" />
            <span>Item 1</span>
            <button>x</button>
        </div>;
    }
}
window.APP.TodoItem = TodoItem;

