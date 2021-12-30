import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import allReducers from "./reducers/index"

import SongList from "./components/SongList";

let store = createStore(allReducers)
const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>Songs(with the help of Redux)</h1>
                <SongList/>
            </div>
        </Provider>

    )
}

export default App;