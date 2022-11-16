import React, { useState } from "react";
import { useLocation } from "react-router-dom";
let currentUser;
function Dashboard () {
    return(
        <h1>Welcome User : {currentUser}</h1>
    )
}

export default Dashboard;