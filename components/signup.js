import Head from 'next/head'
import Link from 'next/link'
import { useForm } from "react-hook-form";
import styles from '../styles/SignUp.module.css';
import { motion } from "framer-motion";
import { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Image from 'next/image';
import cx from 'classnames';

export default function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const variants = {
        hidden: { opacity: 0, x: 100, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
    }

    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [userName,setUserName]=useState("");
    const [gstNumber,setGstNumber]=useState("");
    const [location,setLocation]=useState("");
    const [restaurantName,setRestaurantName]=useState("");

    const onSubmit = (e) => {
        
    }
    const backHomePage =(e)=>{
        
    }

    return (

<>
 <Head>
 <title>Sign Up</title>
</Head>
<motion.main
   variants={variants}// Pass the variant object into Framer Motion 
    initial="hidden" // Set the initial state to variants.hidden
    animate="enter" // Animated state to variants.enter
    exit="exit" // Exit state (used later) to variants.exit
    transition={{ type: 'linear' }} // Set the transition to linear
    
>
<form>

<h1 className={styles.heading}>Sign Up</h1><br/><br/>

<TextField label="Email" variant="outlined" color= "primary"  value={email} onChange={(e) => {    setEmail(e.target.value);    }}/>    <br/><br/>
<TextField label="User Name" variant="outlined"  color= "primary"  value={userName} onChange={(e) => {setUserName(e.target.value);}}/>
<br/><br/>
<TextField label="Full Name" variant="outlined"  color= "primary"  value={fullName} onChange={(e) => {setFullName(e.target.value);}}/>
<br/><br/>
<TextField label="Restaurant Name" variant="outlined"  color= "primary"  value={restaurantName} onChange={(e) => {setRestaurantName(e.target.value);}}/>
<br/><br/>
<TextField label="Location" variant="outlined"  color= "primary"  value={location} onChange={(e) => {setLocation(e.target.value);}}/>
<br/><br/>
<TextField label="Phone Number" variant="outlined"  color= "primary"  value={phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value);}}/>
<br/><br/>
<TextField label="GST Number" variant="outlined"  color= "primary"  value={gstNumber} onChange={(e) => {setGstNumber(e.target.value);}}/>
<br/><br/>

  <button className={styles.button1} onClick={onSubmit}>Register</button> <br/>

  </form>
 

  </motion.main>
  </>    );
    };