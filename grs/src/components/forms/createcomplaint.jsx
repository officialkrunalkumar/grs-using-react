import React,{useState} from 'react'
import { Form } from 'react-bootstrap';
import NavbarBase from '../NavbarBase';
import '../../static/main.css';
import Footer from '../footer';
import { useHistory } from "react-router-dom";

const Createcomplaint = (props) => {
    const initComplaint = {
        id: null,
        title: "",
        description: "",
        user: ""
    }
    const history = useHistory();
    const [complaint, setComplaint] = useState(initComplaint);

    const handleChange = e => {
        const {name, value} = e.target;
        setComplaint({...complaint, [name]: value});
    }

    const handleSubmit = e => {
        console.log('handle cliked');
        e.preventDefault();
        if (complaint.title && complaint.user && complaint.description) {
           handleChange(e);
           props.createComplaint(complaint);
           let path = `/complaint`;
           history.push(path);
        }
        else{
            var text="Please fill all the data.";
            document.getElementById("validity").innerHTML = text;
            document.getElementById("validity").style.color = "red";
        }
    }
    return (
        <>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
         <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
        <div id="home">
        <NavbarBase />
        <div id="krunal">
        <div className="container h-100" />
        <div className="d-flex justify-content-center h-100" />
            <div className="row mt-5">
                <Form className="col-md-6 mx-auto">
                <h2 className="mt-2 mb-5">Add Complaint</h2>
                <Form.Group controlId="title" className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" value={complaint.title} placeholder="Complaint in Brief" onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="email" className="mb-3">
                    <Form.Label>Cohort</Form.Label>
                    <Form.Control type="email" name="user" value={complaint.user} placeholder="Your Cohort" onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="textarea" className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" name="description" value={complaint.description} placeholder="Describe Your Complaint" rows={3} onChange={handleChange} />
                    <p id="valid" className="text-right"></p>
                </Form.Group>
                <p id="validity"></p>
                <button className="btn btn-outline-success my-3 mx-auto" onClick={handleSubmit} type="submit">Submit</button>
                </Form>
            </div>
            </div>
            <Footer />
        </div>
        </>
    )
}

export default Createcomplaint;
