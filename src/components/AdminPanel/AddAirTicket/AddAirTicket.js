import React from 'react';
import './AddAirTicket.css'
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";

const AddAirTicket = () => {
    
    const { register, handleSubmit, watch, errors } = useForm();    

    return (
        <div>
            <div className="row adminBorder">
                <div className="col-md-3 sidebarBackground">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    <div className="d-flex justify-content-center">
                        <div className="addAirTicket">
                            <form>
                                <input className="w-100" name="flightFrom" placeholder="Flying From" {...register("flightFrom")} /> <br /><br />
                                <input className="w-100" name="flightTo" placeholder="Flying To" {...register("flightTo")} /> <br /><br />
                                <input className="w-100" type="date" name="departure" placeholder="Departure" {...register("departure")} /> <br /><br />
                                <input className="w-100" type="date" name="return" placeholder="Return" {...register("return")} /> <br /><br />
                                <input className="w-100" name="firstClass" placeholder="First Class" {...register("firstClass")} /> <br /><br />
                                <input className="w-100" name="economy" placeholder="Economy" {...register("economy")} /> <br /><br />
                                <input name="image" type="file" /> <br /><br />
                                <input className="button" type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAirTicket;