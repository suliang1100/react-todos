import React,{Component} from 'react';

class TodoHeader extends Component{

    // 回车键添加新任务
    handleKeyUp(e){
        if(e.keyCode === 13) {

            let value = e.target.value;
            if(!value) return false;

            let newTodoItem = {
                text:value,
                isDone:false
            }
            e.target.value = "";
            this.props.addTodo(newTodoItem);
        }
    }

    render(){
        return (
            <div className="panel-header">
                <h2>极简待办清单</h2>
                <input onKeyUp={this.handleKeyUp.bind(this)} type="text" placeholder="你的新任务是什么？" />
            </div>
        )
    }
}

export default TodoHeader;