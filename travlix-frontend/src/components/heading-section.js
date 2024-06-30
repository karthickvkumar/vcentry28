import React from 'react';

const HeadingSectionComponent = (props) => {
  return (
    <section className="hero-wrap hero-wrap-2 js-fullheight" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
        <div className="overlay js-fullheight"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
            <div className="col-md-9 pb-5 text-center">
              <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i
                className="fa fa-chevron-right"></i></a></span>{props.textContent}<span><i className="fa fa-chevron-right"></i></span>
              </p>
              <h1 className="mb-0 bread">{props.textContent}</h1>
            </div>
          </div>
        </div>
      </section>
  );
};

export default HeadingSectionComponent;