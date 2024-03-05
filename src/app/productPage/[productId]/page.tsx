import React from 'react';

const dynamicPage = ({params, searchParams}) => {
    console.log(params, searchParams);
    return (
        <div className='text-3xl'>
            dynamicPage {params.productId}
        </div>
    );
};

export default dynamicPage;