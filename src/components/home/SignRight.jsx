import {useState} from 'react'


const SignRight = () => {
    const [name, setName] = useState('')
    const [userName,setuserName] = useState('')
    const [email,setEmail] = useState('')
    const [mobile,setmobile] = useState('')
    const [acceptedTerms,setAcceptedTerms] = useState('')

    const [nameError,setnameError] = useState('')
    const [usernameError,setusernameError] = useState('')
    const [emailError,setEmailError] = useState('')
    const [mobileError,setmobileError] = useState('')
    const [termsError,setTermsError] = useState('')

    const handleRegistration = (e) => {
        // Reset error messages
        e.preventDefault();

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
        <form>
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