import React from 'react';

export default function MobileFeedback(props) {
  const { mobile_feedback, sub_mobile_feedback } = props.content;

  return (
    <div
      data-vc-full-width="true"
      data-vc-full-width-init="false"
      data-animation-delay={300}
      className="vc_row wpb_row vc_row-fluid overflow-visible vc_custom_1550244924984 vc_row-has-fill"
    >
      <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-12 vc_col-xs-12">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div
              className="wd_empty_space"
              data-heightmobile={130}
              data-heighttablet={0}
              data-heightdesktop={0}
            />
            <div className="wpb_single_image wpb_content_element vc_align_center  wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp  moved-down-img-1">
              <figure className="wpb_wrapper vc_figure">
                <div className="vc_single_image-wrapper   vc_box_border_grey">
                  <img
                    width={521}
                    height={882}
                    src={require('../../../images/iPhone_X.png')}
                    className="vc_single_image-img attachment-full"
                    alt="hello"
                    sizes="(max-width: 521px) 100vw, 521px"
                  />
                </div>
              </figure>
            </div>
            <div className="wpb_single_image wpb_content_element vc_align_center  wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp  moved-down-img-2">
              <figure className="wpb_wrapper vc_figure">
                <div className="vc_single_image-wrapper   vc_box_border_grey">
                  <img
                    width={521}
                    height={882}
                    src={require('../../../images/iPhone_X.png')}
                    className="vc_single_image-img attachment-full"
                    alt="hello"
                    sizes="(max-width: 521px) 100vw, 521px"
                  />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-12 vc_col-xs-12">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div
              className="wd_empty_space"
              data-heightmobile={50}
              data-heighttablet={70}
              data-heightdesktop={83}
            />
            <div
              className="wd-heading text-left  animated  "
              style={{ maxWidth: '100%' }}
              data-animated="fadeInUp"
            >
              <h3
                style={{ margin: 0, color: '#ffffff' }}
                className="title_b"
                id="mobile_feedback"
              >
                {mobile_feedback}
              </h3>
              <hr
                className="hr_b"
                style={{
                  margin: '0 0 16px',
                  borderBottomColor: 'rgba(255,255,255,0.01)'
                }}
              />
              <h4
                style={{ color: '#ffffff' }}
                className="sub_title_b"
                id="sub_mobile_feedback"
              >
                {sub_mobile_feedback}
              </h4>
            </div>
            <div
              className="wd_empty_space"
              data-heightmobile={35}
              data-heighttablet={10}
              data-heightdesktop={10}
            />
            <div
              className="wd-video-box-bg wpb_video_widget wpb_content_element vc_clearfix   vc_video-aspect-ratio- vc_video-el-width- vc_video-align-"
              style={{
                background: 'url() center center no-repeat',
                backgroundSize: 'cover'
              }}
            >
              <div className="wpb_wrapper">
                <div
                  className="wd-video-box"
                  style={{
                    minHeight: '100px',
                    minWidth: '100px'
                  }}
                >
                  <div className="full_screen_video_wrapper  text-left">
                    <a
                      href="#"
                      data-toggle="modal5d14495505c8d"
                      data-reveal-id="modal5d14495505c8d"
                      className="play popup1_open"
                    >
                      <i
                        style={{
                          background: '#ffffff',
                          color: '#111e44'
                        }}
                        className="fa fa-play fa-1x"
                      />
                      <span>Watch How it Works</span>
                      <div className="playvideo_animation" />
                      <div
                        className="playvideo_animation"
                        style={{ animationDelay: '.4s' }}
                      />
                      <div
                        className="playvideo_animation"
                        style={{ animationDelay: '.6s' }}
                      />
                    </a>
                    <div
                      className="medium reveal"
                      id="modal5d14495505c8d"
                      data-reveal
                      data-reset-on-close="true"
                      data-animation-in="fade-in"
                      data-animation-out="fade-out"
                    >
                      <div className="flex-video widescreen vimeo">
                        <iframe
                          width={1280}
                          height={720}
                          src="https://www.youtube.com/embed/v9nBysHSzhE?rel=0&controls=0&showinfo=0"
                          allowFullScreen
                        />
                      </div>
                      <a
                        className="close-button"
                        data-close
                        aria-label="Close reveal"
                      >
                        ×
                      </a>
                    </div>
                    <div className="clearfix" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="wd_empty_space"
              data-heightmobile={10}
              data-heighttablet={0}
              data-heightdesktop={0}
            />
            <div className="vc_row wpb_row vc_inner vc_row-fluid">
              <div className="wpb_column vc_column_container vc_col-sm-4">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wd-btn-wrap text-left ">
                      <a
                        href="#"
                        className="wd-btn btn-solid btn-color-5 hover-color-1 btn-medium btn-round  icon-before"
                      >
                        <span className="button-wrp">
                          <i className="fa fa-apple before" />
                          <span>Apple Store</span>
                        </span>
                      </a>
                    </div>
                    <div
                      className="wd_empty_space"
                      data-heightmobile={20}
                      data-heighttablet={0}
                      data-heightdesktop={0}
                    />
                  </div>
                </div>
              </div>
              <div className="wpb_column vc_column_container vc_col-sm-8">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wd-btn-wrap text-left ">
                      <a
                        href="#"
                        className="wd-btn btn-solid btn-color-5 hover-color-1 btn-medium btn-round  icon-before"
                      >
                        <span className="button-wrp">
                          <i className="fa fa-android before" />
                          <span>Google Play</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="wd_empty_space"
              data-heightmobile={100}
              data-heighttablet={50}
              data-heightdesktop={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
