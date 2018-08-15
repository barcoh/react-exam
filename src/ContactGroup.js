import React from 'react'
import Contact from './Contact'
import myStyles from './css/myStyles.css'


class ContactGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: this.props.contacts,
            visible: false,
        }
        this.expandMenu = this.expandMenu.bind(this);
    }
    expandMenu(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({ visible: !this.state.visible })
    }

    render() {
        var contacts = Object.keys(this.state.contacts).map(i => this.state.contacts[i])
        var visibility = this.state.visible;
        let subgroups;
        if (visibility) {
            subgroups = <ul>
                {
                    contacts.map(contact => {
                        if (contact.type === 'Group') {
                            return (
                                <ContactGroup name={contact.name} contacts={contact.contacts} id={contact.id} key={contact.id} />
                            )
                        }
                        if (contact.type === 'Contact') {
                            return (
                                <Contact name={contact.name} id={contact.id} key={contact.id} />
                            )
                        }
                        return (<h1>NO DATA</h1>);
                    }, this)
                }
            </ul>;
        }
        else {
            subgroups = null;
        }

        return (
            <div>
                <li onClick={this.expandMenu} className="listitem">{this.props.name}</li>
                {subgroups}
            </div>
        );
    }
}
export default ContactGroup;