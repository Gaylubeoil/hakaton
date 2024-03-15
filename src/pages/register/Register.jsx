import { Link } from 'react-router-dom'
import './register.scss'

const Register = () => {
    return (
      <div className='register'>
        <div className="card">
          <div className="left">
            <h1>Hello world.</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <span>Have an account?</span>
            <Link>
            <button>Login</button>
            </Link>
          </div>
          <div className="right">
            <h1>Register</h1>
            <form>
              <input type="text" placeholder='Nickname'/>
              <input type="password" placeholder='Password'/>
              <input type="email" placeholder='Email'/>
                <button>Register</button>
            </form>
          </div>
        </div>
      </div>
    )
  }

export default Register