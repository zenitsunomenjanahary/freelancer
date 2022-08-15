import React from 'react'
import { Typography, Layout,Row,Col,Space, Button } from 'antd'
import { categoryFreelancers } from '../data/data';

const { Title,Text } = Typography;

const CategoryFreelancer = () => {
  return (
    <Layout style={{ background:"white",padding:"2rem 6rem 2rem 6rem", marginTop:"5rem"}}>
        <Title style={{textAlign:"center"}}>Find top freelancers</Title>
        <Row>
            {
                categoryFreelancers.map((category)=>(
                    <Col lg={8} md={12} sm={24} style={{ padding:"1rem"}}>
                        <Space direction='vertical' align='center' size={"middle"} style={{ paddingTop:"1rem",paddingBottom:"1rem", boxShadow:"2px 2px 5px #001529", width:"100%" }}>
                            {category.icon}
                            <Title level={5} style={{margin:"0 auto"}}> {category.title} </Title>
                            <Text> {category.amount} </Text>
                        </Space>
                    </Col>
                ))
            }
        </Row>
        <Space style={{ justifyContent:"center"}}>
            <Button type='primary'>See All Skills</Button>
        </Space>
    </Layout>
  )
}

export default CategoryFreelancer