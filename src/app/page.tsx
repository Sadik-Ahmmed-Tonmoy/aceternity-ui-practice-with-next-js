import React from 'react';
import { ThreeDCardDemo } from '../components/ThreeDCardDemo';
import { GoogleGeminiEffectDemo } from '@/components/GoogleGeminiEffect';

const page = () => {
  return (
    <div>
      <ThreeDCardDemo/>
      <GoogleGeminiEffectDemo/>
      <ThreeDCardDemo/>
    </div>
  );
};

export default page;