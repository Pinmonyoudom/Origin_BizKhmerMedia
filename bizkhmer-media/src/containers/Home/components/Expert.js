import React from 'react';

export default function Expert(props) {
  const { expert_title, sub_expert_title, teams } = props.content;
  let data = [];
  if (teams) {
    data = JSON.parse(teams);
  }

  return (
    <div
      data-animation-delay={300}
      className="vc_row wpb_row vc_row-fluid"
      id="team-element"
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
              data-heightmobile={0}
              data-heighttablet={0}
              data-heightdesktop={61}
            />

            <div
              className="wd-heading text-center  "
              style={{ maxWidth: '100%', margin: '0 auto' }}
            >
              <h3 style={{ margin: 0 }} className="title_a" id="expert-title">
                {expert_title}
              </h3>
              <h4 style={{}} className="sub_title_a" id="sub-expert-title">
                {sub_expert_title}
              </h4>
            </div>
            <div
              className="wd_empty_space"
              data-heightmobile={50}
              data-heighttablet={70}
              data-heightdesktop={100}
            />
          </div>
        </div>
      </div>
      <div className="wpb_column vc_column_container vc_col-sm-3">
        <div className="vc_column-inner">
          <div className="wpb_wrapper" />
        </div>
      </div>
      <div className="wpb_column vc_column_container vc_col-sm-12">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <ul className="team-list-style3 small-up-1 medium-up-2 large-up-2 xlarge-up-4 clearfix">
              {data.sort((a, b) => a.order - b.order).map(team => {
                return (
                  <li
                    key={team.uuid}
                    className=" animated  column column-block"
                    data-animated="fadeInUp"
                  >
                    <div style={{ padding: 20, position: 'relative' }}>
                      <div
                        style={{ display: 'flex', justifyContent: 'center' }}
                      >
                        <div className="team-member__picture">
                          <img
                            width={314}
                            height={314}
                            src={
                              team.avatar && team.avatar !== ''
                                ? team.avatar
                                : require('../../../images/team-1-314x314.png')
                            }
                            className="attachment-digixon_team_style1 size-digixon_team_style1 wp-post-image"
                            alt="team-1.png"
                            sizes="(max-width: 314px) 100vw, 314px"
                          />
                        </div>
                      </div>
                      <div
                        className="team-member__info"
                        style={{ minHeight: 355 }}
                      >
                        <h5
                          className="team-member__name"
                          id="first-expert-name"
                        >
                          <span>{team.name}</span>
                        </h5>
                        <p
                          className="team-member__job"
                          id="first-expert-position"
                        >
                          <span>{team.position}</span>
                        </p>
                        <p id="first-expert-description">{team.description}</p>
                      </div>
                      <div className="team-member__socialmedia">
                        <ul>
                          <li>
                            <a href={team.fb} target="_blank">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href={team.instagram} target="_blank">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href={team.twitter} target="_blank">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
