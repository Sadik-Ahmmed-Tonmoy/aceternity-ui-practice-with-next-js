import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface RouteParams {
  productId: string;
}

const DynamicPage: React.FC<RouteComponentProps<RouteParams>> = ({ match, location }) => {
  const { params } = match;
  const searchParams = new URLSearchParams(location.search);

  console.log(params, searchParams.get('productId'));

  return (
    <div className='text-3xl'>
      dynamicPage {params.productId}
    </div>
  );
};

export default DynamicPage;
