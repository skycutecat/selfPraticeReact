class TodoHeader extends React.Component{
    render(){
        //取得傳遞參數一定要放在 render內
        let { name } = this.props
        return <div>{ name }</div>;
    }
}

window.APP.TodoHeader = TodoHeader;

