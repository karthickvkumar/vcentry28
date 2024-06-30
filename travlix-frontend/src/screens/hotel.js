import React from 'react';
import HeaderComponent from '../components/header';
import HeadingSectionComponent from '../components/heading-section';
import HotelSearchComponent from '../components/hotel-search';
import HotelInfoComponent from '../components/hotel-info';
import FooterComponenet from '../components/footer';

const HotelPage = () => {

  const hotelList = [
    {
      hotelImage : require("../images/hotel-resto-1.jpg"),
      hotelName : "The Accord",
      hotelPrice: 350,
      hotelTourCount: 5,
      hotelLocation: "Chennai, India"
    },
    {
      hotelImage : require("../images/hotel-resto-2.jpg"),
      hotelName : "The Accord",
      hotelPrice: 350,
      hotelTourCount: 5,
      hotelLocation: "Chennai, India"
    }
  ]

  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <HeadingSectionComponent backgroundImage={require("../images/bg_1.jpg")} textContent="Hotel List"></HeadingSectionComponent>
      <section class="ftco-section ftco-no-pb">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="search-wrap-1">
                <HotelSearchComponent></HotelSearchComponent>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section">
        <div class="container">
          <div class="row">
            {
              hotelList.map((value, index) => {
                return(
                  <HotelInfoComponent {...value}></HotelInfoComponent>
                )
              })
            }
          </div>
        </div>
      </section>
      <FooterComponenet></FooterComponenet>
    </div>
  );
};

export default HotelPage;