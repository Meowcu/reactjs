import { Button, Modal, Table, Tooltip } from 'antd';
import React, { useContext, useEffect, useState } from 'react'
import { networkService } from '../../network/network';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import { favoritesCustomerContext } from '../../contexts/favoritesCustomerContext';
import { storageHelper } from '../../utils/localStorageService/storageHelper';


const { confirm } = Modal;



function CustomerList() {

    console.log('STATE CHANGED!');

    const [customers, setcustomers] = useState([]);
    const [loading, setloading] = useState(true);

    const { favorites, setfavorites } = useContext(favoritesCustomerContext);

    const navigate = useNavigate();

    useEffect(() => {

        getCustomers();
    }, []);

    const addToFavorites = (id) => {

        let favoriteCustomer = favorites.find(q => q.id == id);

        if (!favoriteCustomer) {
            let favoriteCustomer = customers.find(q => q.id == id);
            setfavorites([...favorites, favoriteCustomer]);
            storageHelper.setFavoriteToStorage([...favorites, favoriteCustomer])
        }
        else{
            let filteredFavorites = favorites.filter(q => q.id != id);
            setfavorites([...filteredFavorites])
            storageHelper.setFavoriteToStorage([...filteredFavorites])
        }


    }

    const getCustomers = () => {
        networkService.getAll('/customers')
            .then(data => {

                setcustomers(data);
                setloading(false)


            })
            .catch((err) => {
                console.log('Error', err);
            })
    }

    const deleteCustomer = (id) => {

        setloading(true);
        networkService.delete('customers', id)
            .then(res => {
                getCustomers();
                setloading(false)
            })
            .catch(err => {
                setloading(false);
                console.log('CustomerList component network error', err);
                Modal.error({
                    title: 'This is an error message',
                    content: 'NETWORK ERROR!!',
                });
            })

    }

    const showDeleteConfirm = (id) => {

        confirm({
            title: 'Are you sure delete this customer?',
            icon: <ExclamationCircleOutlined />,
            content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                deleteCustomer(id);
            },
            onCancel() {

            },
        });

    }

    const updateCustomer = (id) => {

        navigate('/customer/update/' + id);
    }

    const customerDetail = (id) => {
        navigate('/customer/detail/' + id);
    }

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            sorter: (a, b) => a.id.localeCompare(b.id)
        },
        {
            title: 'Company Name',
            dataIndex: 'companyName',
            sorter: (a, b) => a.companyName.localeCompare(b.companyName)

        },
        {
            title: 'Contact Name',
            dataIndex: 'contactName',
            sorter: (a, b) => a.contactName.localeCompare(b.contactName),
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
            title: 'Customer Detail',
            dataIndex: 'id',
            render: (id) => <Button type='primary-outline' onClick={() => customerDetail(id)}>Detail</Button>
        },
        {
            title: 'Delete Customer',
            dataIndex: 'id',
            render: (id) => <Button onClick={() => showDeleteConfirm(id)} type="primary-outline" danger>Delete</Button>
        },
        {
            title: 'Update Customer',
            dataIndex: 'id',
            render: (id) => <Button type='primary-outline' onClick={() => updateCustomer(id)}>Update</Button>
        },
        {
            title: 'Add To Favorites',
            dataIndex: 'id',
            render: (id) => <Tooltip title="add to favorites">
                <Button onClick={() => addToFavorites(id)} type="primary" shape="default" icon={favoriteControl(id)} />
            </Tooltip>

        }
    ]

    const favoriteControl = (id) => {
        let favoriteCustomer = favorites.find(q => q.id == id);

        if (favoriteCustomer)
            return <StarFilled/>;
        else
            return <StarOutlined/>;

    }


    return (<>
        <Table loading={loading} dataSource={customers} pagination={{ pageSize: 10 }} columns={columns} rowKey='id'></Table>
    </>
    )
}

export default CustomerList