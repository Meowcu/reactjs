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
            dataIndex: ['address','street']
        },
        {
            title: 'City',
            dataIndex: ['address','city']
        },
        {
            title: 'Region',
            dataIndex: ['address','region']
        },
        {
            title: 'Postal Code',
            dataIndex: ['address','postalCode']
        },
        {
            title: 'Country',
            dataIndex: ['address','country']
        },
        {
            title: 'Phone',
            dataIndex: ['address','phone']
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