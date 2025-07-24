import React from 'react';
import Layout from '../components/Layout';
import AllPrograms from '../components/Programs/AllPrograms';
import ProgramHero from '../components/Programs/ProgramHero';


const Programs = () => {
  return (
    <Layout>
      <ProgramHero/>
   <AllPrograms/>
    </Layout>
  );
};

export default Programs;
