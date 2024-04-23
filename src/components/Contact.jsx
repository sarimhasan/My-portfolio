import { useState } from 'react';

import img from '../assets/todo.png';

function Contact() {
  // handle checkbox change, uncheck if checked and vice versa
  const [checked, setChecked] = useState(true);
  const handleChange = () => {
    setChecked(!checked);
  };

  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', 'be5d0b80-4236-4f30-a058-4c9e3fa4e693');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <>
      <h1 className="max-w-[1440px] text-h1 font-bold text-center mx-auto">
        Contact Me
      </h1>

      <div className="max-w-[1440px] mx-auto lg:flex flex-row-reverse justify-between xl:px-20 px-4 xl:gap-8 gap-3">
        <div className="lg:p-7 p-3 m-auto">
          <img src={img.src} alt="todo img" width={600} className="m-auto" />
        </div>
        <div className="lg:p-7 p-3">
          <form onSubmit={onSubmit}>
            <label htmlFor="name" className="block">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              required
              className="block mt-2 mb-4 w-full p-1 bg-accent outline-none h-9"
            />

            <label className="block" htmlFor="email">
              Email:
            </label>
            <input
              className="block mt-2 mb-4 max w-full p-1 bg-accent outline-none h-9"
              type="email"
              id="email"
              required
              name="email"
              placeholder="someone@something.com"
            />

            <label className="block" htmlFor="message">
              Message:
            </label>
            <textarea
              placeholder="Type your message here..."
              className="block resize-none mt-2 mb-4 w-full p-1 bg-accent outline-none"
              id="message"
              name="message"
              cols={50}
              rows={10}
            ></textarea>

            <input
              type="checkbox"
              name="newsletter"
              id="newsletter"
              checked={checked}
              onChange={handleChange}
            />
            <label htmlFor="newsletter" className="ml-3">
              Subscribe to my newsletter
            </label>

            <button
              type="submit"
              className="block mt-5 md:px-8 md:py-4 w-full py-[10px] bg-primary border-text border-2 my-1 transition-all duration-200 hover:shadow-[6px_6px_0px_0px_#0f0f0f8f]"
            >
              Submit
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </>
  );
}

export default Contact;
