import React from 'react';
import { ThreeDCardDemo } from '../components/ThreeDCardDemo';
import { GoogleGeminiEffectDemo } from '@/components/GoogleGeminiEffect';
import { SparklesCoreConcept } from '@/components/SparklesCoreConcept';

const page = () => {
  return (
    <div>
      <ThreeDCardDemo/>
      <GoogleGeminiEffectDemo/>
      <ThreeDCardDemo/>
      <SparklesCoreConcept/>
    </div>
  );
};

export default page;