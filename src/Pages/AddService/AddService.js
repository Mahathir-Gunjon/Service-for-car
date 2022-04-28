import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
        const url = `http://localhost:5000/services` ;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result=>{
            console.log(result);
        })
    };
    return (
        <div className='w-50 mx-auto'>
            <h1>Add a New Service</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column'>
                {/* register your input into the hook by invoking the "register" function */}
                <input placeholder='name' {...register("name")} />
                <br />
                {/* include validation with required or other standard HTML validation rules */}
                <textarea placeholder='description' {...register("description", { required: true })} />
                <br />
                <input placeholder='price' {...register("price", { required: true })} />
                <br />

                <input placeholder='Photo url' {...register("img", { required: true })} />
                <br />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type='submit' value="Add products"  className='btn btn-outline-primary text-black'/>
            </form>
        </div>
    );
};

export default AddService;