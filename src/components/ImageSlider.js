import React from 'react';

const ImageSlider = ({ images, title }) => {
  return (
      <div className="slider-panel">
        {/* SLIDER PANEL SLIDES */}
        <div id="product-box-slider-items" className="slider-panel-slides">
          {images?.length && images?.map((image, i) => {
            return (
              <div key={`slide-${i}`}>
                {/* SLIDER PANEL SLIDE */}
                <div className="slider-panel-slide">
                  {/* SLIDER PANEL SLIDE IMAGE */}
                  <div className="slider-panel-slide-image liquid overflow-hidden flex justify-center">
                    <img src={image} />
                  </div>
                  {/* /SLIDER PANEL SLIDE IMAGE */}
                  <div className="slider-header flex px-10 pt-10">
                      <h4 className="text-white" style={{ fontSize: '2em' }}>{title}</h4>
                  </div>

                </div>
                {/* /SLIDER PANEL SLIDE */}
              </div>
            )
          })}
          

        </div>
        {/* /SLIDER PANEL SLIDES */}

        {/* SLIDER PANEL ROSTER */}
        {images?.length > 1 && (
          <div className="slider-panel-roster">
            {/* SLIDER CONTROLS */}
            <div id="product-box-slider-controls" className="slider-controls">
              {/* SLIDER CONTROL */}
              <div className="slider-control left">
                {/* SLIDER CONTROL ICON */}
                <svg className="slider-control-icon icon-small-arrow">
                  <use xlinkHref="#svg-small-arrow"></use>
                </svg>
                {/* /SLIDER CONTROL ICON */}
              </div>
              {/* /SLIDER CONTROL */}

              {/* SLIDER CONTROL */}
              <div className="slider-control right">
                {/* SLIDER CONTROL ICON */}
                <svg className="slider-control-icon icon-small-arrow">
                  <use xlinkHref="#svg-small-arrow"></use>
                </svg>
                {/* /SLIDER CONTROL ICON */}
              </div>
              {/* /SLIDER CONTROL */}
            </div>
            {/* /SLIDER CONTROLS */}

            {/* BUTTON */}
            <a className="button primary" href="#" target="_blank">Buy Now</a>
            {/* /BUTTON */}

            {/* ROSTER PICTURES */}
            <div id="product-box-slider-roster" className="roster-pictures">
              {images?.length && images?.map((image, i) => {
                return (
                  <React.Fragment key={`thumb-${i}`}>
                    {/* ROSTER PICTURE */}
                    <div className="roster-picture">
                      {/* ROSTER PICTURE IMAGE */}
                      <div className="roster-picture-image liquid overflow-hidden">
                        <img src={image} className="object-cover w-auto h-full"/>
                      </div>
                      {/* /ROSTER PICTURE IMAGE */}
                    </div>
                    {/* /ROSTER PICTURE */}
                  </React.Fragment>
                )
              })}

            </div>
            {/* /ROSTER PICTURES */}
          </div>
        )}
        {/* /SLIDER PANEL ROSTER */}
      </div>
  );
}

export default ImageSlider;
