import React from 'react';

const ContactUs = () => {
  return (
    <div id="contact" className="bg-gray-200 p-4">
      <h1 className="text-2xl font-bold mb-2">Contact Us</h1>
      <p className="text-gray-600 mb-4">
        Feel free to reach out to us for any inquiries or feedback.
      </p>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <ul className="list-disc ml-6 mb-4">
            <li>Email: avp.erndvp@gamil.com</li>
            <li>
              WhatsApp:{' '}
              <a href="https://wa.me/9766776617" className="text-blue-500">
                Click here
              </a>
            </li>
            <li>Phone: 9766776617</li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15007.890870155363!2d75.3582199!3d19.8833739!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba3ac2040d495%3A0xa4b9dcfa262f3849!2sAVP%20Engineer&#39;s%20and%20Developers!5e0!3m2!1sen!2sin!4v1705146969887!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
