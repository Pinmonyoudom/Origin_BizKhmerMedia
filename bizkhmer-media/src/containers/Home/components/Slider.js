import React from 'react';
import TypingWriting from './TypingWriting';

const Caption = props => {
  const {
    id,
    caption,
    sub_caption,
    facebook_link,
    instagram_link,
    twitter_link,
    linkedin_link
  } = props.content;
  let typings = [];
  if (caption) {
    typings = caption.split('<break>');
  }

  return (
    <div className="wpb_column vc_column_container vc_col-sm-12">
      <div className="vc_column-inner">
        <div className="wpb_wrapper">
          <div
            className="forcefullwidth_wrapper_tp_banner"
            id="rev_slider_1_1_forcefullwidth"
            style={{
              position: 'relative',
              width: '100%',
              height: 'auto',
              marginTop: '0px',
              marginBottom: '0px'
            }}
          >
            <div
              id="rev_slider_1_1_wrapper"
              className="rev_slider_wrapper fullwidthbanner-container"
              data-source="gallery"
              style={{
                margin: '0px auto',
                background: 'transparent',
                padding: '0px',
                marginTop: '0px',
                marginBottom: '0px'
              }}
            >
              <div
                id="rev_slider_1_1"
                className="rev_slider fullwidthabanner"
                style={{ display: 'none' }}
                data-version="5.4.8.2"
              >
                <ul>
                  <li
                    data-index="rs-9"
                    data-transition="fade"
                    data-slotamount="default"
                    data-hideafterloop={0}
                    data-hideslideonmobile="off"
                    data-easein="default"
                    data-easeout="default"
                    data-masterspeed={300}
                    data-thumb
                    data-rotate={0}
                    data-saveperformance="off"
                    data-title="Slide"
                    data-param1
                    data-param2
                    data-param3
                    data-param4
                    data-param5
                    data-param6
                    data-param7
                    data-param8
                    data-param9
                    data-param10
                    data-description
                  >
                    {/* MAIN IMAGE */}
                    <img
                      src={require('../../../images/transparent.png')}
                      data-bgcolor="#f3f5f8"
                      style={{ background: '#f3f5f8' }}
                      alt="slider-1"
                      title="slide-1"
                      width={1920}
                      height={960}
                      data-bgposition="center center"
                      data-bgfit="cover"
                      data-bgrepeat="no-repeat"
                      data-bgparallax="off"
                      className="rev-slidebg"
                      data-no-retina
                    />
                    <div
                      className="tp-caption   tp-resizeme rs-parallaxlevel-1"
                      id="slide-9-layer-5"
                      data-x="['left','left','center','center']"
                      data-hoffset="['472','487','113','0']"
                      data-y="['top','top','top','top']"
                      data-voffset="['145','262','263','460']"
                      data-width="none"
                      data-height="none"
                      data-whitespace="nowrap"
                      data-type="image"
                      data-responsive_offset="on"
                      data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-paddingtop="[0,0,0,0]"
                      data-paddingright="[0,0,0,0]"
                      data-paddingbottom="[0,0,0,0]"
                      data-paddingleft="[0,0,0,0]"
                      style={{ zIndex: 5 }}
                    >
                      <img
                        src={require('../../../images/slide-img.png')}
                        alt={'slider 2'}
                        data-ww="['1102px','714px','618px','355px']"
                        data-hh="['804px','521px','451px','260px']"
                        width={888}
                        height={649}
                        data-no-retina
                      />{' '}
                    </div>
                    <div
                      className="tp-caption   tp-resizeme rs-parallaxlevel-3"
                      id="slide-9-layer-7"
                      data-x="['left','left','left','left']"
                      data-hoffset="['681','682','682','682']"
                      data-y="['top','top','top','top']"
                      data-voffset="['-29','-144','-144','-144']"
                      data-width="none"
                      data-height="none"
                      data-whitespace="nowrap"
                      data-type="image"
                      data-responsive_offset="on"
                      data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-paddingtop="[0,0,0,0]"
                      data-paddingright="[0,0,0,0]"
                      data-paddingbottom="[0,0,0,0]"
                      data-paddingleft="[0,0,0,0]"
                      style={{ zIndex: 6 }}
                    >
                      <img
                        src={require('../../../images/Image-52.png')}
                        alt={'slider 2'}
                        data-ww="['120px','120px','120px','120px']"
                        data-hh="['347px','347px','347px','347px']"
                        width={120}
                        height={347}
                        data-no-retina
                      />{' '}
                    </div>
                    {/* LAYER NR. 3 */}
                    <div
                      className="tp-caption   tp-resizeme rs-parallaxlevel-2"
                      id="slide-9-layer-8"
                      data-x="['left','left','left','left']"
                      data-hoffset="['525','527','527','527']"
                      data-y="['top','top','top','top']"
                      data-voffset="['-113','-204','-204','-204']"
                      data-width="none"
                      data-height="none"
                      data-whitespace="nowrap"
                      data-type="image"
                      data-responsive_offset="on"
                      data-frames="[{&quot;delay&quot;:20,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
                      data-textalign="['inherit','inherit','inherit','inherit']"
                      data-paddingtop="[0,0,0,0]"
                      data-paddingright="[0,0,0,0]"
                      data-paddingbottom="[0,0,0,0]"
                      data-paddingleft="[0,0,0,0]"
                      style={{ zIndex: 7 }}
                    >
                      <img
                        src={require('../../../images/Image-52.png')}
                        alt={'slider-2'}
                        data-ww="['120px','120px','120px','120px']"
                        data-hh="['347px','347px','347px','347px']"
                        width={120}
                        height={347}
                        data-no-retina
                      />{' '}
                    </div>
                    {/* LAYER NR. 4 */}
                    <div
                      className="tp-caption   tp-resizeme rs-parallaxlevel-2"
                      id="slide-9-layer-1 editor-caption"
                      data-x="['left','left','center','center']"
                      data-hoffset="['53','50','0','0']"
                      data-y="['top','top','top','top']"
                      data-voffset="['335','194','60','67']"
                      data-fontsize="['58','50','38','38']"
                      data-lineheight="['73','64','50','50']"
                      data-width="['793','776','650','426']"
                      data-height="['none','none','222','none']"
                      data-whitespace="normal"
                      data-type="text"
                      data-responsive_offset="on"
                      data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:1200,&quot;sfxcolor&quot;:&quot;#162466&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
                      data-textalign="['inherit','inherit','inherit','center']"
                      data-paddingtop="[0,0,0,0]"
                      data-paddingright="[0,0,0,0]"
                      data-paddingbottom="[0,0,0,0]"
                      data-paddingleft="[0,0,0,0]"
                      style={{
                        zIndex: 8,
                        minWidth: '793px',
                        maxWidth: '793px',
                        whiteSpace: 'normal',
                        fontSize: '58px',
                        lineHeight: '73px',
                        fontWeight: 600,
                        color: '#162466',
                        letterSpacing: '0px',
                        fontFamily: 'Poppins'
                      }}
                    >
                      <div id="caption">
                        {typings.length && (
                          <TypingWriting
                            options={{
                              strings: typings,
                              autoStart: true,
                              loop: true
                            }}
                          />
                        )}
                      </div>
                    </div>
                    <div
                      className="tp-caption   tp-resizeme rs-parallaxlevel-3"
                      id="slide-9-layer-2"
                      data-x="['left','left','left','center']"
                      data-hoffset="['52','50','70','0']"
                      data-y="['top','top','top','top']"
                      data-voffset="['575','425','233','289']"
                      data-width="['587','587','587','424']"
                      data-height="none"
                      data-whitespace="normal"
                      data-type="text"
                      data-responsive_offset="on"
                      data-frames="[{&quot;delay&quot;:1020,&quot;speed&quot;:1200,&quot;sfxcolor&quot;:&quot;#162466&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
                      data-textalign="['inherit','inherit','inherit','center']"
                      data-paddingtop="[0,0,0,0]"
                      data-paddingright="[0,0,0,0]"
                      data-paddingbottom="[0,0,0,0]"
                      data-paddingleft="[0,0,0,0]"
                      style={{
                        zIndex: 9,
                        minWidth: '587px',
                        maxWidth: '587px',
                        whiteSpace: 'normal',
                        fontSize: '18px',
                        lineHeight: '32px',
                        fontWeight: 400,
                        color: 'rgba(22,36,102,0.67)',
                        letterSpacing: '0px',
                        fontFamily: 'Poppins'
                      }}
                    >
                      <p id="sub-caption">{sub_caption}</p>
                    </div>
                    {/* LAYER NR. 6 */}
                  </li>
                </ul>
                <div style={{}} className="tp-static-layers">
                  {/* LAYER NR. 7 */}
                  <div
                    className="tp-caption   tp-resizeme tp-static-layer"
                    id="slider-1-layer-11"
                    data-x="['left','left','left','left']"
                    data-hoffset="['-33','-33','-33','-33']"
                    data-y="['middle','middle','middle','middle']"
                    data-voffset="['0','0','0','0']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-visibility="['on','off','off','off']"
                    data-type="text"
                    data-responsive_offset="on"
                    data-startslide={0}
                    data-endslide={0}
                    data-frames="[{&quot;delay&quot;:0,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
                    data-textalign="['inherit','inherit','inherit','inherit']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: 17,
                      whiteSpace: 'nowrap',
                      fontSize: '20px',
                      lineHeight: '22px',
                      fontWeight: 400,
                      color: '#ffffff',
                      letterSpacing: '0px',
                      fontFamily: 'Open Sans'
                    }}
                  >
                    <ul className="social-icons">
                      <li>
                        <a href={facebook_link} target="_blank">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href={linkedin_link} target="_blank">
                          <i className="fab fa-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href={instagram_link} target="_blank">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href={twitter_link} target="_blank">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="tp-bannertimer tp-bottom"
                  style={{
                    height: '5px',
                    background: 'rgba(255,58,45,1)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caption;
