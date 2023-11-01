import { ChangeEvent, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const initialFormData = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const [formData, setFormData] = useState(initialFormData);
    const [passMatchError, setPassMatchError] = useState(false);
    const [submissionSuccess, setSubmissionSuccess] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setPassMatchError(true);
            setSubmissionSuccess(false);
            console.log('Password mismatch!')

        } else {
            setPassMatchError(false);
            setSubmissionSuccess(true);
            console.log(formData);
            setFormData(initialFormData); // to clear the form when sucess
            navigate('/login')
        }
    };

    return (
        <section className='form-container flex flex-col items-center justify-between bg-slate-400 w-[40%] rounded-[25px] py-[7rem]'>
            <h1 className=' text-[2.5rem] text-white font-bold pb-[1rem]'>Registration Form</h1>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <div className='input-container'>
                    <FontAwesomeIcon icon={faUser} className='icon-input bg-slate-700 hover:bg-slate-300 hover:text-slate-700 hover:font-bold' />
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder='First Name'
                        className='input'
                    />
                </div>

                <div className='input-container'>
                    <FontAwesomeIcon icon={faUser} className='icon-input bg-slate-700 hover:bg-slate-300 hover:text-slate-700 hover:font-bold' />
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        placeholder='Last Name'
                        className='input'
                    />
                </div>

                <div className='input-container'>
                    <FontAwesomeIcon icon={faEnvelope} className='icon-input bg-slate-700 hover:bg-slate-300 hover:text-slate-700 hover:font-bold' />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder='Email'
                        className='input'
                    />
                </div>

                <div className='input-container'>
                    <FontAwesomeIcon icon={faLock} className='icon-input bg-slate-700 hover:bg-slate-300 hover:text-slate-700 hover:font-bold' />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        placeholder='Password'
                        className='input'
                    />
                </div>

                <div className='input-container'>
                    <FontAwesomeIcon icon={faKey} className='icon-input bg-slate-700 hover:bg-slate-300 hover:text-slate-700 hover:font-bold' />
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        placeholder='Confirm Password'
                        className='input'
                    />
                </div>

                <button
                    type="submit"
                    className=' bg-slate-700 text-slate-100 text-[1rem] font-medium rounded-[10px] py-[.8rem] mt-[1.5rem] hover:bg-slate-300 hover:text-slate-700 hover:font-bold'
                >
                    Register
                </button>
            </form>
        </section>
    );
}

export default Register;
