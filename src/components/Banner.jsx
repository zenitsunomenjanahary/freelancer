import React from 'react'
import {Row,Col,Image,Button, Space,Typography} from "antd"
import imgFreelancer from "../images/freelancer.gif";


const { Title } = Typography

const Banner = () => {
  return (
    <Row>
    <Col lg={12} md={12} sm={12} xs={24} style={{ display: "flex", justifyContent:"center",alignItems:"center"}}>
      <Space direction='vertical' size={"middle"}>
          <Title level={2}>Find and Hire Expert Freelancers </Title>
          <Title level={4}>Work with the best freelance talent from around the world on our secure, flexible and cost-effective platform.</Title>
          <Space>
            <Button type='primary'>Find Freelancers</Button>
            <Button>Find Jobs</Button>
          </Space>
      </Space>
    </Col>
    <Col lg={12} md={12} sm={12} xs={24} >
      <Image src={imgFreelancer} preview={false} />
    </Col>
  </Row>
  )
}

export default Banner