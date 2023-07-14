import { useState } from 'react'

export const useGetOneStatus = () => {
    const [statusInformation, setStatusInformation] = useState([]);

    const getOneStatus = async (id) => {
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
