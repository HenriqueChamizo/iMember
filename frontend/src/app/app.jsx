import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import './template/custom.css'

import React from 'react'
import Menu from './template/menu'

export default props => {
    console.log("App")
    return (
        <div className="">
            <Menu />
            {props.children}
        </div>
    )
}