import React from 'react';
import Image from 'next/image';
import { getAllBrands } from '@/lib/categories/categoriesApi';
import Link from 'next/link';

const TopBrands = async () => {
    const data = await getAllBrands();
    
    return (
        <div className='lg:mt-16'>
            <h1 className='text-center font-semibold text-xl md:text-3xl'>Top Brands</h1>

            <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-2 md:gap-4 mt-8'>
                {
                    data?.result?.map(brand =>
                        <Link href={`/products?brand=${brand?.slug}`} key={brand?._id} className='bg-white rounded-lg shadow-md cursor-pointer px-8 md:px-14 py-4 md:py-6 group flex flex-col items-center justify-center'>
                            <Image quality={100} width={500} height={500} src={brand?.image} className='w-full' alt='brand' />
                            <h1 className='text-center text-xs md:sm group-hover:text-primary mt-2'>{brand?.name}</h1>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default TopBrands;