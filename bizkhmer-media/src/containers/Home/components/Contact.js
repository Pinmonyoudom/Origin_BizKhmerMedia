import React, { useState } from 'react';
import emailValidator from 'email-validator';
import axios from 'axios';
import SweetAlert from 'sweetalert2-react';

export default function Contact() {
  const defaultForm = {
    email: '',
    name: '',
    phone: '',
    message: ''
  };
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState({});
  const [form, setForm] = useState(defaultForm);

  const validateForm = () => {
    let errors = {};
    if (form.email.trim().length > 10) {
      if (!emailValidator.validate(form.email)) {
        errors['email'] = 'is invalid.';
      } else {
        delete errors.email;
      }
    }
    if (form.message.trim().length < 10) {
      errors['message'] = 'at lease 10 chracter';
    } else {
      delete errors.message;
    }
    if (form.email.trim() === '') {
      errors['email'] = 'is require';
    } else {
      delete errors.email;
    }
    if (form.name.trim() === '') {
      errors['name'] = 'is require';
    } else {
      delete errors.name;
    }
    if (form.phone.trim() === '') {
      errors['phone'] = 'is require';
    } else {
      delete errors.phone;
    }
    if (form.message.trim() === '') {
      errors['message'] = 'is require';
    } else {
      delete errors.message;
    }

    setError(errors);
    return Object.entries(errors).length === 0 && errors.constructor === Object;
  };

  const processSend = () => {
    axios
      .post(
        'https://vzrs5eev4k.execute-api.ap-southeast-1.amazonaws.com/dev/contacts',
        form
      )
      .then(() => {
        setForm(defaultForm);
        setError({});
        setIsSuccess(true);
      })
      .catch(err => {
        setIsError(true);
      });
  };

  const onSubmitContactForm = e => {
    e.preventDefault();
    if (validateForm()) {
      processSend();
    }
  };

  return (
    <div id="contact-element">
      <div className="vc_row wpb_row vc_row-fluid">
        <div className="wpb_column vc_column_container vc_col-sm-12">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div
                className="wd-heading text-center  "
                style={{ maxWidth: '100%', margin: '0 auto' }}
              >
                <h3 style={{ margin: 0 }} className="title_a">
                  Contact US
                </h3>
              </div>
              <div
                className="wd_empty_space"
                data-heightmobile={30}
                data-heighttablet={30}
                data-heightdesktop={30}
              />
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={onSubmitContactForm}>
        <div className="vc_row wpb_row vc_row-fluid">
          <div className="wpb_column vc_column_container vc_col-sm-6">
            <div style={{ margin: 10 }}>
              <div style={{ marginBottom: '1.25rem' }}>
                <input
                  type="text"
                  placeholder="Name"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  style={{ marginBottom: 0 }}
                />
                {error.name && (
                  <label style={{ color: 'var(--wd-btn-color-2)' }}>
                    {error.name}
                  </label>
                )}
              </div>
              <div style={{ marginBottom: '1.25rem' }}>
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  style={{ marginBottom: 0 }}
                />
                {error.name && (
                  <label style={{ color: 'var(--wd-btn-color-2)' }}>
                    {error.email}
                  </label>
                )}
              </div>
              <div style={{ marginBottom: '1.25rem' }}>
                <input
                  type="text"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  style={{ marginBottom: 0 }}
                />
                {error.name && (
                  <label style={{ color: 'var(--wd-btn-color-2)' }}>
                    {error.phone}
                  </label>
                )}
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-6">
            <div style={{ margin: 10 }}>
              <textarea
                placeholder="Message"
                rows={5}
                onChange={e => setForm({ ...form, message: e.target.value })}
                value={form.message}
                style={{ marginBottom: 0 }}
              />
              {error.name && (
                <label style={{ color: 'var(--wd-btn-color-2)' }}>
                  {error.phone}
                </label>
              )}
            </div>
          </div>
          <div
            className="wpb_column vc_column_container vc_col-sm-12"
            style={{ margin: 10 }}
          >
            <button
              type="submit"
              className="wd-btn btn-solid btn-color-2 hover-color-1 btn-small btn-round"
            >
              Send
            </button>
          </div>
        </div>
      </form>
      <SweetAlert
        show={isSuccess}
        type="success"
        title="Thanks for reaching US"
        text="We will contact you back as soon as possible"
        onConfirm={() => setIsSuccess(false)}
      />

      <SweetAlert
        show={isError}
        type="error"
        title="Something went wrong"
        text="Please contact:  012 666 104 / 015 22 42 99 / 066 222 023"
        onConfirm={() => setIsError(false)}
      />
    </div>
  );
}
