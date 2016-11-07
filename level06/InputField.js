class InputField extends React.Component{
    render(){
        let { username, todoCount} = this.props
        return <div>
            <span>{username}, 你還有{ todoCount }件代辦事項</span>
            <br/>
            <input type="text" placeholder="Les,你還好多事情喔" />
        </div>;
    }
}
window.APP.InputField = InputField;

