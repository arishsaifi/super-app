import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignRight = () => {
    const [name, setName] = useState('')
    const [userName, setuserName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setmobile] = useState('')
    const [acceptedTerms, setAcceptedTerms] = useState('')

    const [nameError, setnameError] = useState('')
    const [usernameError, setusernameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [mobileError, setmobileError] = useState('')
    const [termsError, setTermsError] = useState('')

    let valid = true
    const navigate = useNavigate()

    const handleRegistration = (event) => {

        event.preventDefault();

        setnameError('');
        setusernameError('');
        setEmailError('');
        setmobileError('');
        setTermsError('');


        if (!name) {
            setnameError(' name is required');
            valid = false
        }

        if (!userName) {
            setusernameError('user name is required')
            valid = false
        }

        if (!email) {
            setEmailError("email is required");
            valid = false
        }

        if (!mobile) {
            setmobileError("mobile number is required ")
            valid = false
        }

        if (!acceptedTerms) {
            setTermsError('Check this box if you want to proceed');
            valid = false
        }

        if (nameError || usernameError || emailError || mobileError || termsError) {
            return;
        }

        if (valid) {
            console.log("succ")
            navigate("/genre")
        }

        const registrationData = { name, userName, email, mobile };
        localStorage.setItem('registrationData', JSON.stringify(registrationData));

        setName('');
        setuserName('');
        setEmail('');
        setmobile('');
        setAcceptedTerms(false);

    };


    return (
        <div className='form'>
            <h2 className='registration-page-heading'>Super App</h2>
            <h4>Create your new account</h4>
            <form >
                <input
                    className='input-box'
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <span className="error">{nameError}</span>
                <br />
                <input
                    className='input-box'
                    type="text"
                    placeholder="Username"
                    value={userName}
                    onChange={(e) => setuserName(e.target.value)}
                />
                <br />
                <span className="error">{usernameError}</span>
                <br />

                <input
                    type="email"
                    className='input-box'
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <span className="error">{emailError}</span>
                <br />

                <input
                    type="number"
                    className='input-box'
                    placeholder="mobile"
                    value={mobile}
                    onChange={(e) => setmobile(e.target.value)}
                />
                <br />
                <span className="error">{mobileError}</span>



                <br />

                <label>
                    <input
                        type="checkbox"
                        checked={acceptedTerms}
                        onChange={() => setAcceptedTerms(!acceptedTerms)}
                    />
                    Share my registration data with Superapp
                </label>
                <br />
                <span className="error">{termsError}</span>
                <br />
                <button onClick={handleRegistration} className='my-btn'>Sign Up</button>
                {/* <button className='my-btn ' placeholder='har'/> */}
            </form>
            <div className='registration-footer'>
                <p>
                    By clicking on Sign up. you agree to Superapp <a href="" style={{ color: "rgba(114, 219, 115, 1)" }}>Terms and Conditions of Use</a>
                </p>
                <p>
                    To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <a href="https://github.com/arishsaifi/privacy-policy" target='_blank' style={{ color: "rgba(114, 219, 115, 1)" }}>Privacy Policy</a>
                </p>
            </div>
        </div>
    )
}

export default SignRight