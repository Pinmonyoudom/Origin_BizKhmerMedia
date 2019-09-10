import React from "react";
import {Auth} from "aws-amplify";
const NavbarItem = ({title, onClick, id}) => {
  return (
    <li className=" menu-item menu-item-type-post_type menu-item-object-page color-8 ">
      <a id={id} style={{cursor: "pointer"}}>
        {title}
      </a>
    </li>
  );
};

const HireButton = ({onClick, hireUsNow}) => {
  return (
    <div className="header-cta show-for-large-up large-screen">
      <a
        id="hire_us_now"
        className="wd-btn btn-solid btn-color-2 hover-color-1 btn-small btn-round  icon-after"
      >
        {hireUsNow}
      </a>
    </div>
  );
};

const flags = {
  km: require("../../assets/km.png"),
  en: require("../../assets/en.png"),
  zh: require("../../assets/zh.png")
};

const Flag = ({flag, alt}) => (
  <img src={flag} alt={alt} style={{width: 40, height: 20}} />
);

export const Navbar = props => {
  const {
    services,
    work_flow,
    contact_us,
    locale,
    hire_us_now,
    home,
    team
  } = props.content;
  const onChangeLanguage = props.onChangeLanguage;
  const onClickHome = () => document.body.scrollIntoView({smoth: true});
  const onClickMenu = id => {
    document.getElementById(id).scrollIntoView({behavior: "smooth"});
  };
  const flag = flags[props.language] || flags.en;
  const logout = async () => {
    await Auth.signOut();

    props.userHasAuthenticated(false);
  };
  return (
    <div className="top-bar-right">
      <ul id="menu-primary-menu" className="desktop-menu menu">
        <NavbarItem id="home" title={home} onClick={onClickHome} />
        <NavbarItem
          id="services"
          title={services}
          onClick={() => onClickMenu("services-element")}
        />
        <NavbarItem
          id="team"
          title={team}
          onClick={() => onClickMenu("team-element")}
        />
        <NavbarItem
          id="work_flow"
          title={work_flow}
          onClick={() => onClickMenu("process-element")}
        />
        <NavbarItem
          id="contact_us"
          title={contact_us}
          onClick={() => onClickMenu("contact-element")}
        />
        <li
          className=" menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children   is-dropdown-submenu-parent opens-right not-click has-dropdown not-click  color-3 menu-item-has-children"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div style={{display: "inline-block"}}>
            <Flag flag={flag} alt="Khmer" />
          </div>
          <a href="#" id="locale">
            <span>{locale}</span>
          </a>
          <ul className="submenu is-dropdown-submenu " style={{minWidth: 130}}>
            <li className=" menu-item menu-item-type-post_type menu-item-object-page    color-3 ">
              <a href="/contentskm" onClick={() => onChangeLanguage("km")}>
                <Flag flag={flags.km} alt="Khmer" />
              </a>
            </li>
            <li className=" menu-item menu-item-type-post_type menu-item-object-page    color-3 ">
              <a href="/contents" onClick={() => onChangeLanguage("en")}>
                <Flag flag={flags.en} alt="English" />
              </a>
            </li>
            <li className=" menu-item menu-item-type-post_type menu-item-object-page    color-3 ">
              <a href="/contentszh" onClick={() => onChangeLanguage("zh")}>
                <Flag flag={flags.zh} alt="Chinese" />
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <HireButton
        onClick={() => onClickMenu("contact-element")}
        hireUsNow={hire_us_now}
      />
      <div className="header-cta show-for-large-up large-screen">
        <a
          className="wd-btn btn-solid btn-color-2 hover-color-1 btn-small btn-round  icon-after"
          onClick={logout}
        >
          Logout
        </a>
      </div>
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
          <NavbarItem title="Home" onClick={onClickHome} />
          <NavbarItem
            title={services}
            onClick={() => onClickMenu("services-element")}
          />
          <NavbarItem
            title={team}
            onClick={() => onClickMenu("team-element")}
          />
          <NavbarItem
            title={work_flow}
            onClick={() => onClickMenu("process-element")}
          />
          <NavbarItem
            title={contact_us}
            onClick={() => onClickMenu("contact-element")}
          />
          <li
            id="menu-item-3120"
            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3120 is-accordion-submenu-parent has-submenu-toggle"
            role="treeitem"
          >
            <a href="#">{locale}</a>
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
              style={{display: "none"}}
            >
              <li
                id="menu-item-2948"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2948 is-submenu-item is-accordion-submenu-item"
                role="treeitem"
              >
                <a href="/contents" onClick={() => onChangeLanguage("en")}>
                  <img
                    src={require("../../assets/en.png")}
                    alt="US"
                    style={{width: 40, height: 20}}
                  />
                </a>
              </li>
              <li
                id="menu-item-2944"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2944 is-submenu-item is-accordion-submenu-item"
                role="treeitem"
              >
                <a href="/contentskm" onClick={() => onChangeLanguage("km")}>
                  <img
                    src={require("../../assets/km.png")}
                    alt="khmer"
                    style={{width: 40, height: 20}}
                  />
                </a>
              </li>
              <li
                id="menu-item-3121"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3121 is-submenu-item is-accordion-submenu-item"
                role="treeitem"
              >
                <a
                  href="/contentszh"
                  onClick={() => onChangeLanguage("zh")}
                  style={{justifyContent: "center"}}
                >
                  <img
                    src={require("../../assets/zh.png")}
                    alt="chinese"
                    style={{width: 40, height: 20}}
                  />
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="header-cta show-for-medium-down">
          <a
            onClick={() => onClickMenu("contact-element")}
            className="wd-btn btn-solid btn-color-2 hover-color-1 btn-small btn-round  icon-after"
          >
            {hire_us_now}
          </a>
        </div>
      </nav>
    </div>
  );
};
