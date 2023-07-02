import React from "react"
import { Stack } from "@mui/material"

// import {logo} from '../Utils/Constant'
import { Link } from "react-router-dom"
import SearchBar  from "./SearchBar"
import Logo_3 from "../Utils/rm_2.png"
const Navbar =()=>(
    <Stack direction="row" alignItems="center" p={2} sx={{position:"sticky",background:"#000",top:0,justifyContent:"space-between"}}>

     <Link to="/" style={{display:"flex",alignItems:"center"}}>
        <img src={Logo_3} height={100} width={200} />
     </Link>

     <SearchBar />

    </Stack>
)

export default Navbar