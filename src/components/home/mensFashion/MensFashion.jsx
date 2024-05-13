'use client'
import ProductCard from '@/components/card/ProductCard';
import React, { useEffect, useState } from 'react';
import ProductSlider from '@/utility/productSlider/ProductSlider';
import { getProductByProductType } from '@/lib/productApi/productApi';

const MensFashion = ({ type }) => {
    const [products, setProducts] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getProductByProductType(type);
                if (data) {
                    setProducts(data)
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [type])


    return (
        <div>
            <div className='mt-10'>
                <h1 className='font-medium text-xl md:text-2xl capitalize'>{type}</h1>
                <div className='mt-6'>
                    {
                        products?.result?.length > 5 ? <ProductSlider>
                            {
                                products?.result?.map(product =>
                                    <div key={product?._id} className='px-1 py-2'>
                                        <ProductCard
                                            product={product}
                                        />
                                    </div>
                                )
                            }
                        </ProductSlider> :
                            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2'>
                                {
                                    products?.result?.map(product =>
                                        <ProductCard
                                            key={product?._id}
                                            product={product}
                                        />
                                    )
                                }
                            </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default MensFashion;