import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router-dom";
import reducer from "components/Application/redux/index";
import NavigationBar from "components/NavigationBar/NavigationBar";
import Home from "components/Home/Home";
import Products from "components/Products/Products";
import About from "components/About/About";
import MakeABudget from "components/MakeABudget/MakeABudget";

const store = createStore(
    reducer,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default class Application extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <NavigationBar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/products" component={Products} />
                        <Route path="/about" component={About} />
                        <Route path="/makeABudget" component={MakeABudget} />
                    </Switch>
                </div>
            </Provider>
        );
    }
}