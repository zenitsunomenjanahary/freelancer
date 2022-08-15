import React, { useState } from 'react'
import {Steps,Layout} from "antd";
import StepOneFormRegister from './StepOneFormRegister';
import { useCallback } from 'react';
import StepTwoFormRegister from './StepTwoFormRegister';
import StepThreeFormRegister from './StepThreeFormRegister';

const { Step } = Steps;

const RegisterForm = () => {
    
    const [step, setStep] = useState(0);

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [type, setType] = useState();
    const [password, setPassword] = useState();

    const Information = {
        name,email,type,password
    }

    const handlePrevStep = ()=>{
        setStep((prevStep)=>(prevStep - 1))
    }
    const handleNextStep = ()=>{
        setStep((prevStep)=>(prevStep + 1))
    }

    const handleSubmit = ()=> {
        console.log(Information);
    }

  return (
    <Layout style={{ padding:"2rem 5rem 3rem 5rem"}}>
        <Steps current={step}>
            <Step title="Personal Information"/>
            <Step title="Account Type"/>
            <Step title="Recapitulation"/>
        </Steps>
        { step === 0 && <StepOneFormRegister data={Information} setName={setName} setEmail={setEmail}  onFinish={handleNextStep} />}
        { step === 1 && <StepTwoFormRegister data={Information} setType={setType} setPassword={setPassword} onFinish={handleNextStep} onBack={handlePrevStep} />}
        { step===2 && <StepThreeFormRegister data={Information} handleSubmit={handleSubmit}/>}
    </Layout>
  )
}

export default RegisterForm