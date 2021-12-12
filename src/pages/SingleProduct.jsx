import React from 'react'


import { Announcement } from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import SPFilter from '../components/SPFilter'

import { useLocation } from 'react-router'
import { useContext } from 'react'

export const urlIdContext = React.createContext()
 //using useContext instead of prop-Drilling

const SingleProduct = () => {
          const location = useLocation()
          var url= location.pathname.split("/")[3]

          return (
                    <urlIdContext.Provider value={url}>
                    <div>
                    <Announcement/>
                    <Navbar/>
                    <SPFilter/>
                    <Newsletter/>
                    <Footer/>
                    </div>
                    </urlIdContext.Provider>
          )
}

export default SingleProduct
