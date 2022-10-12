import { Button, Table } from 'antd'
import React, { useContext } from 'react'
import { favoritesCustomerContext } from '../../contexts/favoritesCustomerContext'
import { storageHelper } from '../../utils/localStorageService/storageHelper';

function Favorites() {

    const { favorites, setfavorites } = useContext(favoritesCustomerContext);


    const removeCustomer = (id) => {

        let filteredFavorites = favorites.filter(q => q.id != id);

        setfavorites([...filteredFavorites]);
        storageHelper.setFavoriteToStorage([...filteredFavorites])

    }

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id'
        },
        {
            title: 'Company Name',
            dataIndex: 'companyName'

        },
        {
            title: 'Contact Name',
            dataIndex: 'contactName'
        },
        {
            title: 'Contact Title',
            dataIndex: 'contactTitle'
        },
        {
            title: 'Street',
            dataIndex: 'street'
        },
        {
            title: 'City',
            dataIndex: 'city'
        },
        {
            title: 'Region',
            dataIndex: 'region'
        },
        {
            title: 'Postal Code',
            dataIndex: 'postalCode'
        },
        {
            title: 'Country',
            dataIndex: 'country'
        },
        {
            title: 'Phone',
            dataIndex: 'phone'
        },
        {
            title: 'Remove',
            dataIndex: 'id',
            render: (id) => <Button onClick={() => removeCustomer(id)} type='primary' danger>Remove</Button>
        },
        
    ]

    return (<>

        <Table columns={columns} dataSource={favorites}></Table>
    </>
    )
}

export default Favorites