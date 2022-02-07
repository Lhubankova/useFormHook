import React, { useState } from 'react';

function ReactForm(props) {

  const [signData, setSignData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    isJoin: false
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSignData(prevSignData => {
      return {
        ...prevSignData,
        [name]: value
      }
    });
  }

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSignData(prevSignData => {
      return {
        ...prevSignData,
        [name]: checked
      }
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(signData);

    if (signData.password === signData.confirmPassword) {
      alert('Successfully signed up')
    } else {
      alert('passwords do not match')
      return; //if passwords don't match - stop validation
    }

    if (signData.isJoin) {
      console.log('Thanks for signing up!')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
             placeholder="Email address"
             name="email"
             value={signData.email}
             onChange={handleInputChange}
             required
      />
      <input type="text"
             placeholder="Password"
             name="password"
             value={signData.password}
             onChange={handleInputChange}
             required
      />
      <input type="text"
             placeholder="Confirm password"
             name="confirmPassword"
             value={signData.confirmPassword}
             onChange={handleInputChange}
             required
      />
      <div>
        <input id="joinNews"
               type="checkbox"
               name="isJoin"
               checked={signData.isJoin}
               onChange={handleCheckboxChange}
        />
        <label htmlFor="joinNews">I want to join the newsletters</label>
      </div>
      <button>Sign up</button>
    </form>
  );
}

export default ReactForm;