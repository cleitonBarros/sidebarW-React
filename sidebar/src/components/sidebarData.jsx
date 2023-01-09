
import {ShoppingCart, House, Scroll, Users, Info} from "phosphor-react";

export const SidebarData = [

    {
        title: 'Home',
        path:'/',
        icon:< House size={24} color="#b16620" />,
        cName:'nav-text'
    },
    {
        title: 'Reports',
        path:'/reports',
        icon:< Scroll size={24} color="#b16620" />,
        cName:'nav-text'
    },
    {
        title: 'Products',
        path:'/products',
        icon:< ShoppingCart size={24} color="#b16620" />,
        cName:'nav-text'
    },
    {
        title: 'Team',
        path:'/team',
        icon:< Users size={24} color="#b16620" />,
        cName:'nav-text'
    },
    {
        title: 'Support',
        path:'/support',
        icon:< Info size={24} color="#b16620" />,
        cName:'nav-text'
    },
]
