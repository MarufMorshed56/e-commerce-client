import React from 'react'

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useLocation } from 'react-router-dom'




const Success = () => {
          const location = useLocation();

          const stripeData = location.state.stripeData;
          const cart = location.state.products;
          //const currentUser = useSelector((state) => state.user.currentUser)
          //console.log(currentUser)


          return (
                    <div>
                              successfull
                    </div>
          )
}

export default Success
