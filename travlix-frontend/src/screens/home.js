import React from 'react';

const HomePage = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div class="container">
          <a class="navbar-brand" href="index.html">Travelix<span>Travel Agency</span></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
            aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="oi oi-menu"></span> Menu
          </button>

          <div class="collapse navbar-collapse" id="ftco-nav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active"><a href="index.html" class="nav-link">Home</a></li>
              <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
              <li class="nav-item"><a href="destination.html" class="nav-link">Destination</a></li>
              <li class="nav-item"><a href="hotel.html" class="nav-link">Hotel</a></li>
              <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="hero-wrap js-fullheight header-banner"
        style={{ backgroundImage: `url(${require("../images/bg_5.jpg")})` }}>
        <div class="overlay header-banner"></div>
        <div class="container">
          <div class="row no-gutters slider-text js-fullheight align-items-center">
            <div class="col-md-7">
              <span class="subheading">Welcome to Travelix</span>
              <h1 class="mb-4">Discover Your Favorite Place with Us</h1>
              <p class="caps">Travel to the any corner of the world, without going around in circles</p>
            </div>

          </div>
        </div>
      </div>

      <section class="ftco-section ftco-no-pb ftco-no-pt">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="ftco-search d-flex justify-content-center">
                <div class="row">
                  <div class="col-md-12 nav-link-wrap">
                    <div class="nav nav-pills text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                      <a class="nav-link" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab"
                        aria-controls="v-pills-2" aria-selected="false">Hotel</a>

                      <a class="nav-link active mr-md-1" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab"
                        aria-controls="v-pills-1" aria-selected="true">Search Tour</a>

                    </div>
                  </div>
                  <div class="col-md-12 tab-wrap">

                    <div class="tab-content" id="v-pills-tabContent">

                      <div class="tab-pane fade show active" id="v-pills-1" role="tabpanel"
                        aria-labelledby="v-pills-nextgen-tab">
                        <form action="#" class="search-property-1">
                          <div class="row no-gutters">
                            <div class="col-md d-flex">
                              <div class="form-group p-4 border-0">
                                <label for="#">Destination</label>
                                <div class="form-field">
                                  <div class="icon"><span class="fa fa-search"></span></div>
                                  <input type="text" class="form-control" placeholder="Search place" />
                                </div>
                              </div>
                            </div>
                            <div class="col-md d-flex">
                              <div class="form-group p-4">
                                <label for="#">Check-in date</label>
                                <div class="form-field">
                                  <div class="icon"><span class="fa fa-calendar"></span></div>
                                  <input type="text" class="form-control checkin_date" placeholder="Check In Date" />
                                </div>
                              </div>
                            </div>
                            <div class="col-md d-flex">
                              <div class="form-group p-4">
                                <label for="#">Check-out date</label>
                                <div class="form-field">
                                  <div class="icon"><span class="fa fa-calendar"></span></div>
                                  <input type="text" class="form-control checkout_date" placeholder="Check Out Date" />
                                </div>
                              </div>
                            </div>
                            <div class="col-md d-flex">
                              <div class="form-group p-4">
                                <label for="#">Price Limit</label>
                                <div class="form-field">
                                  <div class="select-wrap">
                                    <div class="icon"><span class="fa fa-chevron-down"></span></div>
                                    <select name="" id="" class="form-control">
                                      <option value="">$100</option>
                                      <option value="">$10,000</option>
                                      <option value="">$50,000</option>
                                      <option value="">$100,000</option>
                                      <option value="">$200,000</option>
                                      <option value="">$300,000</option>
                                      <option value="">$400,000</option>
                                      <option value="">$500,000</option>
                                      <option value="">$600,000</option>
                                      <option value="">$700,000</option>
                                      <option value="">$800,000</option>
                                      <option value="">$900,000</option>
                                      <option value="">$1,000,000</option>
                                      <option value="">$2,000,000</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-md d-flex">
                              <div class="form-group d-flex w-100 border-0">
                                <div class="form-field w-100 align-items-center d-flex">
                                  <input type="submit" value="Search"
                                    class="align-self-stretch form-control btn btn-primary" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>

                      <div class="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-performance-tab">
                        <form action="#" class="search-property-1">
                          <div class="row no-gutters">
                            <div class="col-lg d-flex">
                              <div class="form-group p-4 border-0">
                                <label for="#">Destination</label>
                                <div class="form-field">
                                  <div class="icon"><span class="fa fa-search"></span></div>
                                  <input type="text" class="form-control" placeholder="Search place" />
                                </div>
                              </div>
                            </div>
                            <div class="col-lg d-flex">
                              <div class="form-group p-4 border-0">
                                <label for="#">Location/Area</label>
                                <div class="form-field">
                                  <div class="icon"><span class="fa fa-location-arrow"></span></div>
                                  <input type="text" class="form-control" placeholder="Search place" />
                                </div>
                              </div>
                            </div>
                            <div class="col-lg d-flex">
                              <div class="form-group d-flex w-100 border-0">
                                <div class="form-field w-100 align-items-center d-flex">
                                  <input type="submit" value="Search"
                                    class="align-self-stretch form-control btn btn-primary p-0" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;