import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "./ProjectPage.css"

export default function ProjectPage(){
    return (
        <div className='container d-flex justify-content-center'>
            <Card style={{ width: '18rem' }} className='m-4'>
                <Card.Img variant="top" src="https://i.imgur.com/WNWsIb2.png" />
                <Card.Body>
                    <Card.Title>Fujigram</Card.Title>
                    <Card.Text className='card-text-project'>
                        Image sharing full-stack Django app 
                    </Card.Text>
                    <Button variant="outline-dark">
                        <Link className='button-text' to="https://fujigram.herokuapp.com/posts/">Visit</Link>
                    </Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className='m-4'>
                <Card.Img variant="top" src="https://i.imgur.com/pJMj8WX.png" />
                <Card.Body>
                    <Card.Title>Flashy Grain</Card.Title>
                    <Card.Text className='card-text-project'>
                        E-Commerce shop for film cameras, MERN stack. 
                    </Card.Text>
                    <Button variant="outline-dark">
                        <Link className='button-text' to="https://flashy-grain.herokuapp.com/home">Visit</Link>
                    </Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className='m-4'>
                <Card.Img variant="top" src="https://i.imgur.com/CC3zQb2.jpg" />
                <Card.Body>
                    <Card.Title>Plate</Card.Title>
                    <Card.Text className='card-text-project'>
                        Food review sharing full stack MEN app. 
                    </Card.Text>
                    <Button variant="outline-dark" >
                        <Link className='button-text' to="http://plate.herokuapp.com/">Visit</Link>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}
