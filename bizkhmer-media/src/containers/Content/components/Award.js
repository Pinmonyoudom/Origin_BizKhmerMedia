import React from 'react';

export default function Award(props) {
  const {
    award,
    request_quote,
    sub_award,
    award_marketing,
    sub_award_marketing,
    award_development,
    sub_award_development,
    award_web_design,
    sub_award_web_design,
    award_seo,
    sub_award_seo
  } = props.content;

  return (
    <div
      data-vc-full-width="true"
      data-vc-full-width-init="false"
      data-animation-delay={300}
      className="vc_row wpb_row vc_row-fluid bg-creative vc_custom_1551280529841 vc_row-has-fill"
    >
      <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-4 vc_col-md-12 vc_col-xs-12">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div
              className="wd_empty_space"
              data-heightmobile={20}
              data-heighttablet={20}
              data-heightdesktop={20}
            />
            <div
              className="wd-heading text-left  animated  "
              style={{ maxWidth: '420px' }}
              data-animated="fadeInUp"
            >
              <h3 style={{ margin: 0 }} className="title_b" id="award">
                {award}
              </h3>
              <hr
                className="hr_b"
                style={{
                  margin: '22px 0 0 0',
                  borderBottomColor: 'rgba(255,255,255,0.01)'
                }}
              />
              <p style={{}} className="sub_title_b" id="sub_award">
                {sub_award}
              </p>
            </div>
            <div
              className="wd_empty_space"
              data-heightmobile={20}
              data-heighttablet={20}
              data-heightdesktop={40}
            />
            <div className="wd-btn-wrap text-left ">
              <a
                id="request_quote"
                className="wd-btn btn-solid btn-color-2 hover-color-1 btn-small btn-round  icon-after"
              >
                {request_quote}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-4 vc_col-md-12 vc_col-xs-12">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div
              className=" vc_custom_1556561870801 small-shadow text-icon text-icon--icon-top_position animated  boxes  clearfix"
              data-animated="fadeInUp"
            >
              <div className="text-icon__container  center ">
                <div className="text-icon__icon-box">
                  <img
                    src={require('../../../images/Image-73.svg')}
                    alt="icon"
                  />
                </div>
                <div className="text-icon__content-box">
                  <h4 className="text-icon__title" id="award_development">
                    {award_development}
                  </h4>
                  <p className="text-icon__text" id="sub_award_development">
                    {sub_award_development}
                  </p>
                </div>
              </div>
            </div>
            <div
              className=" vc_custom_1556562578279 small-shadow text-icon text-icon--icon-top_position animated  boxes  clearfix"
              data-animated="fadeInUp"
            >
              <div className="text-icon__container  center ">
                <div className="text-icon__icon-box">
                  <img
                    src={require('../../../images/Image-75.svg')}
                    alt="icon"
                  />
                </div>
                <div className="text-icon__content-box">
                  <h4 className="text-icon__title" id="award_marketing">
                    {award_marketing}
                  </h4>
                  <p className="text-icon__text" id="sub_award_marketing">
                    {sub_award_marketing}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-4 vc_col-md-12 vc_col-xs-12">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div
              className=" vc_custom_1556562562806 small-shadow text-icon text-icon--icon-top_position animated  boxes  clearfix"
              data-animated="fadeInUp"
            >
              <div className="text-icon__container  center ">
                <div className="text-icon__icon-box">
                  <img
                    src={require('../../../images/Image-76.svg')}
                    alt="icon"
                  />
                </div>
                <div className="text-icon__content-box">
                  <h4 className="text-icon__title" id="award_web_design">
                    {award_web_design}
                  </h4>
                  <p className="text-icon__text" id="sub_award_web_design">
                    {sub_award_web_design}
                  </p>
                </div>
              </div>
            </div>
            <div
              className=" vc_custom_1556562592823 small-shadow text-icon text-icon--icon-top_position animated  boxes  clearfix"
              data-animated="fadeInUp"
            >
              <div className="text-icon__container  center ">
                <div className="text-icon__icon-box">
                  <img
                    src={require('../../../images/Group-937.svg')}
                    alt="icon"
                  />
                </div>
                <div className="text-icon__content-box">
                  <h4 className="text-icon__title" id="award_seo">
                    {award_seo}
                  </h4>
                  <p className="text-icon__text" id="sub_award_seo">
                    {sub_award_seo}
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
              data-heighttablet={50}
              data-heightdesktop={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
