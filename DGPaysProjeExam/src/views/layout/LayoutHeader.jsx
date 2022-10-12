import { Badge, Menu } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { favoritesCustomerContext } from '../../contexts/favoritesCustomerContext'

function LayoutHeader() {

    const { favorites } = useContext(favoritesCustomerContext)

    return (
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
            >
                <Menu.Item key={1}><Link to='/'>Dashboard</Link></Menu.Item>
                <Menu.Item key={2}><Link to='/customers'> Customers </Link></Menu.Item>
                <Menu.Item key={3}><Link to='/addcustomer'> Add Customer </Link></Menu.Item>
                <Menu.Item key={4}><Link to='/favorites'> Favorites <Badge count={favorites.length}></Badge></Link></Menu.Item>




            </Menu>
        </Header>
    )
}

export default LayoutHeader