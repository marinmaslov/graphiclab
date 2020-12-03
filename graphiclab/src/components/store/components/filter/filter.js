/**
 * Store filter
 */
import React from 'react';

export default class StoreFilter extends React.Component {
    state = {
        gift: false
    }

    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        console.log(name, value)
        this.setState({
          [name]: value,
        })
    }

    handleSubmit = event => {
        event.preventDefault()
    }

    render() {
        return (
            <form>
                <input 
                    type="checkbox" 
                    name="gift" 
                    checked={this.state.checked}
                    onChange={this.handleInputChange}
                />

                <button type="submit">Submit</button>
            </form>
        )
    }
}