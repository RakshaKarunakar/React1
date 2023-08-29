import React, { useState } from 'react';
import '../color.css'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phoneno: '',
    address: '',
    gender: '',
    qualification: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
      <center>
        <div className="upc2">
          <div className="gradiant2" />
          <div className="text" />
          <h2>Registration Form</h2>

          <form onSubmit={handleSubmit}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
            <br />
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <br />
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <br />
            <div>
              <label>PhoneNo:</label>
              <input
                type="phoneno"
                name="phoneno"
                value={formData.phoneno}
                onChange={handleInputChange}
              />
            </div>
            <br />
            <div>
              <label>Address:</label>
              <input
                type="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
            <br />
            <div>
              <label>Gender:</label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleInputChange}
              />{' '}
              Male
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleInputChange}
              />{' '}
              Female
            </div>
            <br />
            <div>
              <label>Qualification:</label>
              <select
                name="qualification"
                value={formData.qualification}
                onChange={handleInputChange}
              >
                <option value="BCA">BCA</option>
                <option value="BE">BE</option>
                <option value="MCA">MCA</option>
              </select>
            </div>
            <br />
            <Button type="secondary" color="primary" variant="contained" endIcon={<SendIcon />}>submit</Button>
          </form>
        </div>
      </center>
    </div>
  );
};

export default RegistrationForm;