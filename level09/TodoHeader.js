class TodoHeader extends React.Component{
    render(){
        //取得傳遞參數一定要放在 render內
        let { name, todoCount } = this.props
        return <div>{ name }, 你還有 {todoCount} 項未完成待辦事項</div>;
    }
}
window.APP.TodoHeader = TodoHeader;

// 1. 使用 propTypes 定義參數的型別
TodoHeader.propTypes = {
    title: React.PropTypes.string,
    username: React.PropTypes.string,
    todoCount: React.PropTypes.number
};

// 2. 使用 defaultProps 定義參數的預設值
TodoHeader.defaultProps = {
    title: '我的待辦清單',
    username: 'Guest',
    todoCount: 0
};


