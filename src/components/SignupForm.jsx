import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const SignupForm = () => {
    const [name, setName] = useState('');
    const [userName, setuserName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setmobile] = useState('');
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const [nameError, setnameError] = useState('');
    const [usernameError, setusernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [mobileError, setmobileError] = useState('');
    const [termsError, setTermsError] = useState('');

    const handleRegistration = () => {
        // Reset error messages
        setnameError('');
        setusernameError('');
        setEmailError('');
        setmobileError('');
        setTermsError('');

        // Validate fields
        if (!name) {
            setnameError(' name is required');
        }
        if (!userName) {
            setusernameError('user name is required')
        }
        if (!email) {
            setEmailError("email is required");
        }
        if (!mobile) {
            setmobileError("mobile number is required ")
        }
       
        if (!acceptedTerms) {
            setTermsError('Check this box if you want to proceed');
        }

       
        if (nameError || usernameError || emailError || mobileError || termsError) {
            return;
        }

        
        const registrationData = { name, userName, email, mobile };
        localStorage.setItem('registrationData', JSON.stringify(registrationData));

        
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setAcceptedTerms(false);
        
    };



    return (
        
        <div className='form'>
            <h2 className='registration-page-heading'>Super App</h2>
            <h4>Create your new account</h4>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <input
            className='input-box'
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            </Form.Group>

            <span className="error">{nameError}</span>
            <br />
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <input
             className='input-box'
                type="text"
                placeholder="Username"
                value={userName}
                onChange={(e) => setuserName(e.target.value)}
            />
             </Form.Group>
            <span className="error">{usernameError}</span>
            <br />
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <input
                type="email"
                className='input-box'
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
             </Form.Group>
            <span className="error">{emailError}</span>
            <br />
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <input
                type="number"
                className='input-box'
                placeholder="mobile"
                value={mobile}
                onChange={(e) => setmobile(e.target.value)}
            />
            <br />
            <span className="error">{mobileError}</span>

            </Form.Group>
           
            <br />
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <label>
                <input
                    type="checkbox"
                    checked={acceptedTerms}
                    onChange={() => setAcceptedTerms(!acceptedTerms)}
                />
               Share my registration data with Superapp
            </label>
            </Form.Group>
            <span className="error">{termsError}</span>
            <br />
            <button onClick={handleRegistration} className='my-btn'>Sign Up</button>
            <br />
            <div className='registration-footer'>
                <p>
                    By clicking on Sign up. you agree to Superapp <a href="" style={{ color: "rgba(114, 219, 115, 1)" }}>Terms and Conditions of Use</a>
                </p>
                <p>
                    To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <a href="https://github.com/arishsaifi/privacy-policy" target='_blank' style={{ color: "rgba(114, 219, 115, 1)" }}>Privacy Policy</a>
                </p>
            </div>
        </div>
    );
}

export default SignupForm;