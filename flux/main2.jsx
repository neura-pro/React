import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';


const AT_INCREMENT = 'AT_INCREMENT';
const AT_DECREMENT = 'AT_DECREMENT';

const Reducer = (state = 0, action) => {
    switch (action.type) {
        case AT_INCREMENT:
            return state + 1;
        case AT_DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

const View = ({value, onIncrement, onDecrement}) => (
    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
);

const store = createStore(Reducer);

const render = () => {
    ReactDOM.render(
        <View
            value={store.getState()}
            onIncrement={() => store.dispatch({type: AT_INCREMENT})}
            onDecrement={() => store.dispatch({type: AT_DECREMENT})}
        />,
        document.getElementById('root')
    );
}

store.subscribe(render);
render();
