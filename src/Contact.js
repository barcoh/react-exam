import React from 'react'
import myStyles from './css/myStyles.css'

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="listitem">{this.props.name}</li>
        );
    }
}
export default Contact;