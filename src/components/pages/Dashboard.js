import React, { useState,useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../Auth";

function Dashboard (props) {
    
    const {currentUser} = useContext(AuthContext);
    
    if(!currentUser){
        return(

            <h1>loading...</h1>
        )
    }
    return(

        <h1>Welcome User : {currentUser.email}</h1>
    )
}

export default Dashboard;