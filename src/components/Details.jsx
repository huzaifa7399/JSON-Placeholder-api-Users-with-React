import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Details = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    company: "",
    phone: "",
    website: "",
  });

  const handleChange = (e, key) => {
    setFormData((prev) => {
      return {
        ...prev,
        [key]: e.target.value,
      };
    });
    // console.log(setName)
  };
  const updateDetails = async (e) => {
    e.preventDefault()
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        name: formData.name,
        username: formData.username,
        email: formData.email,
        phone: formData.phone,
        website: formData.website,
        company: formData.company,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        let detailsObj = {
          id: data.id,
          name: data.name,
          username: data.username,
          email: data.email,
          phone: data.phone,
          website: data.website,
          company: data.company,
        };
        console.log(detailsObj);

        localStorage.setItem("userDetails", JSON.stringify(detailsObj));
        navigate("/modal");
      });
  };

  const fetchDetails = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((apiData) => {
        const { address, company } = apiData
        setFormData({ ...apiData, company: company.name })
      })
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div className=" editData">
      <h1>REACT FETCH</h1>
      <Form className="add-form" onSubmit={updateDetails}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            placeholder="Enter Name"
            value={formData.name}
            onChange={(e) => handleChange(e, "name")}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>UserName</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            placeholder="Enter UserName"
            value={formData.username}
            onChange={(e) => handleChange(e, "username")}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            size="lg"
            type="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={(e) => handleChange(e, "email")}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Company</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            placeholder="Enter Company"
            value={formData.company}
            onChange={(e) => handleChange(e, "company")}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            placeholder="Enter Phone"
            value={formData.phone}
            onChange={(e) => handleChange(e, "phone")}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Website</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            placeholder="Enter website"
            value={formData.website}
            onChange={(e) => handleChange(e, "website")}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        {/* <a href="" className="btn bg-light text-dark" onClick={displayModal}>Save
                </a> */}
      </Form>
      <div className="modal-dialog modal-dialog-centered editData p-5"></div>
    </div>
  );
};

export default Details;
