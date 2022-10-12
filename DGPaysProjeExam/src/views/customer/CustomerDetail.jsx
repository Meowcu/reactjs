import { Button, Col, Form, Input, Row, Spin } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { networkService } from '../../network/network';

function UpdateCustomer() {

  let { id } = useParams();
  const form = useRef(null);

  const navigate = useNavigate();

  const [customer, setCustomer] = useState({})
  const [loading, setloading] = useState(true);



  useEffect(() => {

    networkService.getById('customers', id)
      .then(data => {
        console.log(data);
        setCustomer(data);
        form.current.resetFields()
        setTimeout(() => {
          setloading(false);
        }, 500);
      })

  }, [])

  return (
    <>
      <Spin spinning={loading}>
        <h1>{customer.id}</h1>
        <Form
      ref={form}
      layout='vertical'
      size='large'
      initialValues={customer}
    >

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            label='Id'
            name='id'
            rules={[{ required: true, message: 'Please enter id!' }]}
          >
            <Input />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label='Company Name'
            name='companyName'
            rules={[{ required: true, message: 'Please enter company name!' }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            label='Contact Name'
            name='contactName'
            rules={[{ required: true, message: 'Please enter contact name!' }]}
          >
            <Input />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label='Contact Title'
            name='contactTitle'
            rules={[{ required: true, message: 'Please enter contact title!' }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <h1>Address</h1>
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item
            label='Street'
            name= {['address','street']}
            rules={[{ required: true, message: 'Please enter street!' }]}
          >
            <Input />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            label='City'
            name={['address','city']}
            rules={[{ required: true, message: 'Please enter city!' }]}
          >
            <Input />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            label='Region'
            name={['address','region']}
            rules={[{ required: true, message: 'Please enter region!' }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={8}>
          <Form.Item
            label='Postal Code'
            name={['address','postalCode']}
            rules={[{ required: true, message: 'Please enter Postal Code!' }]}
          >
            <Input />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            label='Country'
            name={['address','country']}
            rules={[{ required: true, message: 'Please enter country!' }]}
          >
            <Input />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            label='Phone'
            name={['address','phone']}
            rules={[{ required: true, message: 'Please enter phone!' }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </Form>
      </Spin>

    </>
  )
}

export default UpdateCustomer