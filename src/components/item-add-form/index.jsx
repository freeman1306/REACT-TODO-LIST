import React, { Component } from "react"
import './item-add-form.css'

class ItemAddForm extends Component {
    render() {
        return (
            <div className="item-add-form">
                <button onClick={() => this.props.onItemAdded("hello world")} className="mt-3 btn btn-outline-secondary">Add form</button>
            </div>
        )
    }
}

export default ItemAddForm