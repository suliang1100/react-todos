import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class TodoItem extends Component{

    handleChange(){
        let isDone = !this.props.isDone;
        this.props.changeTodoState(this.props.index,isDone);
    }

    handleMouseover(){
        ReactDOM.findDOMNode(this.refs.deleteBtn).style.display = "inline";
    }

    handleMouseout(){
        ReactDOM.findDOMNode(this.refs.deleteBtn).style.display = "none";
    }

    handleDeleteItem(){
        this.props.deleteItem(this.props.index);
    }

    render(){
        let doneStyle = this.props.isDone ? {textDecoration:'line-through'} : {textDecoration:'none'}
        return(
            <li onMouseOver={this.handleMouseover.bind(this)} onMouseOut={this.handleMouseout.bind(this)}>
                <input type="checkbox" checked={this.props.isDone} onChange={this.handleChange.bind(this)} className="fl"/>
                <span className="fl" style={doneStyle}>{this.props.text}</span>
                <button className="fr" ref="deleteBtn" style={{'display':'none'}} onClick={this.handleDeleteItem.bind(this)}>删除</button>
            </li>
        )
    }
}

export default TodoItem;