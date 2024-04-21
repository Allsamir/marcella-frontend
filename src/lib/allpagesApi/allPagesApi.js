import { baseUrl } from "../api/baseUrl";

// get privacy policy
const getPrivacyPolicy = async () => {
    try {
        const res = await fetch(`${baseUrl}/privacy-policy`)

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json();
    } catch (error) {
        console.error(error)
    }
};

export {
    getPrivacyPolicy,
}