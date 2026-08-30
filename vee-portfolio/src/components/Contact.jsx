import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('sent');
  }

  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <span className="eyebrow">Contact</span>
        <h2 className="section-heading">Let's Work Together</h2>
        <p className="contact__desc">
          Have a project in mind or an opportunity to discuss? Send a message
          and I'll get back to you soon.
        </p>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__row">
            <label className="sr-only" htmlFor="name">
              Name
            </label>
            <input id="name" name="name" type="text" placeholder="Your Name" required />

            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input id="email" name="email" type="email" placeholder="Your Email" required />
          </div>

          <label className="sr-only" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          />

          <button type="submit" className="btn btn-primary">
            {status === 'sent' ? 'Message Sent' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}
