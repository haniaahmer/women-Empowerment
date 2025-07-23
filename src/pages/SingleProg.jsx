import React from 'react';
import Layout from '../components/Layout';
import AllPrograms from '../components/Programs/AllPrograms';
import SingleProgram from '../components/Programs/SingleProgram';
import OtherPrograms from '../components/Programs/OtherPrograms';


const SingleProg = () => {
  return (
    <Layout>
   <SingleProgram/>
   <OtherPrograms/>
    </Layout>
  );
};

export default SingleProg;
