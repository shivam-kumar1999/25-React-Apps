import React from 'react'

const Contact = () => {
  return (
    <div>
       <h1>Contact Us</h1>
      <p>If you have any questions or inquiries, feel free to contact us using the form below:</p>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Msg : </label>
          <textarea id="message" name="message" rows="1" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form> 
    </div>
  )
}

export default Contact