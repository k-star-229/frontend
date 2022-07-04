import { Form, Row, Button, Col, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ConnectButton from "../../../components/connect";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../../actions/clientAuth';

const ClientSignIn = ({ login, isAuthenticated }) => {

    const [validated, setValidated] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    let navigate = useNavigate();

    const loading = (
        <>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </>
    );
        
    const handleSubmit = async (event) => {
        event.preventDefault();
        

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

        setLoading(true);
        login(email, password);
        setLoading(false);
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/client'); 
        }
    }, [isAuthenticated, navigate]);
    
    return (
        <section className=''>
            <div className='header primary-bg'>
                <div className='m-auto w-90'>

                </div>
            </div>
            <br />
            <h1 className='text-center'>Client SignIn</h1>
            <hr />
            <br />
            <h3 className='text-center'>Welcome back to Trading DApp.</h3>
            <br />
            <div className='d-flex flex-column'>
                <div className='d-flex justify-content-center'>
                    <div style={{width: "500px"}}>
                        <ConnectButton />
                    </div>
                </div>
                <div className='d-flex justify-content-center' >
                    <Form style={{width: "500px"}} noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="form02">
                                <Form.Label>E-Mail-Address</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    placeholder="xxx@gmail.com"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mt-2" as={Col} md="12" controlId="form03">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    required
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Button className='w-100 mb-4' md="12" type="submit" varient="primary"> { isLoading ? loading : "Sign In" } </Button>
                        <p className="my-1">
                            Don't have an account? <Link to="/client/signup">Create One</Link>
                        </p>
                    </Form>
                </div>
            </div>
            
        </section>
    );
}

ClientSignIn.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.clientAuth.isAuthenticated,
    wallet: state.wallet.wallet
});

export default connect(mapStateToProps, { login })(ClientSignIn);