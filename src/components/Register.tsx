import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react';

const Register = () => {

    const userRegex = /^[a-zA-Z][a-zA-Z0-9_]{2,19}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,}$/;

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [usernameValid, setUsernameValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);

    const [passwordMatch, setPasswordMatch] = useState('');
    const [passMatchValid, setPassMatchValid] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');
    const [sucess, setSucess] = useState(false);

    const userRef = useRef<HTMLInputElement | null>(null);
    const errRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        userRef.current?.focus();
    }, [])

    useEffect(() => {
        const result = userRegex.test(userName);
        console.log(result);
        console.log(userName);
        setUsernameValid(result);
    }, [userName])

    useEffect(() => {
        const result = passwordRegex.test(password);
        console.log(result);
        console.log(password);
        setPasswordValid(result);

        const match = password === passwordMatch;
        setPassMatchValid(match);

    }, [password, passwordMatch])

    // FOR ERROR MESSAGE
    useEffect(() => {
        setErrorMessage('');
    }, [userName, password, passwordMatch])

    // useEffect(() => {
    //     if (!usernameValid || !passwordValid || !passMatchValid) {
    //         setErrorMessage('There are validation errors. Please check the form.');
    //     } else {
    //         setErrorMessage('');
    //     }
    // }, [userName, password, passwordMatch, usernameValid, passwordValid, passMatchValid]);

    const handleSubmit = () => {
        if (usernameValid && passwordValid && passMatchValid) {
            setSucess(true);
        }
    }

    return (
        <section className='flex flex-col bg-slate-50 max-w-[50%]'>
            <h1>Register</h1>
            <form>
                <input
                    type="text"
                    id='username'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                    placeholder='Username'
                />
                <input
                    type="password"
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder='Password'
                />
                <input
                    type="password"
                    id='confirmPass'
                    value={passwordMatch}
                    onChange={(e) => setPasswordMatch(e.target.value)}
                    required
                    placeholder='Confirm Password'
                />

                <p ref={errRef} style={{ color: 'red' }}>
                    {errorMessage}
                </p>

                <button
                    type='submit'
                    onClick={handleSubmit}
                >
                    Register
                </button>
                {sucess ? (
                    <p style={{ color: 'green' }}>Registration successful!</p>
                ) : (
                    <p style={{ color: 'red' }}>Registration failed!</p>
                )}
            </form>
        </section>
    )
}

export default Register