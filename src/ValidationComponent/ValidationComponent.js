import React, {Component} from 'react'
import './ValidationComponent.css'

class Validation extends Component {
    render() {
        return(
            <div className="App">
                <p>The text is {this.props.textLength <= 5 ? 'too short' : 'long enough'}</p>
            </div>
            
        )
    }
}

export default Validation