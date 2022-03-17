import { useState } from 'react'

function Form({ addContact, contacts }) {
    const initialFormValue = { fullname: "", phonenumber: "" };
    const [form, setForm] = useState(initialFormValue);

    

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const onSubmit = (e) => {
        e.preventDefault();

        if (form.fullname === '' || form.phonenumber === '') {
            return false;
        }
        addContact([...contacts, form]);
    };
    return (
        <form onSubmit={onSubmit}>
            <div>
                <input name='fullname' value={form.fullname} placeholder='Name' onChange={onChangeInput} />
            </div>
            <div>
                <input name='phonenumber' value={form.phonenumber} placeholder='Phone' onChange={onChangeInput} />
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

export default Form;