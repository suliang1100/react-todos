/*
*  Todos入口文件
*  Create by Suliang on 2017.10.25
* */
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../css/base.css'

import TodoHeader from './components/TodoHeader.js'
import TodoFooter from './components/TodoFooter.js'
import TodoMain from './components/TodoMain.js'

class App extends Component {

    constructor(){
        super();
        this.state = {
            list:[{
                text:"react.js",
                isDone:false
            },{
                text:"webpack",
                isDone:false
            },{
                text:"Sass",
                isDone:false
            },{
                text:"Node.js",
                isDone:false
            },{
                text:"babel",
                isDone:false
            }],
            isAllCheck:false
        }
    }

    // 判断是否全选
    allChecked(){
        let isAllCheck = false;
        if(this.state.list.every((todo)=>todo.isDone)){
            isAllCheck = true;
        }
        this.setState({
            list:this.state.list,
            isAllCheck
        })
    }

    // 添加一个新任务
    addTodo(todoItem){
        let arr = this.state.list;
        arr.push(todoItem);
        this.setState({
            list:arr,
            isAllCheck:false
        })
    }

    // 清除当前任务
    deleteItem(index){
        this.state.list.splice(index,1);
        this.setState({
            list:this.state.list
        });
    }

    // 改变某个任务状态
    changeTodoState(index,isDone,isCheckAll=false){
        if(isCheckAll){
            this.setState({
                list:this.state.list.map((todo)=>{
                    todo.isDone = isDone;
                    return todo;
                }),
                isCheckAll:isDone
            })
        }else{
            let list = this.state.list;
            list[index].isDone = isDone;
            this.setState({
                list:list,
                isAllCheck:false
            })
        }
        this.allChecked();
    }

    // 清除所有已完成
    clearDone(){
        let list = this.state.list.filter(todo=>!todo.isDone);
        this.setState({
            list:list,
            isAllCheck:false
        })
    }

    render(){
        let props = {
            totalCount:this.state.list.length || 0,
            totalDoneCount:(this.state.list && this.state.list.filter((todo)=>todo.isDone)).length || 0
        }
        return(
            <div className="panel">
                <TodoHeader addTodo={this.addTodo.bind(this)}/>
                <TodoMain list={this.state.list} changeTodoState={this.changeTodoState.bind(this)} deleteItem={this.deleteItem.bind(this)}/>
                <TodoFooter isAllCheck={this.state.isAllCheck} {...props} changeTodoState={this.changeTodoState.bind(this)} clearDone={this.clearDone.bind(this)}/>
            </div>
        )
    }
}

ReactDOM.render(<App />,document.getElementById("container"));