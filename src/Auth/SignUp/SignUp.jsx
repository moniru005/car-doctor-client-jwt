import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const SignUp = () => {

  const {createUser} = useContext(AuthContext);
    
    const handleSignUp = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // const user = {name, email, password};
        console.log(name, email, password);

        createUser(email, password)
        .then(result =>{
          const user = result.user
          console.log(user);
        })
        .catch(error =>{
          console.log(error);
        })
      
    }

    return (
        <div className="hero min-h-screen bg-base-200 pb-12">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <div className="text-center">
          <img src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-3xl font-bold text-center pt-6">Sign Up now!</h1>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name='name'
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name='email'
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name='password'
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className='btn bg-orange-500 text-white' type="submit" value="Sign up" />
            </div>
          </form>
          <p className='text-center pb-8'>Already have an account! <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
        </div>
      </div>
    </div>
    );
};

export default SignUp;