import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {

    const [services, setServices] = useServices()

    const handleDelete = id =>{
        const proceed = window.confirm('Are Your sure?')
        if(proceed){
            const url = `http://localhost:5000/services/${id}`
            fetch(url, {
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=> {
                console.log(data)
                const remaining = services.filter(service=> service._id !== id)
                setServices(remaining)
            })
        }
    }

    return (
        <div className='mx-auto container'>
            <h1>Manage your services</h1>
            {
                services.map(service => <div key={service._id}>
                    <div className='w-100 bg-info text-white p-4 my-5 rounded-3 d-flex justify-content-between'>
                    <h4 >{service.name}</h4>
                    <button onClick={()=>handleDelete(service._id)} className='btn btn-outline-dark'>X</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageServices;