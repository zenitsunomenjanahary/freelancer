import { NavLink } from "react-router-dom";
import clientSatisfy from "../images/customerSatisfaction.png";
import flexiblePlatformImg from "../images/payments.png"
import secure from "../images/secure.png"
import transaction from "../images/transaction.png"
import {BsFillBagFill} from "react-icons/bs"
import {SiWebmoney,SiWritedotas} from "react-icons/si"
import {AiOutlineDollar,AiFillSetting} from "react-icons/ai"
import {ImUserTie} from "react-icons/im"
import {HiCode} from "react-icons/hi"
import {GiWorld,GiTakeMyMoney,GiCooler} from "react-icons/gi"
import {FaHandHoldingUsd,FaLock,FaBalanceScaleLeft,FaMoneyCheckAlt,FaSortAmountUpAlt} from "react-icons/fa"
import {MdRealEstateAgent,MdOutlineTouchApp,MdDesignServices,MdCastForEducation,MdEngineering,MdBusinessCenter} from "react-icons/md"
import employerImg from "../images/client.png";
import freelancerImg from "../images/freelancer.png";

export const headerItems = [
    {
        key: "home",
        icon: "",
        label: <NavLink to={"/"}>Home</NavLink>
    },
    {
        key: "projects",
        icon: "",
        label: <NavLink to={"/projects"}>Projects</NavLink>
    },
    {
        key: "lecteurs",
        icon: "",
        label: <NavLink to={"/freelancers"}>Freelancers</NavLink>
    },
    {
        key: "livres",
        icon: "",
        label: <NavLink to={"/clients"}>Clients</NavLink>
    },
]

export const registerSlideItemsStepOne = [
    {
        heading: "Grow with antsika",
        title: "99% Customer Satisfaction",
        description: "Based on paid invoices",
        illustration: clientSatisfy,
    },
    {
        heading: "Grow with antsika",
        title: "Flexible Platform",
        description: "Choose from four Payment terms",
        illustration: flexiblePlatformImg,
    },
    {
        heading: "Grow with antsika",
        title: "Payment Protection",
        description: "Secure your transactions with SafePay",
        illustration: secure,
    },
    {
        heading: "Grow with antsika",
        title: "Lowest Transaction Fees",
        description: "Get maximum value at minimum cost",
        illustration: transaction,
    },
]

export const registerSlideItemsStepTwo = [
    {
        heading: "as an Employer",
        items: [
            {
                icon:<BsFillBagFill color="white" size={33}/>,
                text:"Post Unlimited Jobs"
            },
            {
                icon:<SiWebmoney color="white" size={33}/>,
                text:"Access Global Talent Pool"
            },
            {
                icon:<MdRealEstateAgent color="white" size={33}/>,
                text:"Evaluate Quotes & Hire Freelancers"
            },
            {
                icon:<FaHandHoldingUsd color="white" size={33}/>,
                text:"Pay Using 5 Secure Options"
            },
        ]
    },
    {
        heading: "as a Freelancer",
        items: [
            {
                icon:<GiWorld color="white" size={33}/>,
                text:"Access Global Job Opportunities"
            },
            {
                icon:<MdOutlineTouchApp color="white" size={33}/>,
                text:"Apply to Jobs Using Quotes"
            },
            {
                icon:<FaMoneyCheckAlt color="white" size={33}/>,
                text:"Use SafePay to Get paid Securely"
            },
            {
                icon:<FaLock color="white" size={33}/>,
                text:"Withdraw Funds Using 4 Secure Options"
            },
        ]
    },
]

export const accountTypeChoices = [
    {
        label:"Freelancer",
        value:"Freelancer",
        image:freelancerImg
    },
    {
        label:"Employer",
        value:"Employer",
        image:employerImg
    },
]

export const bannerItems = [
    {
        icon: <ImUserTie size={33}/>,
        text: 'Employers Worldwide',
        amount: "8000,000"
    },
    {
        icon: <AiOutlineDollar size={33}/>,
        text: 'Paid Invoices',
        amount: "1 Million"
    },
    {
        icon: <GiTakeMyMoney size={33}/>,
        text: 'Paid to Freelancers',
        amount: "8000,000"
    },
    {
        icon: <GiCooler size={33}/>,
        text: 'Customer Satisfaction',
        amount: "99%"
    },
]

export const categoryFreelancers = [
    {
        icon:<HiCode size={33}/>,
        title:"Programming & Development",
        amount: "306,542 Freelancers"
    },
    {
        icon:<MdDesignServices size={33}/>,
        title:"Design & Art",
        amount: "306,542 Freelancers"
    },
    {
        icon:<SiWritedotas size={33}/>,
        title:"Writing & Translation",
        amount: "306,542 Freelancers"
    },
    {
        icon:<AiFillSetting size={33}/>,
        title:"Administrative & Secretarial",
        amount: "306,542 Freelancers"
    },
    {
        icon:<FaSortAmountUpAlt size={33}/>,
        title:"Sales & Marketing",
        amount: "306,542 Freelancers"
    },
    {
        icon:<MdEngineering size={33}/>,
        title:"Engineering & Architecture",
        amount: "306,542 Freelancers"
    },
    {
        icon:<MdBusinessCenter size={33}/>,
        title:"Business & Finance",
        amount: "306,542 Freelancers"
    },
    {
        icon:<MdCastForEducation size={33}/>,
        title:"Education & Training",
        amount: "306,542 Freelancers"
    },
    {
        icon:<FaBalanceScaleLeft size={33}/>,
        title:"Legal",
        amount: "306,542 Freelancers"
    },
]