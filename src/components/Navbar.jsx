import React from 'react'
import { Button, Col, Layout, Menu, Row, Space } from "antd";
import { useNavigate } from 'react-router-dom';
import { headerItems } from '../data/data';
const { Header } = Layout;

const Navbar = () => {
  const navigate = useNavigate()

  const goToLoginPageButton = ()=> {
    navigate("/login")
  }

  const goToRegisterPageButton = ()=> {
    navigate("/register")
  }
  return (
    <Header>
      <Row>
        <Col lg={4} md={4} sm={4} xs={4}>
          
        </Col>
        <Col lg={16} md={16} sm={16} xs={16}>
          <Menu theme='dark' mode='horizontal'  items={headerItems}/>
        </Col>
        <Col lg={4} md={4} xs={4} sm={4}>
          <Space>
            <Button type='primary' onClick={goToLoginPageButton}>Login</Button>
            <Button onClick={goToRegisterPageButton}>SignUp</Button>
          </Space>
        </Col>
      </Row>
    </Header>
  )
}

export default Navbar