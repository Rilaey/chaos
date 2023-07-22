import * as React from "react"

export const useGetOneStatus = () => {
    const [statusInformation, setStatusInformation] = React.useState([]);

    const getOneStatus = async (id: string) => {
        const response = await fetch(`/api/status/singleStatus/${id}`);

        const data = await response.json();

        if(!response.ok) {
            console.log("error in useGetOneStatus")
        }

        if (response.ok) {
            setStatusInformation(data);
        }
    }
    return { getOneStatus, statusInformation}
}
