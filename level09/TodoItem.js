class TodoItem extends React.Component{

    //constructor init
    constructor(props, context){
        //init component state
        super(props, context)
        //set default state
        this.state = { editable: false}

         this.togleEditMode = this.togleEditMode.bind(this)
    }

    togleEditMode(){
        this.setState({ editable: !this.state.editable })
    }

    render(){
        return this.state.editable ?
            this.renderEditMode() :
            this.renderViewMode();

    }

    renderViewMode(){
        const { title, complete, onDelete} = this.props
        // 1. 當刪除按鈕被點選，觸發上層元件 (TodoList) 傳遞的 onDelete callback
        return <div>
            <input type="checkbox" checked={complete}/>
            <span onDoubleClick={this.togleEditMode}>{title}</span>
            <button onClick= {() => onDelete && onDelete()}>x</button>
        </div>;
    }

    renderEditMode(){
        const { title} = this.props
        return (
            <input
                autoFocus
                placeholder = "代辦事項"
                value = {title}
                onBlur = {this.togleEditMode}
                onKeyDown = { (e) =>{
                    if( e.keyCode === 27){
                        e.preventDefault()
                        this.togleEditMode()
                    }
                }}
            />
        );
    }



}
window.APP.TodoItem = TodoItem;

