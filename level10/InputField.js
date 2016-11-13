class InputField extends React.Component{
    constructor(props, context){
        super(props,context)
        this.state = { value: props.value || ''}
        this.handleChange = this.handleChange.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
    }

    handleChange(e){
        this.setState({
            value: e.target.value
        })
    }

    handleKeyDown(e){
        //取得上層傳遞之function
        const {onKeyDown, onSubmitEditing} = this.props
        //取得當前input value
        const {value }= e.target
        switch  ( e.keyCode){
            case 13: // 若按下 enter key
                //若不為空則將取得之value透過 onSubmitEditing 往上送
                if(value.trim()){
                    onSubmitEditing && onSubmitEditing(value)
                }
                //init
                e.target.value = ""
                break
        }
        //若不為 enter則執行 onKeyDown
        onKeyDown && onKeyDown(e)
    }

    render(){

        return <div>
            <input
                   placeholder= {this.props.placeholder}
                   type="text"
                   value = {this.state.value}
                    //listening keydown
                   onKeyDown = { this.handleKeyDown }
                   onChange = { this.handleChange }
            />
        </div>;
    }
}
window.APP.InputField = InputField;

