import React, {Component} from 'react';
import {Provider} from "react-redux";
import store from "./store";
import Navigation from "./Navigation";
import {StatusBar} from "react-native";
import SplashScreen from "react-native-splash-screen";

class App extends Component {
    componentDidMount() {
        SplashScreen.hide()
    }

    render() {
        return (
            <Provider store={store}>
                <Navigation/>
                <StatusBar hidden={true}/>
            </Provider>
        );
    }
}


export default App;
