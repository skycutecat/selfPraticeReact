
const { InputField } = window.APP;
class TodoItem extends React.Component{

    //constructor init
    constructor(props, context){
        //init component state
        super(props, context)
        //set default state
        this.state = { editable: false}

         this.toggleEditMode = this.toggleEditMode.bind(this)
    }

    toggleEditMode(){
        this.setState({ editable: !this.state.editable })
    }

    render(){
        return this.state.editable ?
            this.renderEditMode() :
            this.renderViewMode();

    }

    renderViewMode(){
        const { title, completed, onDelete, onToggle} = this.props
        // 1. 當刪除按鈕被點選，觸發上層元件 (TodoList) 傳遞的 onDelete callback
        return <div>
            <input type="checkbox" checked={completed} onChange={ () => onToggle && onToggle(!completed)}/>
            <span onDoubleClick={this.toggleEditMode}>{title}</span>
            <button onClick= {() => onDelete && onDelete()}>x</button>
        </div>;
    }

    renderEditMode(){
        const { title,onUpdate} = this.props
        return (

            <InputField
                autoFocus
                placeholder = "代辦事項"
                //不可控元件寫法
                //defaultValue = {title}
                value = {title}
                onBlur = {this.togleEditMode}
                onKeyDown = { (e) =>{
                    if( e.keyCode === 27){
                        e.preventDefault()
                        this.toggleEditMode()
                    }
                }}
                onSubmitEditing={(content) => {
                    onUpdate &&  onUpdate(content)
                    this.toggleEditMode()
                }}
            />
        );
    }



}
window.APP.TodoItem = TodoItem


