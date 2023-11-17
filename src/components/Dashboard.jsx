import { useEffect, useState } from "react";

function Dashboard() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json();
            console.log(result);
            setUsers(result);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (

        <div class="p-4">
            { loading ?
                <span>Loading...</span>
                :
                <table>
                    <caption className="text-xl mb-2">Users</caption>
                    <thead className="border-b-2 border-gray-200">
                        <tr>
                            <td className="p-2 text-sm font-semibold tracking-wide text-left">ID</td>
                            <td className="p-2 text-sm font-semibold tracking-wide text-left">Username</td>
                            <td className="p-2 text-sm font-semibold tracking-wide text-left">Email</td>
                            <td className="p-2 text-sm font-semibold tracking-wide text-left">Phone</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, ind) => {
                                return (
                                    <tr key={ ind } className={ (ind % 2 === 0) ? "bg-white" : "bg-gray-100" }>
                                        <td className="p-2 text-sm text-gray-700">{ user.id }</td>
                                        <td className="p-2 text-sm text-gray-700">{ user.username }</td>
                                        <td className="p-2 text-sm text-gray-700">{ user.email }</td>
                                        <td className="p-2 text-sm text-gray-700">{ user.phone }</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            }
        </div>

    );
}

export default Dashboard;
