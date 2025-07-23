import React from 'react';
import Layout from '../components/Layout';
import KnowAboutUs from '../components/Aboutpage/KnowAboutUs';
import ProfileCard from '../components/Aboutpage/ProfileCard';
import AboutOrganization from '../components/Aboutpage/AboutOrganization';
import OurTeam from '../components/Aboutpage/OurTeam';
import OurImpact from '../components/Aboutpage/OurImpact';

const About = () => {
  return (
    <Layout>
     <KnowAboutUs/>
   <AboutOrganization/>
     <ProfileCard/>
     <OurTeam/>
       <OurImpact/>
    </Layout>
  );
};

export default About;
