import React, {useState } from "react"
import { Form, Button, Container} from "react-bootstrap"
import {projectFirestore} from "../firebase.js"

export default function EmailSignUp(){

    const[name, setName] = useState("");  
    const[email, setEmail] = useState("");  

    const [loading, setLoading] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();

        projectFirestore.collection('emails').add({
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
        <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
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
        </div>
        </Container>
    )
}
