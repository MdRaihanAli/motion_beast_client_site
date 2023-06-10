import React from 'react'
import useClasses from '../../Hooks/useClasses'
import Table from 'react-bootstrap/Table';

function Classes() {
    const [allClass] = useClasses()

    return (
        <div className='container'>
            <h1 className='fw-bold my-4 text-center'>Find Your <span className="text-success">Favorite</span> Class</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Instructor</th>
                        <th scope="col">Available seats</th>
                        <th scope="col">Price</th>
                        <th scope="col">Acction</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allClass.map((clas, index) => <tr key={index}>
                            <th >{index + 1}</th>
                            <td> <img width='80' height='80' src={clas.image} alt="" /></td>
                            <td>{clas.title}</td>
                            <td>{clas.name}</td>
                            <td>{clas.range - clas.enarolled}</td>
                            <td>{clas.price}</td>
                            <td> <button className='btn btn-success'>Enaroll</button></td>
                        </tr>)
                    }


                </tbody>
            </Table>
        </div>
    )
}

export default Classes