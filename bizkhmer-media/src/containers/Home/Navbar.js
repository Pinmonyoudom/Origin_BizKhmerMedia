import React from 'react';

const NavbarItem = ({ title, onClick }) => {
  return (
    <li className=" menu-item menu-item-type-post_type menu-item-object-page color-8 ">
      <a onClick={onClick} style={{ cursor: 'pointer' }}>
        {title}
      </a>
    </li>
  );
};

const HireButton = ({ onClick, hireUsNow }) => {
  return (
    <div className="header-cta show-for-large-up large-screen">
      <a
        onClick={onClick}
        className="wd-btn btn-solid btn-color-2 hover-color-1 btn-small btn-round  icon-after"
      >
        {hireUsNow}
      </a>
    </div>
  );
};

const flags = {
  km: require('../../assets/km.png'),
  en: require('../../assets/en.png'),
  zh: require('../../assets/zh.png')
};

const Flag = ({ flag, alt }) => (
  <img src={flag} alt={alt} style={{ width: 40, height: 20 }} />
);

export const Navbar = props => {
  const onChangeLanguage = props.onChangeLanguage;
  const onClickHome = () => document.body.scrollIntoView({ smoth: true });
  const onClickMenu = id => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const {
    english,
    chinese,
    khmer,
    services,
    work_flow,
    contact_us,
    locale,
    hire_us_now,
    home,
    team
  } = props.content;
  const flag = flags[props.language] || flags.en;
  return (
    <div className="top-bar-right">
      <ul id="menu-primary-menu" className="desktop-menu menu">
        <NavbarItem title={home} onClick={onClickHome} />
        <NavbarItem
          title={services}
          onClick={() => onClickMenu('services-element')}
        />
        <NavbarItem title={team} onClick={() => onClickMenu('team-element')} />
        <NavbarItem
          title={work_flow}
          onClick={() => onClickMenu('process-element')}
        />
        <NavbarItem
          title={contact_us}
          onClick={() => onClickMenu('contact-element')}
        />
        <li className=" menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children   is-dropdown-submenu-parent opens-right not-click has-dropdown not-click  color-3 menu-item-has-children">
          <a href="#">
            <div style={{ marginRight: 5, display: 'inline-block' }}>
              <Flag flag={flag} alt="Khmer" />
            </div>
            {locale}
          </a>
          <ul
            className="submenu is-dropdown-submenu "
            style={{ minWidth: 130 }}
          >
            <li className=" menu-item menu-item-type-post_type menu-item-object-page    color-3 ">
              <a onClick={() => onChangeLanguage('km')}>
                <Flag flag={flags.km} alt="Khmer" />
              </a>
            </li>
            <li className=" menu-item menu-item-type-post_type menu-item-object-page    color-3 ">
              <a onClick={() => onChangeLanguage('en')}>
                <Flag flag={flags.en} alt="English" />
              </a>
            </li>
            <li className=" menu-item menu-item-type-post_type menu-item-object-page    color-3 ">
              <a onClick={() => onChangeLanguage('zh')}>
                <Flag flag={flags.zh} alt="Chinese" />
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <HireButton
        onClick={() => onClickMenu('contact-element')}
        hireUsNow={hire_us_now}
      />
      <nav
        className="mobile-menu vertical menu"
        id="mobile-menu"
        role="navigation"
        data-animate="hinge-in-from-top hinge-out-from-top"
      >
        <ul
          id="menu-primary-menu-1"
          className="vertical menu"
          data-accordion-menu
          data-submenu-toggle="true"
        >
          <NavbarItem title={home} onClick={onClickHome} />
          <NavbarItem
            title={services}
            onClick={() => onClickMenu('services-element')}
          />
          <NavbarItem
            title={team}
            onClick={() => onClickMenu('team-element')}
          />
          <NavbarItem
            title={work_flow}
            onClick={() => onClickMenu('process-element')}
          />
          <NavbarItem
            title={contact_us}
            onClick={() => onClickMenu('contact-element')}
          />
          <li
            id="menu-item-3120"
            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3120 is-accordion-submenu-parent has-submenu-toggle"
            role="treeitem"
          >
            <a href="#">
              <div style={{ marginRight: 5, display: 'inline-block' }}>
                <Flag flag={flag} alt="Khmer" />
              </div>
              {locale}
            </a>
            <button
              id="menu-item-3120"
              className="submenu-toggle"
              aria-controls="crtyj8-acc-menu"
              aria-expanded="false"
              title="Toggle menu"
            >
              <span className="submenu-toggle-text">Toggle menu</span>
            </button>
            <ul
              className="vertical nested menu submenu is-accordion-submenu"
              data-submenu
              role="group"
              aria-labelledby="menu-item-3120"
              aria-hidden="true"
              id="crtyj8-acc-menu"
              style={{ display: 'none' }}
            >
              <li className=" menu-item menu-item-type-post_type menu-item-object-page    color-3 ">
                <a onClick={() => onChangeLanguage('km')}>
                  <Flag flag={flags.km} alt="Khmer" />
                </a>
              </li>
              <li className=" menu-item menu-item-type-post_type menu-item-object-page    color-3 ">
                <a onClick={() => onChangeLanguage('en')}>
                  <Flag flag={flags.en} alt="English" />
                </a>
              </li>
              <li className=" menu-item menu-item-type-post_type menu-item-object-page    color-3 ">
                <a onClick={() => onChangeLanguage('zh')}>
                  <Flag flag={flags.zh} alt="Chinese" />
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="header-cta show-for-medium-down">
          <a
            onClick={() => onClickMenu('contact-element')}
            className="wd-btn btn-solid btn-color-2 hover-color-1 btn-small btn-round  icon-after"
          >
            {hire_us_now}
          </a>
        </div>
      </nav>
    </div>
  );
};
