import React from 'react'
import myStyles from './css/myStyles.css'

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.visible,
        }
    }
    componentWillReceiveProps(nextProps, prevState) {
        if (nextProps.visible !== prevState.visible) {
            this.setState({ visible: nextProps.visible })
        }
    }
    render() {
        return (
            <li className="listitem" style={{ display: this.state.visible ? "block" : "none" }}>{this.props.name}</li>
        );
    }
}
export default Contact;