import { useState, useEffect } from 'react'
import List from "./List"
import Form from "./Form"
import '../styles/style.css'

function Contacts() {
    const [contacts, setContacts] = useState([
        { fullname: "Aaaa", phonenumber: 123244 },
        { fullname: "Bbbbb", phonenumber: 12344 },
        { fullname: "Ccccc", phonenumber: 987454 }
    ]);

    useEffect(() => {
        console.log(contacts)
    }, [contacts]);
    return (
        <div>
            <h1>REACT FORM</h1>
            <div className='container'>
                <List contacts={contacts} />
                <Form addContact={setContacts} contacts={contacts} />
            </div>
        </div>
    )
}

export default Contacts;