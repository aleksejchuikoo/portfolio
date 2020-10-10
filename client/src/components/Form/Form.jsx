import React from 'react';
import Button from '../../UI/Button';
import './Form.scss';

function Form() {
  const [border, setBorder] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    ref.current.focus();
  }, []);

  const handleFocus = () => {
    setBorder(true);
  };

  const handleBlur = () => {
    setBorder(false);
  };

  return (
    <form className="contact-form">
      <div className="form-row form-group">
        <div className="form-input">
          <input name="name" type="text" placeholder="Name" ref={ref} required />
          <span />
        </div>
        <div className="form-input">
          <input name="email" type="email" placeholder="Email" required />
          <span />
        </div>
      </div>
      <div className="form-row">
        <div className="form-input">
          <input name="subject" type="text" placeholder="Subject" required />
          <span />
        </div>
      </div>
      <div className="form-row form-textarea">
        <textarea
          name="message"
          cols="20"
          rows="5"
          placeholder="Message"
          onFocus={() => handleFocus()}
          onBlur={() => handleBlur()}
          required
        />
        <span className={border ? 'active' : null} />
      </div>
      <div className="form-row form-btn">
        <Button type="submit" name="btn-form">
          Send
        </Button>
      </div>
    </form>
  );
}

export default Form;
