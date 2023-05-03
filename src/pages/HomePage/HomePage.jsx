import { Link } from 'react-router-dom';
import "./HomePage.css"

export default function HomePage(){
    return (
        <div className="container my-5">
            <div className="mx-auto">
                <div className="row justify-content-center">
                     <p className="col-8 text-center homepage-text"> Hi, welcome to my portfolio website, where I showcase my passion for full-stack web development and mechanical engineering.</p>    
                </div>
                <div >
                    <button style={{width:200, height:60}} className="homepage-text-button m-4">
                        <Link className='button-text' to="https://www.linkedin.com/in/samuel-prasad/">LinkedIn</Link>
                    </button>
                    <button style={{width:200, height:60}} className="homepage-text-button m-4">
                        <Link className='button-text' to="https://github.com/dodoslayer98">GitHub</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}