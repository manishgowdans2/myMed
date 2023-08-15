import React from 'react'

import Test from "@pages/products"

import Navbar from "../components/common/navbar"
import Hero from "../components/common/hero"
import Card from "../components/common/breadcrumbCard"
import Address from '@components/common/address'
import Footer from "../components/common/footer"
import Currency from "../components/common/currency"
import Order from "../components/common/order"
import CourseCard from '../components/common/courseCard'
const index = () => {
  return (
    <>


      <div>
        <div className="relative bg-white overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4">


            <Navbar />

            <div className="fit">


              <Hero />



              <Card />


              <Address />


              <Currency />

              <Order />

              <CourseCard />


            </div>
          </div>

          <Footer />


        </div>
      </div>
    </>
  )
}

export default index