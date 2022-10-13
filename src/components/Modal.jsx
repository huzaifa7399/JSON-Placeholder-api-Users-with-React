import React from 'react'
import { useNavigate } from 'react-router-dom'

const Modal = () => {
    const navigate = useNavigate()
    const detailsBtn = () => {
        console.log('hhh')
        localStorage.clear()
        navigate("/")
    }
    let localUser = JSON.parse(localStorage.getItem('userDetails')) ? JSON.parse(localStorage.getItem('userDetails')) : JSON.parse(localStorage.getItem('users'))
    console.log(localUser)
    const { id, name, username, email, phone, address, website } = localUser
    return (
        <><div className="editData" >
            <h1 >REACT FETCH</h1>
            <h3>ID:{id ? id : 11}</h3><br />
            <h3>Name:{name}</h3><br />
            <h3>Username:{username}</h3><br />
            <h3>Email:{email}</h3><br />
            <h3>Phone:{phone}</h3><br />
            <h3>Address:{address}</h3><br />
            <h3>Website:{website}</h3><br />
            <a className="btn bg-light text-dark" onClick={detailsBtn}>Reset</a>
        </div>
        </>
    )
}

export default Modal