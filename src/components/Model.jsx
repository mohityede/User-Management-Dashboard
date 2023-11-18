function Model({ user, toggleModel }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative p-4 min-w-[400px] max-w-2xl max-h-full">

                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            User Report
                        </h3>
                        <button
                            type="button"
                            onClick={ () => toggleModel() }
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal"
                        >
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                    </div>

                    <div className="p-4 md:p-5 space-y-4 text-white">
                        <tbody>
                            <tr>
                                <td className="text-gray-300">ID:</td>
                                <td className="p-1">{ user?.id }</td>
                            </tr>
                            <tr>
                                <td className="text-gray-300">Name:</td>
                                <td className="p-1">{ user?.name }</td>
                            </tr>
                            <tr>
                                <td className="text-gray-300">UserName:&nbsp;</td>
                                <td className="p-1">{ user?.username }</td>
                            </tr>
                            <tr>
                                <td className="text-gray-300">Email:</td>
                                <td className="p-1">{ user?.email }</td>
                            </tr>
                            <tr>
                                <td className="text-gray-300">Address:</td>
                                <td className="p-1">{ `${user?.address?.street}, ${user?.address?.suite}, ${user?.address?.city}, ${user?.address?.zipcode}` }</td>
                            </tr>
                            <tr>
                                <td className="text-gray-300">Phone:</td>
                                <td className="p-1">{ user?.phone }</td>
                            </tr>
                            <tr>
                                <td className="text-gray-300">Website:</td>
                                <td className="p-1">{ user?.website }</td>
                            </tr>
                            <tr>
                                <td className="text-gray-300">Company:</td>
                                <td className="p-1">{ user?.company?.name }</td>
                            </tr>
                        </tbody>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Model;