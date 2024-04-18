'use client'
import React, { useEffect, useState } from 'react';
import VendorShopCardWithBanner from '../VendorShopCardWithBanner';
import SellerShopIndex from '..';
import { getStoreLayoutQuery } from '@/lib/layoutStore/layoutStoreApi';


const Layout1 = ({ email }) => {
    const [layouts, setLayouts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getStoreLayoutQuery(email)
                if (res) {
                    setLayouts(res)
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [email])
    const products = layouts?.data?.filter(layout => layout?.images?.length <= 1)

    return (
        <div>
            {
                products?.map((product, idx) =>
                    <VendorShopCardWithBanner
                        key={idx}
                        banner={product?.images}
                        products={product?.products}
                    />
                )
            }
            <SellerShopIndex />
        </div>
    );
};

export default Layout1;