import React from 'react';
type Params = {
    productId: string;
};

type SearchParams = {
    search: string;
};

const dynamicPage = ({params, searchParams} : {params: Params, searchParams: SearchParams}) => {
    console.log(params, searchParams);
    return (
        <div className='text-3xl'>
            dynamicPage {params.productId}
        </div>
    );
};

export default dynamicPage;