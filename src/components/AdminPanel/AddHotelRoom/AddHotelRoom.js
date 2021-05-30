import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";

const AddHotelRoom = () => {
    
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const onSubmit = data =>
    {
        const eventData = {
            serviceName: data.serviceName,
            price: data.price,
            description: data.description,
            imageURL: imageURL
        }
        const url = `http://localhost:5055/insert-hotel-rooms`


        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response', res))
    };

    const handleImageUpload = event =>{
        console.log(event.target.files[0])
        const imageData = new FormData()
        imageData.set('key', 'a6dd3054730fb06249f950b9c5129c0d')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response)
            {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error)
            {
                console.log(error);
            });

    }

    return (
        <div>
            <div className="row adminBorder">
                <div className="col-md-3 sidebarBackground">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    <div className="d-flex justify-content-center">
                        <div className="addAirTicket">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className="w-100" name="roomName" placeholder="Room Name" {...register("roomName")} /> <br /><br />
                                <input className="w-100" name="roomPrice" placeholder="Room Price" {...register("roomPrice")} /> <br /><br />
                                <input className="w-100" type="aboutBed" name="departure" placeholder="About Bed" {...register("aboutBed")} /> <br /><br />
                                <input className="w-100" name="location" placeholder="Location" {...register("location")} /> <br /><br />
                                <input name="image" type="file" onChange={handleImageUpload}/> <br /><br />
                                <input className="button" type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddHotelRoom;