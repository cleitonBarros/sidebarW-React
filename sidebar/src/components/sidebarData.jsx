
import {ShoppingCart, House, Scroll} from "phosphor-react";

const size = 32


export const SidebarData = [

    {
        title: 'Home',
        path:'/',
        icon:< House size={size} weight="bold" color="#fff" />,
        cName:'nav-text'
    },
    {
        title: 'Reports',
        path:'/reports',
        icon:< Scroll size={size} weight="bold" color="#fff" />,
        cName:'nav-text'
    },
    {
        title: 'Products',
        path:'/products',
        icon:< ShoppingCart size={size} weight="bold" color="#fff" />,
        cName:'nav-text'
    },
  
]
