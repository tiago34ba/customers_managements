import Carousel from '../../components/Carousel';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as validation from './validator';
import { LoginInterface } from '../../interfaces/login';
import { ReactComponent as LogoGoogleImg } from '../../assets/logo-google.svg';


const Login = () => {
    const {register, handleSubmit, formState: { errors } } = useForm<LoginInterface>({
        resolver: yupResolver(validation.loginSchema)
    });
    const onSubmit = handleSubmit(data => console.log(data));

    return (
        
        <div className="flex flex-row">
            <div className="basis-1/2 hidden md:block "><Carousel/></div>
            

            <div className="flex flex-col items-center justify-center mx-auto h-screen">

            <div className='static md:absolute top-24 right-24 md:initial mb-5 text-3xl font-bold font-display' >
                <a href="#" className='text-neutralDark'>Invision</a>
            </div>

                <div>
                    <h1 className='text-center text-2xl'>Welcome to Invision</h1>

                    <form className='flex flex-col my-5' onSubmit={onSubmit} >

                        <div className='my-3'>
                            <TextField 
                                className='w-full'
                                {...register("email")}
                                name="email"
                                error={!!errors.email}
                                helperText={errors.email?.message}
                                id="standard-basic123456" 
                                label="User name or Email" 
                                variant="standard"
                            />

                        </div>

                        <div className='my-3'>
                            <TextField 
                                className='w-full'
                                {...register("password")}
                                name="password"
                                type="password"
                                error={!!errors.password}
                                helperText={errors.password?.message}
                                id="standard-basic123456" 
                                label="Password" 
                                variant="standard"
                            />

                        </div>

                        <span className="text-xs text-right mb-5"> <a href="#" className='text-neutral'>Forgot password?</a></span>

                        <div className='text-center mt-5'>
                            <button
                                className='inline-block px-8 py-2.5 bg-neutral text-neutralLight font-medium text-xs leading-tight rounded-full shadow-md hover:bg-neutral hover:shadow-lg focus:bg-neutral focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral active:shadow-lg transition duration-150 ease-in-out'
                            >
                                Sign In
                            </button>
                        </div>

                        <span className="lineDivisor" >or</span>

                        <div className='text-center'>
                            <button
                                className='flex items-center justify-center mx-auto px-8 py-2.5 bg-neutralLight text-neutralDark font-medium text-xs leading-tight rounded-full shadow-md hover:bg-neutralLight hover:shadow-lg focus:bg-neutralLight focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutralLight active:shadow-lg transition duration-150 ease-in-out'
                            >
                                <LogoGoogleImg className='mr-2' />
                                Sign In with Google
                            </button>

                            <p className='mt-10 text-xs'>New <b>Invision?</b> <Link to="/register">Create Account</Link>  </p>
                        </div>

                    </form>
                </div>
                
            </div>
        </div>

    )
}

export default Login;