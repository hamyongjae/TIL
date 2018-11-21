import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div className="ui segment container">
                <form className="ui form">
                    <label htmlFor="keyword">Search</label>
                    <input id="keyword" type="text"></input>
                </form>
            </div>
        )
    }
}
