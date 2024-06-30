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
      <section className="ftco-section ftco-no-pb">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="search-wrap-1">
                <HotelSearchComponent></HotelSearchComponent>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row">
            {
              hotelList.map((value, index) => {
                return(
                  <HotelInfoComponent key={index} {...value}></HotelInfoComponent>
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