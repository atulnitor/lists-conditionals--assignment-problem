import React, {Component} from 'react';
import './CharComponent.css'

class Char extends Component {
    render() {
        return (
            <div className="char" onClick={this.props.click}>
                    <p>{this.props.letter}</p>
            </div>
        );
    }
}

export default Char

/*
const Char = (props) => {
    return (
        <div className="char" onClick={this.props.click}>
            <p>{this.props.letter}</p>
        </div>
    )
}
export default Char*/