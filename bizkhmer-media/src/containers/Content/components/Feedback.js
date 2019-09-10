import React from 'react';

export default function Feedback(props) {
  const {
    feedback,
    first_feedback,
    second_feedback,
    third_feedback,
    first_feedback_name,
    second_feedback_name,
    third_feedback_name
  } = props.content;

  return (
    <div
      data-vc-full-width="true"
      data-vc-full-width-init="false"
      data-animation-delay={300}
      className="vc_row wpb_row vc_row-fluid vc_custom_1549389375664 vc_row-has-fill"
      style={{ backgroundPosition: 'left bottom !important' }}
    >
      <div className="wpb_column vc_column_container vc_col-sm-6">
        <div className="vc_column-inner">
          <div className="wpb_wrapper" />
        </div>
      </div>
      <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-6 vc_col-xs-12 vc_col-has-fill">
        <div className="vc_column-inner vc_custom_1553098252527">
          <div className="wpb_wrapper">
            <div
              className="wd_empty_space"
              data-heightmobile={30}
              data-heighttablet={50}
              data-heightdesktop={100}
            />
            <div
              className="wd_empty_space"
              data-heightmobile={50}
              data-heighttablet={70}
              data-heightdesktop={213}
            />
            <div
              className="wd-heading text-left  "
              style={{ maxWidth: '100%' }}
            >
              <h3 style={{ margin: 0 }} className="title_a" id="feedback">
                {feedback}
              </h3>
            </div>
            <div
              className="wd_empty_space"
              data-heightmobile={50}
              data-heighttablet={70}
              data-heightdesktop={100}
            />
            <div className="testimonail-slik">
              <div className="testimonail-item">
                <div
                  className="testimonail-content row"
                  style={{ background: 'rgba(0,0,0,0)' }}
                >
                  <div className="testimonail-thumb large-3 columns">
                    <img
                      width={172}
                      height={172}
                      src={require('../../../images/team2-172x172.jpg')}
                      className="attachment-digixon__testimonial size-digixon__testimonial wp-post-image"
                      alt="hello"
                      sizes="(max-width: 172px) 100vw, 172px"
                    />{' '}
                  </div>
                  <div
                    className="contet large-9 small-12 columns"
                    style={{ color: '#718494' }}
                  >
                    <p id="first_feedback">{first_feedback}</p>
                    <h6
                      className="name"
                      style={{ color: '#718494' }}
                      id="first_feedback_name"
                    >
                      {first_feedback_name}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="testimonail-item">
                <div
                  className="testimonail-content row"
                  style={{ background: 'rgba(0,0,0,0)' }}
                >
                  <div className="testimonail-thumb large-3 columns">
                    <img
                      width={172}
                      height={172}
                      src={require('../../../images/team4-172x172.jpg')}
                      className="attachment-digixon__testimonial size-digixon__testimonial wp-post-image"
                      alt="hello"
                      sizes="(max-width: 172px) 100vw, 172px"
                    />{' '}
                  </div>
                  <div
                    className="contet large-9 small-12 columns"
                    style={{ color: '#718494' }}
                  >
                    <p id="second_feedback">{second_feedback}</p>
                    <h6
                      className="name"
                      style={{ color: '#718494' }}
                      id="second_feedback_name"
                    >
                      {second_feedback_name}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="testimonail-item">
                <div
                  className="testimonail-content row"
                  style={{ background: 'rgba(0,0,0,0)' }}
                >
                  <div className="testimonail-thumb large-3 columns">
                    <img
                      width={172}
                      height={172}
                      src={require('../../../images/team3-172x172.jpg')}
                      className="attachment-digixon__testimonial size-digixon__testimonial wp-post-image"
                      alt="hello"
                      sizes="(max-width: 172px) 100vw, 172px"
                    />{' '}
                  </div>
                  <div
                    className="contet large-9 small-12 columns"
                    style={{ color: '#718494' }}
                  >
                    <p id="third_feedback">{third_feedback}</p>
                    <h6
                      className="name"
                      style={{ color: '#718494' }}
                      id="third_feedback_name"
                    >
                      {third_feedback_name}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="wd_empty_space"
              data-heightmobile={60}
              data-heighttablet={80}
              data-heightdesktop={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
