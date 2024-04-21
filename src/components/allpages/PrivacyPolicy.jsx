'use client'
import { getPrivacyPolicy } from '@/lib/allpagesApi/allPagesApi';
import DangerHtml from '@/utility/dangerHtml/DangerHtml';
import React, { useEffect, useState } from 'react';

const PrivacyPolicy = () => {
    const [data, setData] = useState(null);
    const [language, setLanguage] = useState('english')


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getPrivacyPolicy();
                if (data) {
                    setData(data)
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [])

    return (
        <div className='my-4'>
            <div className='flex items-center justify-between mb-10'>
                <h1 className='text-xl md:text-3xl font-medium'>{language === 'english' ? 'Privacy Policy' : 'গোপনীয়তা নীতি'}</h1>
                <select onChange={(e) => setLanguage(e.target.value)} className='outline-none border border-dark rounded font-light text-sm'>
                    <option value="english">English</option>
                    <option value="bangla">Bangla</option>
                </select>
            </div>
            {
                data?.data?.map(value =>
                    <DangerHtml key={value?._id} data={language === 'english' ? value?.description : value?.banglaDescription} />
                )
            }
        </div>
    );
};

export default PrivacyPolicy;