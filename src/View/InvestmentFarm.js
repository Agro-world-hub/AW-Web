import React from 'react'
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import InvestmentFarmBody from '../Component/InvestFarmBody';

const InvestmentFarm = () => {
  return (
    <div>
      <Header/>
      <InvestmentFarmBody/>
      <Footer/>
    </div>
  )
}

export default InvestmentFarm;