import React from 'react'
import { Col,Row, Layout, Space,Typography} from "antd"
import { bannerItems } from '../data/data'

const { Title,Text } = Typography

const BannerItems = () => {
  return (
    <Layout>
        <Row>
            {
                bannerItems.map((item,key)=>(
                    <Col lg={6} md={6} sm={12} xs={24}>
                        <Space size={"large"} style={{ padding:"1rem"}}>
                            {item.icon}
                            <Space direction='vertical' size={"small"}>
                                <Title level={3} style={{ marginBottom:0}}> {item.amount} </Title>
                                <Title level={5}> {item.text} </Title>
                            </Space>
                        </Space>
                    </Col>
                ))
            }
        </Row>
    </Layout>
  )
}

export default BannerItems