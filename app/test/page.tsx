'use client';

import { use, useEffect, useState } from "react";

export default function Test() {
    const [data, setData] = useState<any>([])
    useEffect(() => {
        fetch('http://localhost:1337/api/portfolios/1?populate=*',
            { headers: { 'authorization': 'Bearer 3630d53c4c4b85bd82405dcb0c921a4cca6c9cd2bf050cfa1f101f071f136a78704fca5f68fadb185e66696c6887edad3959ded75e0da6a83034a672aeaef987a27526e7df3772dac9620da966d9444e26211e9b50420530191418d934f14302150cc2391a8392c2671f838501346fd16d606c863911a8e268780f761a06963b' } })
            .then(res => res.json())
            .then(data => setData(data?.data))
            .finally()
    }, [])
    console.log(data)
    return <>
        <p>{data?.attributes?.details?.email}</p>
        <p>{data?.attributes?.details?.birthday}</p>
        <p>{data?.attributes?.details?.phone}</p>
        <p>{data?.attributes?.details?.location[0]?.children[0]?.text}</p>
        
        </>
}