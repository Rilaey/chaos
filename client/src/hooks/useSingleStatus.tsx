import * as React from "react";

export const useSingleStatus = () => {
    const [error, setError] = React.useState(null)

    const getSingleStatus = async (_id: string) => {
        const response = await fetch(`/api/status/singleStatus/${_id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });

        const data = response.json();

        if (!response.ok) {
            setError(await data);
            return;
        }

        if (response.ok) {
            setError(null);
            return data;
        }
    }

    return { getSingleStatus, error }
}