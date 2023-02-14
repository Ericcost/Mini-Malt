import { Link } from 'react-router-dom';
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h3>Register</h3>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
			      <input type="password" placeholder="Password" />
            <input type="text" placeholder="name" />
            <button>Register</button>
          </form>
        </div>
        <div className="right">
			    <h1>Mini-Malt</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium fugit nesciunt earum officiis voluptate beatae enim,
            voluptatibus molestias iure, unde placeat obcaecati itaque et
            eligendi deleniti quae cum, cupiditate dolore!
          </p>
          <small>Do you have an account ?</small>
          <Link to="/login">
            <button>
              login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;