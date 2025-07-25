// src/pages/Home.jsx
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/homepage/Hero';
import About from '../components/homepage/About';
import RecentBlogPosts from '../components/homepage/RecentBlogPosts';
import UpcomingEvents from '../components/homepage/UpcomingEvents';
import SuccessStoriesCarousel, { Testimonial } from '../components/homepage/Testimonial';
import JoinOurEfforts from '../components/homepage/JoinOurEfforts';


const Home = () => {
  return (
    <Layout>
     <Hero/>
     <About/>
     
     <UpcomingEvents/>
     <Testimonial/>
     <JoinOurEfforts/>
     <RecentBlogPosts/>
     
    </Layout>
  );
};

export default Home;
