import React from 'react'

import Footer from "../components/Footer";
import Body from "../components/Body";
import Header from "../components/Header";
import Info from "../components/Info";
import Social from "../components/Social";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <Link to="/">

     <Header />
      <Body />
      <Footer />
      <Info/>
      <Social/>
    </Link>
    </>
  )
}

export default Home;