
function Row({ searchedUsers, updateReport }) {
    return (
        searchedUsers.map((user, ind) => {
            return (
                <>
                    <tr key={ ind } className={ (ind % 2 === 0) ? "bg-white" : "bg-gray-100" }>
                        <td className="p-2 text-sm text-gray-700">{ user.id }</td>
                        <td className="p-2 text-sm text-gray-700">{ user.username }</td>
                        <td className="p-2 text-sm text-gray-700">{ user.email }</td>
                        <td className="p-2 text-sm text-gray-700">{ user.phone }</td>
                        <td className="p-2 text-sm text-gray-700">
                            <button
                                className="bg-green-200 p-1"
                                onClick={ () => updateReport(user) }
                            >Report</button>
                        </td>
                    </tr>
                </>
            )
        })
    );
}

export default Row;
