import React, { useState } from 'react'
import Header from '../../components/common/header'
import TabOptions from '../../components/common/tabOption'
import Footer from '../../components/common/footer'
import Delivery from '../../components/delivery'
import DininingOut from '../../components/diningOut'
import Nightlife from '../../components/nightlife'
 
 const HomePage = () => {
    const[activeTab,setActiveTab]=useState("Delivery");
    const getCorrectScreen =(tab)=>{
        switch (tab) {
                case "Delivery":return <Delivery/>
        
                case "Dining Out":return <DininingOut/>
        
                case "Nightlife":return <Nightlife/>
        
            default:return <Delivery/>
                
        }
    }
   return (
     <div>
        <Header/>
        <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
        {getCorrectScreen(activeTab)}
        <Footer/>
     </div>
   )
 }
 
 export default HomePage;