import React from 'react';

export default function Contact() {
  return (
    <div>

      <h1>Contact Page</h1>

      <form className='bucket-input'>
        <label>
          Name:
          <input type="text" name="name" />
</label>
<label>

          Email Address:
          <input type="text" name="email" />
          Message:
          <input type="text" name="message" />

        </label>
        <input type="submit" value="Submit" />
      </form>

    </div>

  );
}
