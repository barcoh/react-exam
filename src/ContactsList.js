import React from 'react'
import Contact from './Contact'
import ContactGroup from './ContactGroup'
import myStyles from './css/myStyles.css'

class ContactsList extends React.Component {
    contacts = [
        {
            id: 1,
            name: "Friends",
            type: "Group",
            contacts: [
                { id: 2, name: "Udi", type: "Contact" },
                { id: 3, name: "Tommy", type: "Contact" },
                {
                    id: 6,
                    name: "Old Friends",
                    type: "Group",
                    contacts: [
                        { id: 7, name: "Itay", type: "Contact" },
                    ]
                },
            ]
        },
        {
            id: 4,
            name: "Family",
            type: "Group",
            contacts: [
                { id: 5, name: "Roni", type: "Contact" },
            ]
        },
        { id: 8, name: "Ori", type: "Contact" },
    ];


    render() {
        return (
            <div>
                <h1>Contact Tree</h1>
                <ul>
                    {
                        this.contacts.map(function (contact) {
                            if (contact.type === 'Group') {
                                return (
                                    <ContactGroup name={contact.name} contacts={contact.contacts} id={contact.id} key={contact.id} />
                                )
                            } else if (contact.type === 'Contact') {
                                return (
                                    <Contact visible={true} name={contact.name} id={contact.id} key={contact.id} />
                                )
                            }
                            return (<h1>NO DATA</h1>);
                        })
                    }
                </ul>
            </div>
        );
    }
}
export default ContactsList;
