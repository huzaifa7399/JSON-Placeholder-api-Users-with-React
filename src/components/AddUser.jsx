import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddTask = () => {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [website, setWebsite] = useState('')
    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(name)
        let usersObj = {
            name: name,
            username: username,
            email: email,
            phone: phone,
            address: address,
            website: website,
        }
        localStorage.setItem('users', JSON.stringify(usersObj))

        setName('')
        setUsername('')
        setEmail('')
        setPhone('')
        setAddress('')
        setWebsite('')
        navigate("/modal")

    }

    return (
        <div className='editData'>
            <h1 >REACT FETCH</h1>
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control size='lg' type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>UserName</Form.Label>
                    <Form.Control size='lg' type="text" placeholder="Enter UserName" value={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control size='lg' type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control size='lg' type="tel" placeholder="Enter Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />

                </Form.Group><Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control size='lg' type="text" placeholder="Enter Address" value={address} onChange={(e) => setAddress(e.target.value)} />

                </Form.Group><Form.Group className="mb-3">
                    <Form.Label>Website</Form.Label>
                    <Form.Control size='lg' type="text" placeholder="Enter Website" value={website} onChange={(e) => setWebsite(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {/* <form className="add-form bg-dark text-light" onSubmit={onSubmit}>
                <div className="form-control">
                    <label >Name</label>
                    <input type='text' placeholder="Add Name" value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div className="form-control">
                    <label >UserName</label>
                    <input type='text' placeholder="Add UserName" value={UserName} onChange={(e) => setUsername(e.target.value)}></input>
                </div>
                <div className="form-control">
                    <label >Email</label>
                    <input type='text' placeholder="Add Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className="form-control">
                    <label >Phone Number</label>
                    <input placeholder="Add Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
                </div>
                <div className="form-control">
                    <label >Address</label>
                    <input type='text' placeholder="Add Address" value={address} onChange={(e) => setAddress(e.target.value)}></input>
                </div>
                <div className="form-control">
                    <label >Website</label>
                    <input type='text' placeholder="Add Website" value={website} onChange={(e) => setWebsite(e.target.value)}></input>
                </div>
                <input type="submit" value="Save Task" className="btn btn-block text-dark bg-light" onClick={navBtn} />
            </form > */}
        </div>
    )
}

export default AddTask