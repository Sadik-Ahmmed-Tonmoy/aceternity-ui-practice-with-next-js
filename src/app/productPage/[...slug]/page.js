import React from 'react';

const catchAllPage = ({params}) => {
   const childCategory = params.slug[2];
    console.log(childCategory);
    return (
        <div>
            catchAllPage
            <div className='flex gap-5 text-4xl'>

{params.slug.map((slug, index) => <p key={index}>{slug}</p>)}
            </div>
        </div>
    );
};

export default catchAllPage;