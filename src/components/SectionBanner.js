import React from 'react';

const SectionBanner = ({
  standalone,
  title,
  description,
  iconUrl = '/img/launcher/banner/forums-icon.png',
}) => {
  return (
    <div className={standalone ? 'content-grid mx-auto pb-8-i' : ''}>
      {/*<!-- SECTION BANNER -->*/}
      <section className='section-banner'>
        {/*<!-- SECTION BANNER ICON -->*/}
        <img className="section-banner-icon" src={iconUrl} alt="section-banner-icon" />
        {/*<!-- /SECTION BANNER ICON -->*/}

        {/*<!-- SECTION BANNER TITLE -->*/}
        <p className="section-banner-title">{title}</p>
        {/*<!-- /SECTION BANNER TITLE -->*/}

        {/*<!-- SECTION BANNER TEXT -->*/}
        <p className="section-banner-text">{description}</p>
        {/*<!-- /SECTION BANNER TEXT -->*/}
      </section>
      {/*<!-- /SECTION BANNER -->*/}
    </div>
  );
}

export default SectionBanner;
