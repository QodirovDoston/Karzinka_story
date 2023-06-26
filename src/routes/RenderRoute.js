
import React from "react";

const Card = React.lazy(()=>import("../components/Card"))
const Form = React.lazy(()=>import("../components/Form"))
const NotFound = React.lazy(()=>import("../components/NotFound"))
const Table = React.lazy(()=>import("../components/Table"))
const KorzinaCart = React.lazy(()=>import("../components/Korzina/Karzina"))
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
        component:KorzinaCart,
        path:"/korzina"
    },
    {
        id:5,
        component:Shop,
        path:"/shop"
    },
  
    {
        id:5,
        component:NotFound,
        path:"*"
    }
]