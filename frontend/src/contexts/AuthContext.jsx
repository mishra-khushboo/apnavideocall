import { createContext, useState } from "react";
import axios from "axios";
import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

const client = axios.create({
	baseURL: "localhost:8000/api/v1/users"
})

export const AuthProvider = ({ children }) => {
	const authContext = useContext(AuthContext);
	const [userData, setUserData] = useState(null);
	const handleRegister = async (name, username, password) => {
		try {
			let request = await client.post("/register", {
				name: name,
				username: username,
				password: password
			})
			if (request.status === 201) {
				return request.data.message;
			}
		} catch (err) {
			throw err;
		}
	}

	const router = useNavigate();

	const data = {
		userData, setUserData, handleRegister
	}

	return (
		<AuthContext.Provider value={data}>
			{children}
		</AuthContext.Provider>
	)

}