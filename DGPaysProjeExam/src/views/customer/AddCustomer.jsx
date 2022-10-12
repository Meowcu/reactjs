import { Button, Col, Form, Input, Modal, PageHeader, Row } from 'antd'
import { networkService } from '../../network/network'

function AddCustomer() {

  const onFinish = (values) => {

    networkService.add('customers', values)
      .then((res) => {
        Modal.success({
          content: 'Success! your new customerID: ' + res.id,
        });
      })

  }

  return (<>
    <PageHeader
      className="site-page-header"
      title="Add Customer"
      subTitle="Please enter new customer informations to blank fields."
    />
    <Form
      layout='vertical'
      onFinish={onFinish}
      size='large'
      initialValues={
        { id: '', companyName: '', contactName: '', contactTitle: '', address: {street: '',city:'',region:'',postalCode:'',country:'',phone:'' }}
      }
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


      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  </>)
}

export default AddCustomer