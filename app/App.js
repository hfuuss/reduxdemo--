import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as counterActions from "./actions/counterActions.js";


class App extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.a}</h1>
                <button onClick={()=>{
                    this.props.counterActions.add();
                }}>按我加1</button>
                <button onClick={()=>{
                    this.props.counterActions.addAfter2s();
                }}>
                    按我2秒后加1
                </button>
            </div>
        )
    }
}


export default connect(
    ({counterReducer}) => ({
        a : counterReducer.a
    }),
    (dispatch) => ({
        counterActions : bindActionCreators(counterActions, dispatch)
    })
)(App);