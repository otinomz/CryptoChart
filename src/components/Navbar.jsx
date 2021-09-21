import React from 'react'
import { BUtton, Menu, Typography, Avatar } from "antd"
import { Link } from "react-router-dom"
import {HomeOutlined, MoneyCollectorOutlined, BulbOutlined, FundOutlined, MenuOutlined} from "@ant-design/icons"
import icon from "../assets/cryptocurrency.png"
    
function Navbar() {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large"/>
                <Typography.Title level={2} className="logo">
                    <Link to="/cryptoWall">CryptoWall</Link>
                </Typography.Title>

                {/* <Button className="menu-control-container">

                </Button> */}
            </div>
        </div>
    )
}

export default Navbar
