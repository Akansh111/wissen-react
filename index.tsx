import React from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => {
  const [state, setState] = React.useState({
    userName: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleLogin = () => {
    const payload = {
      email: state.userName,
      password: state.password,
    };
    fetch('https://reqres.in/api/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json)
      .then((res) => console.log(JSON.stringify(res)));
  };
  return (
    <div>
      <div>
        <div>
          <h3>Hello there, Sign in to continue!</h3>

          <div>
            <form>
              <div>
                <label>Username/Email</label>
                <input name="userName" type="text" onChange={handleChange} />
                <div></div>
              </div>
              <div>
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  onChange={handleChange}
                />
                <div></div>
              </div>
              <button onClick={handleLogin}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
