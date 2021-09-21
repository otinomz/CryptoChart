import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'

const {Title} = Typography

function HomePage() {
    return (
        <>
            <Title level={2} className="heading"> Global Crypto Stats</Title>
            <Row>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value="10" /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value="10" /></Col>
                <Col span={12}><Statistic title="Total Market Cap" value="10" /></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value="10" /></Col>
                <Col span={12}><Statistic title="Total Market" value="10" /></Col>
            </Row>
        </>
    )
}

export default HomePage
