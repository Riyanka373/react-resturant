import React, { useState } from 'react';
import Navbar from '../Navbar/Index';
import Sidebar from '../Sidebar';


import {HeroCotainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn} from './HeroElements';

const Hero = () => {
const [isOpen, setIsOpen] = useState(false);

const toggle = () => {
  setIsOpen(!isOpen);
};

 return(
   <HeroCotainer>
    <Navbar toggle={toggle} />
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <HeroContent>
      <HeroItems>
        <HeroH1>Greatest Pizza Ever</HeroH1>
        <HeroP>Ready in 60 seconds</HeroP>
        <HeroBtn>Place Order</HeroBtn>
      </HeroItems>
    </HeroContent>
   </HeroCotainer>
 )
}

export default Hero