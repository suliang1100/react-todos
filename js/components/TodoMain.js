import React,{Component} from 'react';
import TodoItem from './TodoItem';

class TodoMain extends Component{

    render() {
        return (
            <ul className="todo-list">
                {
                    this.props.list.map((todo,index) => {
                        return(<TodoItem key={index} index={index} {...todo} {...this.props}/>)
                    })
                }
            </ul>
        )
    }

}

export default TodoMain;