import { Form, Row, Col, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ConnectButton from "../../../components/connect";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../../../actions/alert';
import { register } from '../../../actions/masterAuth';

const MasterSignUp = ({ setAlert, register, isAuthenticated, wallet }) => {

    const [validated, setValidated] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const [email, setEmail] = useState();
    const [name, setUsername] = useState();
    const [password, setPassword] = useState();
    const [passwordt, setPasswordT] = useState();

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

        if (password !== passwordt) {
            setAlert('Passwords do not match', 'danger');
        } else {
            setLoading(true);
            register(name, email, password, wallet);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/master/signin'); 
        }
    }, [isAuthenticated, navigate]);

    return (
        <section className=''>
            <div className='header primary-bg'>
                <div className='m-auto w-90'></div>
            </div>
            <br />
            <h1 className='text-center'>M a s t e r</h1>
            <hr />
            <br />
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
                            <Form.Group as={Col} md="12" controlId="form01">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="John Doe"
                                    onChange={(e)=>setUsername(e.target.value)}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mt-2" as={Col} md="12" controlId="form02">
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
                            <Form.Group className="mt-2" as={Col} md="12" controlId="form04">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    required
                                    type="password"
                                    placeholder="Confirm Password"
                                    onChange={(e)=>setPasswordT(e.target.value)}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <button className='btn btn-primary w-100 mb-4' md="12" type="submit"> { isLoading ? loading : "Sign Up" } </button>
                    </Form>
                </div>
            </div>
        </section>
    );
}

MasterSignUp.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};
  
const mapStateToProps = (state) => ({
    isAuthenticated: state.masterAuth.isAuthenticated,
    wallet: state.wallet.wallet
});
  
export default connect(mapStateToProps, { setAlert, register })(MasterSignUp);