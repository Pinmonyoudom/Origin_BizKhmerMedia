import React  from 'react';

export default function Project(props) {
  const {
    project_title,
    sub_project_title,
    project_award,
    project_award_count,
    project_project,
    project_project_count,
    project_happy_clients,
    project_happy_clients_count,
    project_up_time,
    project_up_time_count
  } = props.content;

  return (
    <div data-animation-delay={300} className="vc_row wpb_row vc_row-fluid">
      <div className="wpb_column vc_column_container vc_col-sm-12">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div className="vc_row wpb_row vc_inner vc_row-fluid">
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
                      data-heightdesktop={60}
                    />
                    <div
                      className="wd-heading text-center  "
                      style={{
                        maxWidth: '100%',
                        margin: '0 auto'
                      }}
                    >
                      <h2
                        style={{ margin: 0 }}
                        className="title_a"
                        id="project"
                      >
                        {project_title}
                      </h2>
                      <hr
                        className="hr_a"
                        style={{
                          margin: '0 0 8px',
                          borderBottomColor: 'rgba(255,255,255,0.01)'
                        }}
                      />
                      <div id="editor">
                        <h4 className="sub_title_a" id="sub-project">
                          {sub_project_title}
                        </h4>
                      </div>
                    </div>
                    <div
                      className="wd_empty_space"
                      data-heightmobile={20}
                      data-heighttablet={30}
                      data-heightdesktop={80}
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
            <div className="vc_row wpb_row vc_inner vc_row-fluid">
              <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-3 vc_col-md-3 vc_col-xs-6">
                <div className="vc_column-inner vc_custom_1553094850936">
                  <div className="wpb_wrapper">
                    <div
                      className="wd-count-up  animated "
                      data-animated="fadeInUp"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width={127}
                        height={131}
                        viewBox="0 0 127 131"
                      >
                        <defs>
                          <style
                            dangerouslySetInnerHTML={{
                              __html:
                                '\n                                                                            .cls-1 {\n                                                                                fill: #ff3b33;\n                                                                            }\n\n                                                                            .cls-2 {\n                                                                                fill: #162466;\n                                                                            }\n\n                                                                            .cls-3 {\n                                                                                fill: none;\n                                                                                stroke: #fff;\n                                                                                stroke-linecap: round;\n                                                                                stroke-linejoin: round;\n                                                                                stroke-miterlimit: 10;\n                                                                                stroke-width: 2px;\n                                                                            }\n\n                                                                            .cls-4 {\n                                                                                filter: url(#Rectangle_619);\n                                                                            }\n                                                                        '
                            }}
                          />
                          <filter
                            id="Rectangle_619"
                            x={0}
                            y={0}
                            width={127}
                            height={131}
                            filterUnits="userSpaceOnUse"
                          >
                            <feOffset dy={20} input="SourceAlpha" />
                            <feGaussianBlur stdDeviation={10} result="blur" />
                            <feFlood floodOpacity="0.2" />
                            <feComposite operator="in" in2="blur" />
                            <feComposite in="SourceGraphic" />
                          </filter>
                        </defs>
                        <g
                          id="Group_933"
                          data-name="Group 933"
                          transform="translate(-342 -8442)"
                        >
                          <circle
                            id="Ellipse_543"
                            data-name="Ellipse 543"
                            className="cls-1"
                            cx="26.5"
                            cy="26.5"
                            r="26.5"
                            transform="translate(352 8484)"
                          />
                          <g
                            className="cls-4"
                            transform="matrix(1, 0, 0, 1, 342, 8442)"
                          >
                            <rect
                              id="Rectangle_619-2"
                              data-name="Rectangle 619"
                              className="cls-2"
                              width={67}
                              height={71}
                              rx={6}
                              transform="translate(30 10)"
                            />
                          </g>
                          <g
                            id="champion-2842_fcb453b6-d2d7-4d18-b67f-ecc793150b3f"
                            transform="translate(384 8474)"
                          >
                            <rect
                              id="layer2"
                              className="cls-3"
                              width="19.8"
                              height="8.8"
                              rx={2}
                              transform="translate(11.6 21.2)"
                            />
                            <path
                              id="layer2-2"
                              data-name="layer2"
                              className="cls-3"
                              d="M24,45h8.8m-4.4-4.4V34"
                              transform="translate(-6.9 -19.4)"
                            />
                            <path
                              id="layer1"
                              className="cls-3"
                              d="M9.7,5.1C7.335,3.063,2,3.668,2,8.4s3.3,8.8,10.34,9.68M27.3,5.1C29.665,3.063,35,3.668,35,8.4s-3.3,8.8-10.34,9.68"
                              transform="translate(3 -5.898)"
                            />
                            <path
                              id="layer1-2"
                              data-name="layer1"
                              className="cls-3"
                              d="M24.8,19.6c6.6,0,8.8-5.5,8.8-9.79V2H16V9.7C16,14.1,18.2,19.6,24.8,19.6Z"
                              transform="translate(-3.3 -5)"
                            />
                          </g>
                        </g>
                      </svg>
                      <h3
                        className="wd-count-up__counter"
                        data-file={1024}
                        id="project-award-count"
                      >
                        {project_award_count}
                      </h3>
                      <h4 className="wd-count-up__title" id="project-award">
                        {project_award}
                      </h4>
                    </div>
                    <div
                      className="wd_empty_space"
                      data-heightmobile={40}
                      data-heighttablet={20}
                      data-heightdesktop={0}
                    />
                  </div>
                </div>
              </div>
              <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-3 vc_col-md-3 vc_col-xs-6">
                <div className="vc_column-inner vc_custom_1553094904827">
                  <div className="wpb_wrapper">
                    <div
                      className="wd-count-up  animated "
                      data-animated="fadeInUp"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width={127}
                        height={131}
                        viewBox="0 0 127 131"
                      >
                        <defs>
                          <style
                            dangerouslySetInnerHTML={{
                              __html:
                                '\n                                                                            .cls-1 {\n                                                                                fill: #ff3b33;\n                                                                            }\n\n                                                                            .cls-2 {\n                                                                                fill: #162466;\n                                                                            }\n\n                                                                            .cls-3 {\n                                                                                fill: none;\n                                                                                stroke: #fff;\n                                                                                stroke-linecap: round;\n                                                                                stroke-linejoin: round;\n                                                                                stroke-miterlimit: 10;\n                                                                                stroke-width: 2px;\n                                                                            }\n\n                                                                            .cls-4 {\n                                                                                filter: url(#Rectangle_619);\n                                                                            }\n                                                                        '
                            }}
                          />
                          <filter
                            id="Rectangle_619"
                            x={0}
                            y={0}
                            width={127}
                            height={131}
                            filterUnits="userSpaceOnUse"
                          >
                            <feOffset dy={20} input="SourceAlpha" />
                            <feGaussianBlur stdDeviation={10} result="blur" />
                            <feFlood floodOpacity="0.122" />
                            <feComposite operator="in" in2="blur" />
                            <feComposite in="SourceGraphic" />
                          </filter>
                        </defs>
                        <g
                          id="Group_934"
                          data-name="Group 934"
                          transform="translate(-332 -8435)"
                        >
                          <circle
                            id="Ellipse_543"
                            data-name="Ellipse 543"
                            className="cls-1"
                            cx="26.5"
                            cy="26.5"
                            r="26.5"
                            transform="translate(342 8477)"
                          />
                          <g
                            className="cls-4"
                            transform="matrix(1, 0, 0, 1, 332, 8435)"
                          >
                            <rect
                              id="Rectangle_619-2"
                              data-name="Rectangle 619"
                              className="cls-2"
                              width={67}
                              height={71}
                              rx={6}
                              transform="translate(30 10)"
                            />
                          </g>
                          <g
                            id="spacecraft-3240_6a607206-a24b-4dbf-90db-0994df49b8c2"
                            transform="translate(371.8 8458.5)"
                          >
                            <circle
                              id="layer1"
                              className="cls-3"
                              cx="2.533"
                              cy="2.533"
                              r="2.533"
                              transform="translate(20.667 12.133)"
                            />
                            <path
                              id="layer2"
                              className="cls-3"
                              d="M16.867,17.2H14.9a1.837,1.837,0,0,0-1.837,1.837v7.727a1.837,1.837,0,0,1-1.52,1.837H9.837A1.837,1.837,0,0,0,8,30.437v7.03h5.067M29.533,17.2H31.5a1.837,1.837,0,0,1,1.837,1.837v7.727a1.837,1.837,0,0,0,1.52,1.837H36.5a1.837,1.837,0,0,1,1.9,1.837v7.03H33.333m-12.667,0h5.067m3.8-3.8V13.273C29.533,6.37,23.2,2,23.2,2s-6.333,4.37-6.333,11.273V33.667"
                            />
                            <path
                              id="layer1-2"
                              data-name="layer1"
                              className="cls-3"
                              d="M23.6,58.333V55.8a3.8,3.8,0,0,0-7.6,0v2.533Zm12.667,0V55.8a3.8,3.8,0,0,0-7.6,0v2.533Z"
                              transform="translate(-2.933 -18.333)"
                            />
                          </g>
                        </g>
                      </svg>
                      <h3
                        className="wd-count-up__counter"
                        data-file={24}
                        id="project-project-count"
                      >
                        {project_project_count}
                      </h3>
                      <h4 className="wd-count-up__title" id="project-project">
                        {project_project}
                      </h4>
                    </div>
                    <div
                      className="wd_empty_space"
                      data-heightmobile={40}
                      data-heighttablet={20}
                      data-heightdesktop={0}
                    />
                  </div>
                </div>
              </div>
              <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-3 vc_col-md-3 vc_col-xs-6">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div
                      className="wd-count-up  animated "
                      data-animated="fadeInUp"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width={127}
                        height={131}
                        viewBox="0 0 127 131"
                      >
                        <defs>
                          <style
                            dangerouslySetInnerHTML={{
                              __html:
                                '\n                                                                            .cls-1 {\n                                                                                fill: #ff3b33;\n                                                                            }\n\n                                                                            .cls-2 {\n                                                                                fill: #162466;\n                                                                            }\n\n                                                                            .cls-3 {\n                                                                                fill: none;\n                                                                                stroke: #fff;\n                                                                                stroke-linecap: round;\n                                                                                stroke-linejoin: round;\n                                                                                stroke-miterlimit: 10;\n                                                                                stroke-width: 2px;\n                                                                            }\n\n                                                                            .cls-4 {\n                                                                                filter: url(#Rectangle_643);\n                                                                            }\n                                                                        '
                            }}
                          />
                          <filter
                            id="Rectangle_643"
                            x={0}
                            y={0}
                            width={127}
                            height={131}
                            filterUnits="userSpaceOnUse"
                          >
                            <feOffset dy={20} input="SourceAlpha" />
                            <feGaussianBlur stdDeviation={10} result="blur" />
                            <feFlood floodOpacity="0.122" />
                            <feComposite operator="in" in2="blur" />
                            <feComposite in="SourceGraphic" />
                          </filter>
                        </defs>
                        <g
                          id="Group_935"
                          data-name="Group 935"
                          transform="translate(-608 -8433)"
                        >
                          <circle
                            id="Ellipse_597"
                            data-name="Ellipse 597"
                            className="cls-1"
                            cx="26.5"
                            cy="26.5"
                            r="26.5"
                            transform="translate(618 8475)"
                          />
                          <g
                            className="cls-4"
                            transform="matrix(1, 0, 0, 1, 608, 8433)"
                          >
                            <rect
                              id="Rectangle_643-2"
                              data-name="Rectangle 643"
                              className="cls-2"
                              width={67}
                              height={71}
                              rx={6}
                              transform="translate(30 10)"
                            />
                          </g>
                          <g
                            id="team-2715_cef8922e-7aa0-4ddd-96a7-34fde8bdc608"
                            transform="translate(648.949 8454.161)"
                          >
                            <path
                              id="layer2"
                              className="cls-3"
                              d="M30,29.051a25.753,25.753,0,0,0,4.21-.982c2.175-.772,2.105-1.895,2.105-2.526v-1.4M35.754,9.4A6.245,6.245,0,0,1,39.824,8c2.807,0,6.315,1.684,6.315,6.035V18.1a8,8,0,0,1-2.807,6.035v1.333c0,.842-.07,2.316,4.14,3.158a6.313,6.313,0,0,1,4.982,4.631v2.807H45.437"
                              transform="translate(-8.352 0)"
                            />
                            <path
                              id="layer1"
                              className="cls-3"
                              d="M26.84,33.191c-5.263-.7-5.193-2.6-5.193-3.579V28c1.895-1.684,2.807-4.491,2.807-7.649V15.438C24.455,10.105,20.876,8,17.437,8s-7.017,2.105-7.017,7.438V20.35c0,3.158.912,6.035,2.807,7.719v1.684c0,1.053.07,2.737-5.193,3.438A7.039,7.039,0,0,0,2,38.875v2.807H32.875V38.875S32.875,34.1,26.84,33.191Z"
                              transform="translate(0 -0.001)"
                            />
                          </g>
                        </g>
                      </svg>
                      <h3
                        className="wd-count-up__counter"
                        data-file={1024}
                        id="project-happy-clients-count"
                      >
                        {project_happy_clients_count}
                      </h3>
                      <h4
                        className="wd-count-up__title"
                        id="project-happy-clients"
                      >
                        {project_happy_clients}
                      </h4>
                    </div>
                    <div
                      className="wd_empty_space"
                      data-heightmobile={40}
                      data-heighttablet={20}
                      data-heightdesktop={0}
                    />
                  </div>
                </div>
              </div>
              <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-3 vc_col-md-3 vc_col-xs-6">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div
                      className="wd-count-up  animated "
                      data-animated="fadeInUp"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width={127}
                        height={131}
                        viewBox="0 0 127 131"
                      >
                        <defs>
                          <style
                            dangerouslySetInnerHTML={{
                              __html:
                                '\n                                                                            .cls-1 {\n                                                                                fill: #ff3b33;\n                                                                            }\n\n                                                                            .cls-2 {\n                                                                                fill: #162466;\n                                                                            }\n\n                                                                            .cls-3 {\n                                                                                fill: none;\n                                                                                stroke: #fff;\n                                                                                stroke-linecap: round;\n                                                                                stroke-linejoin: round;\n                                                                                stroke-miterlimit: 10;\n                                                                                stroke-width: 2px;\n                                                                            }\n\n                                                                            .cls-4 {\n                                                                                filter: url(#Rectangle_644);\n                                                                            }\n                                                                        '
                            }}
                          />
                          <filter
                            id="Rectangle_644"
                            x={0}
                            y={0}
                            width={127}
                            height={131}
                            filterUnits="userSpaceOnUse"
                          >
                            <feOffset dy={20} input="SourceAlpha" />
                            <feGaussianBlur stdDeviation={10} result="blur" />
                            <feFlood floodOpacity="0.122" />
                            <feComposite operator="in" in2="blur" />
                            <feComposite in="SourceGraphic" />
                          </filter>
                        </defs>
                        <g
                          id="Group_936"
                          data-name="Group 936"
                          transform="translate(-590.033 -8433.033)"
                        >
                          <circle
                            id="Ellipse_598"
                            data-name="Ellipse 598"
                            className="cls-1"
                            cx="26.5"
                            cy="26.5"
                            r="26.5"
                            transform="translate(600.033 8475.033)"
                          />
                          <g
                            className="cls-4"
                            transform="matrix(1, 0, 0, 1, 590.03, 8433.03)"
                          >
                            <rect
                              id="Rectangle_644-2"
                              data-name="Rectangle 644"
                              className="cls-2"
                              width={67}
                              height={71}
                              rx={6}
                              transform="translate(30 10)"
                            />
                          </g>
                          <g
                            id="safe-2291_ffa36413-4b0a-4d71-b890-8c672e1bac8c"
                            transform="translate(634.468 8460.533)"
                          >
                            <rect
                              id="layer2"
                              className="cls-3"
                              width="34.87"
                              height="32.545"
                              rx="3.097"
                              transform="translate(2.065 2.065)"
                            />
                            <path
                              id="layer2-2"
                              data-name="layer2"
                              className="cls-3"
                              d="M10.323,59.871V62.2m25.571-2.325V62.2"
                              transform="translate(-3.609 -25.262)"
                            />
                            <path
                              id="layer1"
                              className="cls-3"
                              d="M9.42,10.323H34.991V33.569H9.42ZM8.258,16.134h2.325M8.258,27.757h2.325m5.812-5.812a6.974,6.974,0,1,1,.93,3.487"
                              transform="translate(-2.707 -3.609)"
                            />
                            <circle
                              id="layer1-2"
                              data-name="layer1"
                              className="cls-3"
                              cx="1.162"
                              cy="1.162"
                              r="1.162"
                              transform="translate(19.499 17.175)"
                            />
                            <path
                              id="layer1-3"
                              data-name="layer1"
                              className="cls-3"
                              d="M27.879,30.968h-9.3"
                              transform="translate(-7.218 -12.631)"
                            />
                          </g>
                        </g>
                      </svg>
                      <h3
                        className="wd-count-up__counter"
                        data-file="99.9"
                        id="project-up-time-count"
                      >
                        {project_up_time_count}
                      </h3>
                      <h4 className="wd-count-up__title" id="project-up-time">
                        {project_up_time}
                      </h4>
                    </div>
                    <div
                      className="wd_empty_space"
                      data-heightmobile={40}
                      data-heighttablet={20}
                      data-heightdesktop={0}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="wd_empty_space"
              data-heightmobile={30}
              data-heighttablet={30}
              data-heightdesktop={60}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
