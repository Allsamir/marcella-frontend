import { baseUrl } from "../api/baseUrl";

const getSingleSeller = async (email) => {
    try {
        const res = await fetch(`${baseUrl}/auth/seller/${email}`, {
            method: 'POST',
        })

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json();
    } catch (error) {
        console.error(error)
    }
};

// get single seller by seller id 
const getSingleSellerById = async (id) => {
    try {
        const res = await fetch(`${baseUrl}/auth/client-seller/${id}`, {
            method: 'POST',
        })

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json();
    } catch (error) {
        console.error(error)
    }
};


// update single seller by seller id 
const updateSellerMutation = async (id, data) => {
    try {
        const res = await fetch(`${baseUrl}/auth/seller/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'PUT',
            body: JSON.stringify(data)
        })

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json();
    } catch (error) {
        console.error(error)
    }
};


export {
    getSingleSeller,
    getSingleSellerById,
    updateSellerMutation
}