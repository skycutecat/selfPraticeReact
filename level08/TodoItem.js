class TodoItem extends React.Component{
    render(){
        //使用props 來接收父元件所傳遞的參數
        // 下列語法其實等價：  title = this.props.title
        let { title, complete} = this.props
        return <div>
            <input type="checkbox" checked={complete}/>
            <span>{title}</span>
            <button>x</button>
        </div>;
    }
}
window.APP.TodoItem = TodoItem;

