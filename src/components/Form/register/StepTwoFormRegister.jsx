import React from 'react'
import { Form,Row,Col,Layout, Button,Input,Space,Typography,Carousel,Image, Divider, Radio } from "antd";
import { accountTypeChoices, registerSlideItemsStepTwo } from '../../../data/data';


const { Title,Text } = Typography

const StepTwoFormRegister = ({data,onFinish,setType,setPassword,onBack}) => {
  return (
    <Row style={{ marginTop: "1rem",boxShadow:"3px 2px 5px black", borderTopLeftRadius:"1rem",borderBottomRightRadius:"1rem", overflow:"hidden",background:"#001529"}}>
        <Col lg={12} md={12} sm={24} xs={24}>
            <Carousel autoplay>
                {
                    registerSlideItemsStepTwo.map((item, key)=>(
                        <div key={key}>
                            <Layout style={{ background:"#001529", padding:"2rem 2rem",textAlign:"center", minHeight:"600px", display:"flex", justifyContent:"center"}}>
                                <Title level={3} style={{ color:"white"}}>{item.heading}</Title>
                                <Divider style={{ background:"red", height:"3px"}} />
                                <Row>
                                    {
                                        item.items.map((card,key)=>(
                                            <Col lg={12} md={12} sm={12} xs={24}>
                                                <Space direction='vertical' style={{ marginBottom:"1rem",width:"90%", paddingTop:"2rem",paddingBottom:"2rem", boxShadow:"2px 2px 5px black" ,borderRadius:"10px"}}>
                                                    {card.icon}
                                                    <Text style={{ color:"white"}}>{card.text}</Text>
                                                </Space>
                                            </Col>
                                        ))
                                    }
                                </Row>
                            </Layout>
                        </div>
                    ))
                }
            </Carousel>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24} style={{padding:"2rem 2rem 2rem 2rem", background:"white"}}>
            <Title level={3} style={{ textAlign:"center"}} >SignUp</Title>
            <Form onFinish={onFinish} initialValues={data} layout="vertical">
                <Form.Item name="accountType" label="account type" rules={[{required:true, message:"Please choose your account type"}]} hasFeedback>
                    <Radio.Group name='accountType'  value={data.type} onChange={(e)=> setType(e.target.value)} optionType='button'  buttonStyle='solid' style={{ padding:"1rem 1rem 1rem 1rem", display:"flex", justifyContent:"center" }}>
                        {
                            accountTypeChoices.map((choice)=>(
                                <Radio.Button key={choice.value} value={choice.value} style={{ height:"250px"}}>
                                    <Space direction='vertical' align='center'>
                                        <Image src={choice.image} alt={choice.value} preview={false} style={{ borderRadius:"10px", width:"250px", marginTop:"2rem"}}/>
                                        <Text>{choice.label}</Text>
                                    </Space>
                                </Radio.Button>
                            ))
                        }
                    </Radio.Group>
                </Form.Item>
                <Form.Item name={"password"} label="password" rules={[{required:true,message:"Please enter your password"}]}>
                    <Input.Password name='password' value={data.Password} onChange={(e)=> setPassword(e.target.value)}/>
                </Form.Item>
                <Form.Item>
                    <Space>
                        <Button type='primary' onClick={onBack}>back</Button>
                        <Button type='primary' htmlType='submit'>register</Button>
                    </Space>
                </Form.Item>
            </Form>
        </Col>
    </Row>
  )
}

export default StepTwoFormRegister