import React, { useEffect } from 'react';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';
import { updateData } from '../../../util/updateData';

const NavbarItem = ({ title, onClick }) => {
  return (
    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2519">
      <a onClick={onClick} style={{ cursor: 'pointer' }}>
        {title}
      </a>
    </li>
  );
};

const onClickHome = () => document.body.scrollIntoView({ smoth: true });
const onClickMenu = id => {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
};

export default function Footer(props) {
  const {
    services,
    work_flow,
    contact_us,
    home,
    team,
    business_hour,
    opining_days,
    sub_first_opining_days,
    sub_second_opining_days,
    sub_vacations,
    vacations,
    practice_areas,
    newsletter,
    sub_newsletter
  } = props.content;
  const initInlineEditor = () => {
    InlineEditor.create(document.getElementById('footer'), {
      toolbar: ['link', 'bold']
    })
      .then(editor => {
        const oldValue = editor.ui.view.editable.element;
        editor.ui.focusTracker.on(
          'change:isFocused',
          (evt, name, isFocused) => {
            if (!isFocused) {
              updateData(editor, oldValue, true);
            }
          }
        );
      })
      .catch(err => {
        console.error(err.stack);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      initInlineEditor();
    }, 500);
  }, []);
  return (
    <section className="first-footer">
      <h3 className="hide">Footer</h3>
      <div className="row">
        <section className="block">
          <div className="large-3 medium-6 columns">
            <div id="text-3" className=" widget_text ">
              <div className="textwidget">
                <p>
                  <img
                    className="alignnone wp-image-3341 size-full"
                    style={{
                      marginBottom: '25px',
                      maxWidth: '200px',
                      marginTop: '-9px',
                      marginLeft: '15px'
                    }}
                    src={require('../../../images/LogoBizKhmer.png')}
                    alt="wordpress theme footer"
                    width={426}
                    height={69}
                  />
                </p>
                <div
                  dangerouslySetInnerHTML={{ __html: props.content.footer }}
                  id="footer"
                />
                <ul className="footer_social_icons">
                  <li />
                </ul>
              </div>
            </div>
          </div>
          <div className="large-3 medium-6 columns">
            <div id="text-4" className=" widget_text ">
              <h4 className="block-title" id="business_hour">
                {business_hour}
              </h4>
              <div className="textwidget">
                <h6 id="opining_days">{opining_days}</h6>
                <div
                  style={{ margin: '0 0 10px 0' }}
                  id="sub_first_opining_days"
                >
                  {sub_first_opining_days}
                </div>
                <div
                  style={{ margin: '0 0 20px 0' }}
                  id="sub_second_opining_days"
                >
                  {sub_second_opining_days}
                </div>
                <h6 id="vacations">{vacations}</h6>
                <div style={{ margin: '0 0 10px 0' }} id="sub_vacations">
                  {sub_vacations}
                </div>
              </div>
            </div>
          </div>
          <div className="large-3 medium-6 columns">
            <div id="text-5" className=" widget_text ">
              <h4 className="block-title" id="practice_areas">
                {practice_areas}
              </h4>
              <div className="textwidget">
                <div className="menu-left-menu-container">
                  <ul id="menu-left-menu" className="menu">
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="large-3 medium-6 columns">
            <div id="text-6" className=" widget_text ">
              <h4 className="block-title" id="newsletter">
                {newsletter}
              </h4>
              <div className="textwidget">
                <p style={{ paddingBottom: '14px' }} id="sub_newsletter">
                  {sub_newsletter}
                </p>
                <form action="#" method="post">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="email"
                      type="email"
                      placeholder="Your E-Mail"
                    />
                    <br />
                    <button className="btn-newsletter">
                      <img
                        src={require('../../../images/arrow-right-icon.png')}
                        alt="icon"
                      />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
