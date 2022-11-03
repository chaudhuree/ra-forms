import React, { useState } from "react";
import "./Form.css";
function Form() {
  const [data, setData] = useState({
    FirstName: "",
    LastName: "",
    Address1: "",
    Address2: "",
    City: "",
    State: "",
    ZipCode: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(data));
  };
  const handleChange = (e) => {
    const type = e.target.type;
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };
  const { Address2, ...otherProps } = data;
  const allFilled = [...Object.values(otherProps)].every(Boolean);
  return (
    <div>
      <form className="form flex-col" onSubmit={handleSubmit}>
        <div className="flex-col">
          <div className="split-container">
            <div className="flex-col">
              <label htmlFor="FirstName">First Name</label>
              <input
                type="text"
                id="FirstName"
                name="FirstName"
                placeholder="shahriar"
                pattern="([A-Z])[\w+.]{1,}"
                value={data.FirstName}
                onChange={handleChange}
              />
            </div>
            <div className="flex-col">
              <label htmlFor="LastName">Last Name</label>
              <input
                type="text"
                id="LastName"
                name="LastName"
                placeholder="kabir"
                pattern="([A-Z])[\w+.]{1,}"
                value={data.LastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <label htmlFor="Address1">Address</label>
          <input
            type="text"
            id="Address1"
            name="Address1"
            placeholder="dakkhinkhan dhaka"
            pattern="[\w\d\s.#]{2,}"
            value={data.Address1}
            onChange={handleChange}
          />

          <label htmlFor="Address2" className="offscreen">
            2nd Address line
          </label>
          <input
            type="text"
            id="Address2"
            name="Address2"
            placeholder="Apt. 2"
            pattern="[\w\d\s.#]{2,}"
            value={data.Address2}
            onChange={handleChange}
          />

          <label htmlFor="City">City</label>
          <input
            type="text"
            id="City"
            name="City"
            placeholder="Dhaka"
            pattern="([A-Z])[\w\s.]{1,}"
            value={data.City}
            onChange={handleChange}
          />

          <label htmlFor="State">State</label>
          <select
            id="State"
            name="State"
            value={data.State}
            onChange={handleChange}
          >
            <option value="NONE">Select State</option>
            <option value="UT">Uttara</option>
            <option value="MP">Mirpur</option>
            <option value="AZ">Azompur</option>
            <option value="DM">Dhanmondi</option>
            <option value="NM">Newmarket</option>
            <option value="KP">Komlapur</option>
            <option value="JP">Joydebpur</option>
          </select>

          <label htmlFor="ZipCode">Zip Code</label>
          <input
            type="text"
            id="ZipCode"
            name="ZipCode"
            placeholder="12345"
            pattern="[0-9]{5}"
            maxLength="5"
            value={data.ZipCode}
            onChange={handleChange}
          />
        </div>
        <button type='submit' className="button" disabled={!allFilled}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
