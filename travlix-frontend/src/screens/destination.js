import React from 'react';
import HeaderComponent from '../components/header';
import HeadingSectionComponent from '../components/heading-section';
import TourSearchComponent from '../components/tour-search';
import DestinationInfoComponent from '../components/destination-info';
import FooterComponenet from '../components/footer';

const DestinationPage = () => {

  const tourDestination = [
    {
      placeName: "Singapore",
      placeCount: "80",
      placeImage: require("../images/place-1.jpg")
    },
    {
      placeName: "Canada",
      placeCount: "12",
      placeImage: require("../images/place-2.jpg")
    },
    {
      placeName: "Malaysia",
      placeCount: "10",
      placeImage: require("../images/place-3.jpg")
    },
    {
      placeName: "Singapore",
      placeCount: "80",
      placeImage: require("../images/place-1.jpg")
    },
    {
      placeName: "Canada",
      placeCount: "12",
      placeImage: require("../images/place-2.jpg")
    },
    {
      placeName: "Malaysia",
      placeCount: "10",
      placeImage: require("../images/place-3.jpg")
    },
    {
      placeName: "Singapore",
      placeCount: "80",
      placeImage: require("../images/place-1.jpg")
    },
    {
      placeName: "Canada",
      placeCount: "12",
      placeImage: require("../images/place-2.jpg")
    },
    {
      placeName: "Malaysia",
      placeCount: "10",
      placeImage: require("../images/place-3.jpg")
    }
  ]

  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <HeadingSectionComponent backgroundImage={require("../images/bg_4.jpg")} textContent="Tour List"></HeadingSectionComponent>
      <section class="ftco-section ftco-no-pb">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="search-wrap-1">
                <TourSearchComponent></TourSearchComponent>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section">
        <div class="container">
          <div class="row">
            {
              tourDestination.map((value, index) => {
                return (
                  <DestinationInfoComponent key={index} placeName={value.placeName} placeCount={value.placeCount} placeImage={value.placeImage}></DestinationInfoComponent>
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

export default DestinationPage;