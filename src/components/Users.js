import React, { useEffect, useState } from 'react'
function Users() {
    const [user, setUser] = useState([]);
    const [isLoading,setIsloading]=useState(true);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setUser(data))
            .catch((e)=>(console.log(e)))
            .finally(()=>(setIsloading(false)));
    }, []);
    return (
        <div>
            <h1>Users
            {isLoading&&<h1>data deploying...</h1>}
                {
                    user.map((i) => (
                        <div key={i.id}>
                        {i.id} -- {i.name}
                        </div>
                    ))
                }
            </h1>
        </div>
    )
}

export default Users

