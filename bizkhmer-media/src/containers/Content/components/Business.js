import React from 'react';
export default function Business(props) {
  const {
    business,
    sub_business,
    business_web_design,
    sub_business_web_design,
    business_development,
    sub_business_development,
    business_marketing,
    sub_business_marketing,
    business_ecommerce,
    sub_business_ecommerce,
    business_seo,
    sub_business_seo,
    business_branding,
    sub_business_branding
  } = props.content;

  return (
    <div
      id="services-element"
      data-vc-full-width="true"
      data-vc-full-width-init="false"
      data-animation-delay={300}
      className="vc_row wpb_row vc_row-fluid vc_custom_1549622870773 vc_row-has-fill"
      style={{ backgroundPosition: 'center bottom !important' }}
    >
      <div className="wpb_column vc_column_container vc_col-sm-3">
        <div className="vc_column-inner">
          <div className="wpb_wrapper" />
        </div>
      </div>
      <div className="wpb_column vc_column_container vc_col-sm-6">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div
              className="wd_empty_space"
              data-heightmobile={50}
              data-heighttablet={70}
              data-heightdesktop={107}
            />
            <div
              className="wd-heading text-center  animated  "
              style={{ maxWidth: '100%', margin: '0 auto' }}
              data-animated="fadeInUp"
            >
              <h2 style={{ margin: 0 }} className="title_a" id="business">
                {business}
              </h2>
              <p style={{}} className="sub_title_a" id="sub-business">
                {sub_business}
              </p>
            </div>
            <div
              className="wd_empty_space"
              data-heightmobile={50}
              data-heighttablet={70}
              data-heightdesktop={32}
            />
          </div>
        </div>
      </div>
      <div className="wpb_column vc_column_container vc_col-sm-3">
        <div className="vc_column-inner">
          <div className="wpb_wrapper" />
        </div>
      </div>
      <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-4 vc_col-md-6 vc_col-xs-12">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div
              className=" vc_custom_1553684377783 small-shadow text-icon text-icon--icon-left_position animated  boxes  clearfix"
              data-animated="fadeInUp"
              style={{ minHeight: 220 }}
            >
              <div className="text-icon__container   ">
                <div className="text-icon__icon-box">
                  <img
                    src={require('../../../images/Message-App.svg')}
                    alt="icon"
                  />
                </div>
                <div className="text-icon__content-box">
                  <h4 className="text-icon__title" id="business_web_design">
                    {business_web_design}
                  </h4>
                  <p className="text-icon__text" id="sub_business_web_design">
                    {sub_business_web_design}
                  </p>
                </div>
              </div>
            </div>
            <div
              className=" vc_custom_1553684388429 small-shadow text-icon text-icon--icon-left_position animated  boxes  clearfix"
              data-animated="fadeInUp"
              style={{ minHeight: 220 }}
            >
              <div className="text-icon__container   ">
                <div className="text-icon__icon-box">
                  <img
                    src={require('../../../images/Shield-Security.svg')}
                    alt="icon"
                  />
                </div>
                <div className="text-icon__content-box">
                  <h4 className="text-icon__title" id="business_branding">
                    {business_branding}
                  </h4>
                  <p className="text-icon__text" id="sub_business_branding">
                    {sub_business_branding}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-4 vc_col-md-6 vc_col-xs-12">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div
              className=" vc_custom_1553684400191 small-shadow text-icon text-icon--icon-left_position animated  boxes  clearfix"
              data-animated="fadeInUp"
              style={{ minHeight: 220 }}
            >
              <div className="text-icon__container   ">
                <div className="text-icon__icon-box">
                  <img src={require('../../../images/Vault.svg')} alt="icon" />
                </div>
                <div className="text-icon__content-box">
                  <h4 className="text-icon__title" id="business_development">
                    {business_development}
                  </h4>
                  <p className="text-icon__text" id="sub_business_development">
                    {sub_business_development}
                  </p>
                </div>
              </div>
            </div>
            <div
              className=" vc_custom_1553684411949 small-shadow text-icon text-icon--icon-left_position animated  boxes  clearfix"
              data-animated="fadeInUp"
              style={{ minHeight: 220 }}
            >
              <div className="text-icon__container   ">
                <div className="text-icon__icon-box">
                  <img
                    src={require('../../../images/Diploma.svg')}
                    alt="icon"
                  />
                </div>
                <div className="text-icon__content-box">
                  <h4 className="text-icon__title" id="business_ecommerce">
                    {business_ecommerce}
                  </h4>
                  <p className="text-icon__text" id="sub_business_ecommerce">
                    {sub_business_ecommerce}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-4 vc_col-md-6 vc_col-xs-12">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div
              className=" vc_custom_1553684400191 small-shadow text-icon text-icon--icon-left_position animated  boxes  clearfix"
              data-animated="fadeInUp"
              style={{ minHeight: 220 }}
            >
              <div className="text-icon__container   ">
                <div className="text-icon__icon-box">
                  <img
                    src={require('../../../images/Handshake-1.svg')}
                    alt="icon"
                  />
                </div>
                <div className="text-icon__content-box">
                  <h4 className="text-icon__title" id="business_marketing">
                    {business_marketing}
                  </h4>
                  <p className="text-icon__text" id="sub_business_marketing">
                    {sub_business_marketing}
                  </p>
                </div>
              </div>
            </div>
            <div
              className=" vc_custom_1553684411949 small-shadow text-icon text-icon--icon-left_position animated  boxes  clearfix"
              data-animated="fadeInUp"
              style={{ minHeight: 220 }}
            >
              <div className="text-icon__container   ">
                <div className="text-icon__icon-box">
                  <img
                    src={require('../../../images/Certificate.svg')}
                    alt="icon"
                  />
                </div>
                <div className="text-icon__content-box">
                  <h4 className="text-icon__title" id="business_seo">
                    {business_seo}
                  </h4>
                  <p className="text-icon__text" id="sub_business_seo">
                    {sub_business_seo}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wpb_column vc_column_container vc_col-sm-12">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div
              className="wd_empty_space"
              data-heightmobile={20}
              data-heighttablet={20}
              data-heightdesktop={259}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
