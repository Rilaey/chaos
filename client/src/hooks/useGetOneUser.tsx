import { useState } from 'react'

export const useGetOneUser = () => {
    const [getUser, setGetOneUser] = useState(null);

    const getOneUser = async (id: string) => {
        const response = await fetch(`/api/user/oneUser/${id}`)

        const data = await response.json()

        setGetOneUser(data)
    }

    return { getOneUser, getUser }
}