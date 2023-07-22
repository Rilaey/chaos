import * as React from "react";
import { getToken } from "../utils/getToken"

export const useUnfollow = () => {
    const [error, setError] = React.useState<null>(null)

    const unfollowUser = async(_id: string, userId: string) => {
        const response = await fetch(`/api/user/unfollowUser/${_id}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${getToken()}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId })
        })

        const data = await response.json()
        console.log(data)

        if (response.ok) {
            location.reload()
            return data
        }

        if(!response.ok) {
            setError(data)
        }
    }

    return { unfollowUser, error}
}