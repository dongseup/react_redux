import React from 'react';
import CounterContainer from './containers/CounterContainer';
import PostListContainer from './containers/PostListContainer';
import TodosContainer from './containers/TodosContainer';

function App() {
    return (
        <div>
            <CounterContainer />
            <hr />
            <TodosContainer />
            <hr />
            <PostListContainer />
        </div>
    );
}

export default App;
