import React from 'react'
import { Form,Row,Col, Button,Input,Space,Typography,Carousel,Image } from "antd";
import { AiOutlineUser,AiOutlineMail} from "react-icons/ai";
import { registerSlideItemsStepOne } from '../../../data/data';

const { Title } = Typography;

const StepOneFormRegister = ({ data,onFinish, setName, setEmail }) => {
    
  return (
    <Row style={{ marginTop: "1rem",boxShadow:"3px 2px 5px black", borderTopLeftRadius:"1rem",borderBottomRightRadius:"1rem", overflow:"hidden",background:"#001529"}}>
        <Col lg={12} md={12} sm={12} xs={24}>
            <Carousel autoplay>
                {
                    registerSlideItemsStepOne.map((item, key)=>(
                        <div key={key}>
                            <Space direction='vertical' align='center' style={{ display:"flex", justifyContent:"center", alignItems:"center", background:"#001529", width:"100%", height:"600px"}}>
                                <Title level={3} style={{ color:"whitesmoke"}}>{item.heading}</Title>
                                <Image src={item.illustration} preview={false} width={400} style={{borderRadius:"10px"}}/>
                                <Title level={4} style={{ color:"whitesmoke"}}>{item.title}</Title>
                                <Title level={5} style={{ color:"whitesmoke"}}>{item.description}</Title>
                            </Space>
                        </div>
                    ))
                }
            </Carousel>
        </Col>
        <Col lg={12} md={12} sm={12} xs={24} style={{padding:"2rem 2rem 2rem 2rem", background:"white"}}>
            <Title level={3}>SignUp</Title>
            <Form onFinish={onFinish} initialValues={data}>
                <Form.Item label="name" name={"name"} rules={[{required:true, message:"Please enter your name"},{min:3, message:"Name must be more than 2 character"}]} hasFeedback >
                    <Input name='name' prefix={<AiOutlineUser/>} value={data.name} onChange={(e)=> setName(e.target.value)}  />
                </Form.Item>
                <Form.Item label="email" name={"email"} rules={[{required:true, message:"Please enter your email"},{type:"email", message:"please enter a valid email"}]} hasFeedback >
                    <Input name='email' prefix={<AiOutlineMail/>} value={data.email} onChange={(e)=> setEmail(e.target.value)} />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>Next</Button>
                </Form.Item>
            </Form>
        </Col>
    </Row>
  )
}

export default StepOneFormRegister