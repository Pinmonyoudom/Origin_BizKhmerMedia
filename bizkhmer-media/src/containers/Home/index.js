import React, { useEffect, useState } from 'react';
import {
  Slider,
  Award,
  Marketing,
  Process,
  Business,
  Expert,
  Footer,
  Contact,
  Clients
} from './components';
import axios from 'axios';
import { Navbar } from './Navbar';
export default function Home() {
  const [clients, setClients] = useState([]);
  const [content, setContent] = useState({});
  const [language, setLangauge] = useState(
    localStorage.getItem('language') || 'en'
  );

  const contentId = {
    zh: '1asdfasdf21348ajksdfhjkasdc',
    en: '1asdfasdf21348ajksdfhjkasdf',
    km: '1asdfasdf21348ajksdfhjkasdk'
  };

  const fetchData = () => {
    const id = contentId[language];
    axios
      .get(
        `https://vzrs5eev4k.execute-api.ap-southeast-1.amazonaws.com/dev/contents/${id}`
      )
      .then(res => {
        setContent(res.data);
        setClients(JSON.parse(res.data.clients));
      });
  };

  useEffect(
    () => {
      fetchData();
    },
    [language]
  );

  const onChangeLanguage = language => {
    setLangauge(language);
    localStorage.setItem('language', language);
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="page-loading">
        <div className="spinner">
          <div className="double-bounce1" />
          <div className="double-bounce2" />
        </div>
      </div>
      <div id="spaces-main" className="pt-perspective ">
        <header className="l-header creative-layout" data-sticky-container>
          <div className="top-bar-container  sticky slideUp ">
            <div
              className="site-title-bar"
              data-responsive-toggle="mobile-menu"
              data-hide-for="large"
            >
              <div className="title-bar-left">
                <button
                  aria-label="Main Menu"
                  className="menu-icon"
                  type="button"
                  data-toggle="mobile-menu"
                />
                <span className="site-mobile-title title-bar-title logo">
                  <a href="#" rel="home" title="Digitalo" className="active">
                    <img src={require('../../images/Logo.png')} alt="logo" />
                  </a>
                </span>
              </div>
            </div>
            <nav className="site-navigation top-bar" role="navigation">
              <div className="top-bar-left">
                <div className="site-desktop-title top-bar-title">
                  <div className="logo-wrapper " data-dropdown-menu>
                    <div className="menu-text">
                      <a
                        href="#"
                        rel="home"
                        title="Digitalo"
                        className="active"
                      >
                        <img
                          style={{ height: '60px' }}
                          src={require('../../images/Logo.png')}
                          alt="logo"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <Navbar
                onChangeLanguage={onChangeLanguage}
                content={content}
                language={language}
              />
            </nav>
          </div>
        </header>
        {/* content  */}
        <main className="l-main row">
          <div className="main large-12 small-12 columns">
            <article>
              <div className="body field clearfix ">
                <div
                  data-animation-delay={300}
                  className="vc_row wpb_row vc_row-fluid"
                >
                  <Slider content={content} />
                  <div
                    data-vc-full-width="true"
                    data-vc-full-width-init="false"
                    data-animation-delay={300}
                    className="vc_row wpb_row vc_row-fluid vc_custom_1553190645373 vc_row-has-fill"
                  >
                    <Clients data={clients} />
                  </div>
                  <div className="vc_row-full-width vc_clearfix" />
                  <div
                    data-animation-delay={300}
                    className="vc_row wpb_row vc_row-fluid"
                  >
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div
                            className="wd_empty_space"
                            data-heightmobile={20}
                            data-heighttablet={20}
                            data-heightdesktop={70}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Award content={content} />
                  <div className="vc_row-full-width vc_clearfix" />
                  <Marketing content={content} />
                  <div className="vc_row-full-width vc_clearfix" />
                  <Process content={content} />
                  <div className="vc_row-full-width vc_clearfix" />
                  <Business content={content} />
                  <div className="vc_row-full-width vc_clearfix" />

                  <Expert content={content} />
                  <div className="vc_row-full-width vc_clearfix" />
                  <Contact content={content} />
                  <div className="vc_row-full-width vc_clearfix" />
                  <div className="vc_row wpb_row vc_row-fluid">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div
                            className="wd_empty_space"
                            data-heightmobile={20}
                            data-heighttablet={30}
                            data-heightdesktop={40}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </main>
        <Footer content={content} />
        <footer className="second-footer">
          <div className="row">
            <div className="copyright medium-3 large-3 columns" />
            <div className="powered medium-6 large-6 columns">
              <section className="block">
                © 2019 BizKhmer Media All rights reserved.{' '}
              </section>
            </div>
            <div className="footer-social-media medium-3 large-3 columns" />
          </div>
        </footer>
      </div>
      <div className="xoo-wsc-modal">
        <div className="xoo-wsc-basket" style={{}}>
          <span className="xoo-wsc-items-count">141</span>
          <span className="xoo-wsc-icon-basket1 xoo-wsc-bki" />
        </div>
        <div className="xoo-wsc-opac" />
        <div className="xoo-wsc-container" />
      </div>
      <div className="xoo-wsc-notice-box" style={{ display: 'none' }}>
        <div>
          <span className="xoo-wsc-notice" />
        </div>
      </div>
    </div>
  );
}
