import React from 'react';

export const ContactForm = () => {    
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "0c1f3341-52d6-48a7-a05d-e1cb2ebd8ee7");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

    return (
        <div className='contact'>
            <form onSubmit={onSubmit}>
                <div className='input-box'>
                    <label>Full Name</label>
                    <input type="text" className='field' placeholder='Enter your name' name='name' required />
                </div>
                <div className='input-box'>
                    <label>Email Address</label>
                    <input type="email" className='field' placeholder='Enter your email' name='email' required />
                </div>
                <div className='input-box'>
                    <label>Your Message</label>
                    <textarea name='message'  className='field mess' placeholder='Enter your message' required />
                </div>
                <button type='submit'>Send Message</button>
                <span>{result}</span>
            </form>
            

        </div>
    );
}