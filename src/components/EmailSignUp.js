import React, {useState } from "react"
import { Form, Button} from "react-bootstrap"
import {db} from "../firebase.js"

export default function EmailSignUp(){

    const[name, setName] = useState("");  
    const[email, setEmail] = useState("");  

    const [loading, setLoading] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('emails').add({
            name: name,
            email: email,
        })
        .then(() =>{
            alert('Email has been successfully added to mailing list')
        })
        .catch((error) =>{
            alert(error.message);
        });

        setLoading(false)
        setName("")
        setEmail("")
    }; 

    return(
        <>
        
        <h2 className="text-center mb-4">Sign Up for Our Mailing List!</h2>

        <Form onSubmit={handleSubmit}>
             <Form.Group 
             id="name">           
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" required placeholder="Enter Name" onChange={(e)=> setName(e.target.value)}/>
            </Form.Group>
            <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" required placeholder="Enter Email" onChange={(e)=> setEmail(e.target.value)}/>
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Submit
            </Button>
        </Form>
        
        </>
    )
}
