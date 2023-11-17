import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputData = {
            username,
            password
        }
        setUsername("");
        setPassword("");
        try {
            console.log("User Created", inputData);
            toast.success(`${inputData.username} is created`);
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong! while creating user!");
        }
    }

    return (
        <div className="min-h-50">
            <div className="flex flex-col justify-center p-8 md:p-14">
                <span className="mb-3 text-4xl font-bold">Welcome</span>
                <span className="font-light text-gray-400 mb-8">
                    Please enter your details
                </span>
                <form onSubmit={ handleSubmit }>
                    <div className="py-4">
                        <label className="mb-2 text-md">Username</label>
                        <input
                            required
                            type="text"
                            name="username"
                            className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                            value={ username }
                            onChange={ (e) => setUsername(e.target.value) }
                        />
                    </div>
                    <div className="py-4">
                        <label className="mb-2 text-md">Password</label>
                        <input
                            required
                            type="password"
                            minLength="8"
                            name="password"
                            className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                            value={ password }
                            onChange={ (e) => setPassword(e.target.value) }
                        />
                    </div>
                    <br />
                    <button
                        type="submit"
                        className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
                    >
                        Create New
                    </button>
                </form>

                <div className="text-center text-gray-400">
                    Already have account?
                    <span className="font-bold text-black">Sign In</span>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Login;
