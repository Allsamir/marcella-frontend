'use client'
import { getStoreLocation } from '@/lib/allpagesApi/allPagesApi';
import DangerHtml from '@/utility/dangerHtml/DangerHtml';
import React, { useEffect, useState } from 'react';

const StoreLocation = () => {
    const [data, setData] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getStoreLocation();
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
        <div className='my-4 min-h-screen'>
            <div className='flex items-center justify-between mb-10'>
                <h1 className='text-xl md:text-3xl font-medium'>Store Location</h1>
            </div>
            {
                data?.data?.map(value =>
                    <DangerHtml key={value?._id} data={value?.description} />
                )
            }
        </div>
    );
};

export default StoreLocation;