import React,{Component} from 'react';

class TodoFooter extends Component{

    handleChangeAll(e){
        this.props.changeTodoState(null,e.target.checked,true);
    }

    handleClearDone(){
        this.props.clearDone();
    }

    render(){
        return(
            <div className="panel-footer">
                <input type="checkbox" name="allCheck" checked={this.props.isAllCheck} onChange={this.handleChangeAll.bind(this)} className="fl"/>
                <span className="fl"><i>{this.props.totalDoneCount}</i>个已完成 /<i>{this.props.totalCount}</i>个总任务</span>
                <button className="fr" onClick={this.handleClearDone.bind(this)}>清除已完成</button>
            </div>
        )
    }
}

export default TodoFooter;