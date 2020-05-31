import React, { Component } from 'react';
import TodoList from './components/TodoList/index'; 

class App extends Component {
    render() {
        return (
            <div>
                <h1>lista de tarefas</h1>
                <TodoList/>
            </div>
        );
    }
}

export default App;