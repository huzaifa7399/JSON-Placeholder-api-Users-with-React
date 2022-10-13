import { useParams } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'




const Details = () => {
    const navigate = useNavigate()

    const handleChange = (e, key) => {
        setFormData((prev) => {
            return {
                ...prev,
                [key]: e.target.value
            }
        })
        // console.log(setName)
    }

    const { id } = useParams();
    const [detail, setDetail] = useState({})
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        address: "",
        company: "",
        phone: "",
        website: "",
    })
    const displayModal = async () => {
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: id,
                name: formData.name,
                username: formData.username,
                email: formData.email,
                phone: formData.phone,
                website: formData.website,
                address: formData.address,
                company: formData.company
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                let detailsObj = {
                    id: data.id,
                    name: data.name,
                    username: data.username,
                    email: data.email,
                    phone: data.phone,
                    website: data.website,
                    address: data.address.city,
                    company: data.company.name,
                }
                console.log(detailsObj)

                localStorage.setItem('userDetails', JSON.stringify(detailsObj))
                navigate("/modal")

            })


    }

    const api = () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(apiData => {
                setDetail(apiData)
                // console.log(apiData)
            })
    }

    useEffect(() => {
        api()

    }, [])
    useEffect(() => {
        setFormData({ ...detail })
    }, [detail])

    return (
        <div className="container editData" >
            <h1 >REACT FETCH</h1>

            <form form className="add-form" >
                <div className="form-control">
                    <label >Name</label>
                    <input id="nameUpdate" placeholder="name" value={formData?.name} onChange={(e) => handleChange(e, "name")} type="text" />
                </div>
                <div className="form-control">
                    <label >UserName</label>
                    <input id="userUpdate" placeholder="username" type="text" value={formData?.username} onChange={(e) => handleChange(e, "username")} />
                </div>
                <div className="form-control">
                    <label >Email</label>
                    <input id="emailUpdate" placeholder="email" type="text" value={formData?.email} onChange={(e) => handleChange(e, "email")} />
                </div>
                <div className="form-control">
                    <label >Address</label>
                    <input id="addressUpdate" placeholder="address" type="text" value={formData?.address?.city} onChange={(e) => handleChange(e, "address")} />
                </div>
                <div className="form-control">
                    <label >Company</label>
                    <input id="companyUpdate" placeholder="Company" type="text" value={formData?.company?.name} onChange={(e) => handleChange(e, "company")} />
                </div>
                <div className="form-control">
                    <label >Phone Number</label>
                    <input id="phoneUpdate" placeholder="phone number" type="text" value={formData?.phone} onChange={(e) => handleChange(e, "phone")} />
                </div>
                <div className="form-control">
                    <label >Website</label>
                    <input id="website" placeholder="website" type="text" value={formData?.website} onChange={(e) => handleChange(e, "website")} />
                </div>

                <a href="#" className="btn bg-light text-dark" onClick={displayModal}>Save
                </a>
            </form >

            <div div className="modal-dialog modal-dialog-centered editData p-5" ></div >
        </div >
    )
}

export default Details