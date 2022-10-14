import { useNavigate } from 'react-router-dom'
import Header from './Header'
import AddUser from "./AddUser"
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';



const TableDisplay = () => {
    const [showAddTask,] = useState(false)
    const navigate = useNavigate()
    const [data, setData] = useState([])

    const fetchDetails = async () => {
        await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(apiData => {
                setData(apiData)
            })
    }

    const deleteData = async (id) => {

        console.log('delete', id)
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        })
        data.length === 1 ? document.querySelector('.editData').innerHTML = 'NO USERS TO DISPLAY' : setData(data?.filter((task) => task.id !== id))
        console.log(data)
    }
    const detailsBtn = (id) => {
        navigate(`/details/${id}`)
        console.log('myBtn', id)
    }

    const addTask = async (d) => {

        console.log(d)

        const myPost = {
            name: d.name,
            username: d.username,
            email: d.email,
            phone: d.phone,
            address: d.address,
            website: d.website
        }
        let fetchData = {
            method: 'POST',
            body: JSON.stringify(myPost),
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8'
            })
        }
        await fetch('https://jsonplaceholder.typicode.com/users', fetchData)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setData(data)

            })

    }
    useEffect(() => {
        fetchDetails()
    }, [])
    return (
        <>
            <div className="editData">
                <Header onAdd={() => navigate('/add-user')} showAdd={showAddTask} />
                {showAddTask && <AddUser onAdd={addTask} />}
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>UserName</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((d) => {
                                return (
                                    <tr key={d.id} className='tableData' onDoubleClick={() => deleteData(d.id)}>
                                        <td>{d.id}</td>
                                        <td>{d.name}</td>
                                        <td>{d.username}</td>
                                        <td><button onClick={() => detailsBtn(d.id)}>Details</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>

            </div>
        </>
    )
}

export default TableDisplay