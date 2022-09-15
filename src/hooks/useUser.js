import axios from "axios"
import { useState, useEffect } from "react"


export const useUser = () => {

    const [user, setUser] = useState(null)
    const [message, setMessage] = useState('')
    
    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedGenshinAppUser')
        if (loggedUserJSON) {
            const backUser = JSON.parse(loggedUserJSON)
            setUser(backUser)
        }
    }, [])

    const handleLogout = () => {
        setUser(null)
        window.localStorage.removeItem('loggedGenshinAppUser')
        window.location.replace('/');
    }

    const handleLogin = async (event) => {
        event.preventDefault()
        const username = event.target.username.value
        const password = event.target.password.value
        try {
            const userGiven = await axios.post(
                "/api/login",
                { username, password}
            )
            window.localStorage.setItem(
                'loggedGenshinAppUser', JSON.stringify(userGiven.data)
            )
            setUser(userGiven.data)
            setMessage('logged')
        } catch (e) {
            console.log(e)
            setMessage('Credenciales incorrectas')
            setTimeout(() => {
                setMessage("")
            }, 5000)
        }
        event.target.username.value = ''
        event.target.password.value = ''
    }

    return {
        user,
        message,
        handleLogout,
        handleLogin,
        setMessage
    }
}

export default useUser