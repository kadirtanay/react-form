import { useState } from 'react'

function List({ contacts }) {
    const [filterText, setFilterText] = useState('');
    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key]
                .toString()
                .toLowerCase()
                .includes(filterText.toLowerCase())
        );
    });
    return (
        <div>
            <input
                onChange={(e) => (setFilterText(e.target.value))}
                value={filterText}
                placeholder='filter' />
            <ul className='list'>
                {filtered.map((contact, i) => (
                    <li key={i}>
                        <span>{contact.fullname}</span>
                        <span>{contact.phonenumber}</span>
                    </li>
                ))}
            </ul>
            <h3>
            Total contacts : ({filtered.length})
            </h3>
        </div>
    );
}
export default List;