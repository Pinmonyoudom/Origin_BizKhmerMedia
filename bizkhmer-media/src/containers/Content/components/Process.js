import React from "react";

export default function Process(props) {
  const {
    process_title,
    sub_process_title,
    process_strategy,
    sub_process_strategy_a,
    sub_process_strategy_b,
    process_make_design,
    sub_process_make_design_a,
    sub_process_make_design_b,
    process_develop,
    sub_process_develop_a,
    sub_process_develop_b,
    process_class_support,
    sub_process_class_support_a,
    sub_process_class_support_b
  } = props.content;

  return (
    <div id="process-element">
      <div
        data-vc-full-width="true"
        data-vc-full-width-init="false"
        className="vc_row wpb_row vc_row-fluid vc_custom_1550230218097 vc_row-has-fill"
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
                data-heightmobile={30}
                data-heighttablet={40}
                data-heightdesktop={140}
              />
              <div
                className="wd-heading text-center  "
                style={{ maxWidth: "100%", margin: "0 auto" }}
              >
                <h2 style={{ margin: 0 }} className="title_a" id="process_title">
                  {process_title}
                </h2>
                <p style={{}} className="sub_title_a" id="sub_process_title">
                  {sub_process_title}
                </p>
              </div>
              <div
                className="wd_empty_space"
                data-heightmobile={0}
                data-heighttablet={0}
                data-heightdesktop={0}
              />
            </div>
          </div>
        </div>
        <div className="wpb_column vc_column_container vc_col-sm-3">
          <div className="vc_column-inner">
            <div className="wpb_wrapper" />
          </div>
        </div>
      </div>
      <div className="vc_row-full-width vc_clearfix" />
      <div
        data-vc-full-width="true"
        data-vc-full-width-init="false"
        className="vc_row wpb_row vc_row-fluid vc_custom_1553875272578 vc_row-has-fill image-background-position"
      >
        <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-12 vc_col-xs-12">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div className="percentage-circle flex-wrapper">
                <div className="single-chart">
                  <svg viewBox="0 0 36 36" className="circular-chart orange">
                    <path
                      className="circle-bg"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="circle"
                      strokeDasharray="0, 100"
                      d="M18 2.0845
                        a 15 15 0 0 1 0 31.831
                        a 15 15 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="single-chart-img">
                    <img
                      src={require("../../../images/Mask-Group-33.png")}
                      className="circle-img"
                      alt="Mask-Group-33.png"
                    />
                    <img
                      src={require("../../../images/Mask-Group-34.png")}
                      className="circle-img"
                      alt="Mask-Group-34.png"
                    />
                    <img
                      src={require("../../../images/Mask-Group-35.png")}
                      className="circle-img"
                      alt="Mask-Group-35.png"
                    />
                    <img
                      src={require("../../../images/Mask-Group-331.png")}
                      className="circle-img"
                      alt="Mask-Group-331.png"
                    />{" "}
                  </div>
                  <ul className="circle-container" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mi-row-right wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-12 vc_col-xs-12">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div
                className="wd_empty_space"
                data-heightmobile={0}
                data-heighttablet={0}
                data-heightdesktop={40}
              />
              <div
                className="vc_tta-container"
                data-vc-action="collapse"
                data-vc-tta-autoplay="{delay:5000}"
              >
                <div className="vc_general vc_tta vc_tta-accordion vc_tta-color-grey vc_tta-style-flat vc_tta-shape-rounded vc_tta-o-shape-group vc_tta-controls-align-left">
                  <div className="vc_tta-panels-container">
                    <div className="vc_tta-panels">
                      <div
                        className="wd-tta-section vc_tta-panel vc_active"
                        id="1553874934034-33ab5d9b-6986"
                        data-vc-content=".vc_tta-panel-body"
                      >
                        <div className="vc_tta-panel-heading">
                          <h4 className="vc_tta-panel-title vc_tta-controls-icon-position-right">
                            <a
                              href="#1553874934034-33ab5d9b-6986"
                              data-vc-accordion
                              data-vc-container=".vc_tta-container"
                            >
                              <span className="vc_tta-title-text">
                                <p id="process_strategy">{process_strategy}</p>
                              </span>
                              <i className="vc_tta-controls-icon vc_tta-controls-icon-plus" />
                            </a>
                          </h4>
                        </div>
                        <div className="vc_tta-panel-body">
                          <div className="wpb_text_column wpb_content_element  vc_custom_1555409397545">
                            <div className="wpb_wrapper">
                              <p id="sub_process_strategy_a">{sub_process_strategy_a}</p>
                              <p id="sub_process_strategy_b">{sub_process_strategy_b}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="wd-tta-section vc_tta-panel"
                        id="1553874934500-2cb035aa-acd1"
                        data-vc-content=".vc_tta-panel-body"
                      >
                        <div className="vc_tta-panel-heading">
                          <h4 className="vc_tta-panel-title vc_tta-controls-icon-position-right">
                            <a
                              href="#1553874934500-2cb035aa-acd1"
                              data-vc-accordion
                              data-vc-container=".vc_tta-container"
                            >
                              <span className="vc_tta-title-text">
                                <p id="process_make_design">{process_make_design}</p>
                              </span>
                              <i className="vc_tta-controls-icon vc_tta-controls-icon-plus" />
                            </a>
                          </h4>
                        </div>
                        <div className="vc_tta-panel-body">
                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                              <p id="sub_process_make_design_a">{sub_process_make_design_a}</p>
                              <p id="sub_process_make_design_b">{sub_process_make_design_b}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="wd-tta-section vc_tta-panel"
                        id="1553874934878-4b4e6748-e267"
                        data-vc-content=".vc_tta-panel-body"
                      >
                        <div className="vc_tta-panel-heading">
                          <h4 className="vc_tta-panel-title vc_tta-controls-icon-position-right">
                            <a
                              href="#1553874934878-4b4e6748-e267"
                              data-vc-accordion
                              data-vc-container=".vc_tta-container"
                            >
                              <span className="vc_tta-title-text">
                                <p id="process_develop">{process_develop}</p>
                              </span>
                              <i className="vc_tta-controls-icon vc_tta-controls-icon-plus" />
                            </a>
                          </h4>
                        </div>
                        <div className="vc_tta-panel-body">
                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                              <p id="sub_process_develop_a">{sub_process_develop_a}</p>
                              <p id="sub_process_develop_b">{sub_process_develop_b}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="wd-tta-section vc_tta-panel"
                        id="1553874935425-a609e855-72eb"
                        data-vc-content=".vc_tta-panel-body"
                      >
                        <div className="vc_tta-panel-heading">
                          <h4 className="vc_tta-panel-title vc_tta-controls-icon-position-right">
                            <a
                              href="#1553874935425-a609e855-72eb"
                              data-vc-accordion
                              data-vc-container=".vc_tta-container"
                            >
                              <span className="vc_tta-title-text">
                                <p id="process_class_support">{process_class_support}</p>
                              </span>
                              <i className="vc_tta-controls-icon vc_tta-controls-icon-plus" />
                            </a>
                          </h4>
                        </div>
                        <div className="vc_tta-panel-body">
                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                              <p id="sub_process_class_support_a">{sub_process_class_support_a}</p>
                              <p id="sub_process_class_support_b">{sub_process_class_support_b}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
