// src/pages/Home.jsx
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/homepage/Hero';
import About from '../components/homepage/About';
import RecentBlogPosts from '../components/homepage/RecentBlogPosts';
import UpcomingEvents from '../components/homepage/UpcomingEvents';
import SuccessStoriesCarousel from '../components/homepage/SuccessStoriesCarousel';

const Home = () => {
  return (
    <Layout>
     <Hero/>
     <About/>
     
     <UpcomingEvents/>
     <SuccessStoriesCarousel/>
     <RecentBlogPosts/>
    </Layout>
  );
};

export default Home;
