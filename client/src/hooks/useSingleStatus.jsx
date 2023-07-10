import { useState } from "react";
// import { useAuthContext } from "./useAuthContext";

export const useSingleStatus = () => {
    const [error, setError] = useState(null)
    // const [isLoading, setIsLoading] = useState(false)

    const getSingleStatus = async (_id) => {
        const response = await fetch(`/api/status/singleStatus/${_id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });

        const data = response.json();

        console.log(data)

        if (!response.ok) {
            setError(data.message);
            // setIsLoading(false);
            return;
        }

        if (response.ok) {
            setError(null);
            // setIsLoading(false);
            return data;
        }
    }

    return { getSingleStatus, error }
}