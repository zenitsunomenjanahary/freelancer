import React , {useState} from 'react'
import { Layout, Carousel,Typography,Image, Space,Input,Button,Form, Row, Col,Steps} from "antd";
import { registerSlideItems } from '../data/data';
import {AiOutlineUser,AiOutlineMail} from "react-icons/ai"

const { Title } = Typography;
const { Step } = Steps;

const StepOne = ({data, handleNextStep})=>{
    return(
        <Row style={{ marginTop: "1rem"}}>
            <Col lg={12} md={12} sm={12} xs={24}>
                <Carousel autoplay>
                    {
                        registerSlideItems.map((item, key)=>(
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
            <Col lg={12} md={12} sm={12} xs={24} style={{padding:"2rem 2rem 2rem 2rem"}}>
                <Title level={3}>SignUp</Title>
                <Form onFinish={handleNextStep}>
                    <Form.Item name={"name"} label="name" rules={[{required:true, message:"Please enter your name"},{min:3, message:"Name must be more than 2 character"}]} hasFeedback>
                        <Input name='name' value={data.name} prefix={<AiOutlineUser/>} />
                    </Form.Item>
                    <Form.Item name={"email"} label="email" rules={[{required:true, message:"Please enter your email"},{type:"email", message:"please enter a valid email"}]} hasFeedback>
                        <Input name='email' value={data.email} prefix={<AiOutlineMail/>} />
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit'>Proceed</Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}

const StepTwo = ({data, handlePreviousStep, handleNextStep})=>{
    return(
        <></>
    )
}

const Register = () => {
    const [step, setStep] = useState(0);

    const [name, setName ] = useState("");
    const [email, setEmail ] = useState("");
    const [accounType, setAccountType] = useState("");
    const [data,setData] = useState({name,email,accounType})

    const handleNextStep = ()=>{
        setData(data);
        setStep((prevStep)=> prevStep + 1)
        console.log(data);
    }

    const handlePreviousStep = ()=>{
        setData(data)
        setStep((prevStep)=> prevStep - 1)
        console.log(data);
    }

  return (
    <Layout style={{ background:"white", padding:"2rem 5rem 3rem 5rem"}}>
        <Steps current={step}>
            <Step title="Personal Information"/>
            <Step title="Account Type"/>
            <Step title="blabla"/>
        </Steps>
        { step === 0 && <StepOne data={data} setData={setData} handleNextStep={handleNextStep} />}
        { step === 1 && <StepTwo data={data} handlePreviousStep={handlePreviousStep} handleNextStep={handleNextStep} />}
    </Layout>
  )
}

export default Register