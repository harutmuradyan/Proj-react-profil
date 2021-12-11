import React, { Component } from "react";

import "../post-status-filter/post-status-filter.css";

export default class PostStatusFiltr extends Component {
    constructor (props) {
        super(props);
        this.buttons = [
            {name : "all",label : "All"},
            {name : "like",label : "Like"}
        ]
    }
    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const active = this.props.filtr === name;
            const clazz = active ? "btn-info" : "btn-outline-secondary"
            return (
                <button 
                    key={name} 
                    type="button" 
                    className={`btn ${clazz}`}
                    onClick={() => this.props.onFiltrSelect(name)}>{label}
                </button>
            )
        });

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}