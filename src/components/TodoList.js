import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AddTodo from './AddToDo';

export default class TodoList extends Component {
state = {
    todos: [
        {Id:'1', Title: 'Push your code to github', Status: 'Done'},
        {Id: '2', Title: 'Eamil to your manager', Status: 'Pending'}
    ]
};

deleteToDo = (todo) => {
    const filteredItems = this.state.todos.filter(x => x.Id !== todo.Id);
    this.setState({
        todos: filteredItems
    });
};

editTodo = (x) => {
    this.setState(state => ({
        todos: state.todos.map(todo => {
        if (todo.Id === x.Id) {
            return {
                ...todo, // … - Spread Operator. it will keep our todos array intact and in the next line, we are updating the value of the status attribute, so id and title will not be changed
                Status: todo.Status === "Done" ? "Pending" : "Done"
            };
        } else {
            return todo;
        }
    })
    }));
};

addToDo = (todo) => {
    this.setState({
        todos: [...this.state.todos, todo]
    });
};

render() {
    return (
        <div>
            // here we're declaring a property of child component: 'onAdd' of AddToDo
            <AddTodo onAdd={this.addToDo}></AddTodo> 
            <h1>TodoList</h1>
                <table className="table">
                    <thread>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        </thread>
                        <tbody>
                            {this.state.todos.map(x => {
                                return (
                                    <tr key={x.Id}>
                                    <td>{x.Id}</td>
                                    <td>{x.Title}</td>
                                    <td style={{ color: x.Status ==="Done" ? "green" : "red"}}>{x.Status}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => this.deleteToDo(x)}>
                                            <span>
                                                <FontAwesomeIcon icon="trash"></FontAwesomeIcon>
                                            </span>
                                        </button>
                                        <button className="btn btn-primary" onClick={() => 
                                        this.editTodo(x)}>
                                            <span>
                                                <FontAwesomeIcon icon="edit"></FontAwesomeIcon>
                                            </span>
                                        </button>
                                    </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                        </table>
        </div>
    );
}
}