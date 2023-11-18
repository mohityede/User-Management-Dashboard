import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Model from "./Model";
import Row from "./Row";

function Dashboard() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false)
    const [currPage, setCurrPage] = useState(1);
    const [searchedUsers, setSearchUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [report, setReport] = useState(null);
    const [showModel, setShowModel] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const URL = "https://jsonplaceholder.typicode.com/users";
            const response = await fetch(URL);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json();
            setUsers(result);
            setSearchUsers(result);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const searchInputHandler = (keyword) => {
        setSearch(keyword);
        if (keyword === "") {
            setSearchUsers(users);
            return;
        }
        let newUsers = users.filter((user) => {
            if (Object.values(user).toString().toLowerCase().indexOf(keyword) > -1) return true;
        });
        setSearchUsers(newUsers);
    }

    const selectPageHandler = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= (searchedUsers?.length || 1) / 5 && selectedPage !== currPage) {
            setCurrPage(selectedPage)
        }
    }

    const toggleModel = () => {
        setShowModel(!showModel);
    }

    const updateReport = (obj) => {
        setReport(obj);
        toggleModel();
    }

    return (
        <>

            <div className="p-4">
                <div className="relative flex items-center h-8 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                    <div className="grid place-items-center w-8 text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    <input
                        type="text"
                        value={ search }
                        onChange={ (e) => searchInputHandler(e.target.value.toLowerCase()) }
                        className="peer outline-none text-sm text-gray-700 pr-2"
                        placeholder="Search Here..." />
                </div>

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
                                searchedUsers.length === 0 ?
                                    <tr>
                                        <td className="p-2 text-sm text-gray-700">No Users found!</td>
                                    </tr>
                                    :
                                    <Row
                                        searchedUsers={ searchedUsers.slice(currPage * 5 - 5, currPage * 5) }
                                        updateReport={ updateReport }
                                    />
                            }
                        </tbody>
                    </table>
                }
                {
                    searchedUsers.length > 5 &&
                    <Pagination
                        selectPageHandler={ selectPageHandler }
                        currPage={ currPage }
                        totalEmojis={ searchedUsers?.length } />
                }

            </div>
            {
                (showModel && report != null) &&
                <Model user={ report } toggleModel={ toggleModel } />
            }
        </>
    );
}

export default Dashboard;
