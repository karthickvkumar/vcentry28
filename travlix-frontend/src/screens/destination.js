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
      <section className="ftco-section ftco-no-pb">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="search-wrap-1">
                <TourSearchComponent></TourSearchComponent>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row">
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