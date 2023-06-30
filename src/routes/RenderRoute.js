
import React from "react";

const Card = React.lazy(()=>import("../components/Card"))
const Form = React.lazy(()=>import("../pages/Form"))
const NotFound = React.lazy(()=>import("../pages/NotFound"))
const Table = React.lazy(()=>import("../pages/Table"))
const Shop = React.lazy(()=>import("../pages/Shop"))


export const RenderRoute  = [
    {
        id:1,
        component:Card,
        path:"/"
    },
    {
        id:2,
        component:Form,
        path:"/form"
    },

    {
        id:3,
        component:Table,
        path:"/table"
    },

   
    {
        id:4,
        component:Shop,
        path:"/shop"
    },
  
    {
        id:5,
        component:NotFound,
        path:"*"
    }
]