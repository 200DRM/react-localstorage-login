import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {

  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    let users = JSON.parse(localStorage.getItem('users'));
    let i = 0;

    for (let user of users) {
      if (user.username === username && user.password === password) {
        i++;
      };
    }

    if (i === 1) { 
      alert('Successfull login!'); 
      localStorage.setItem('loggedIn', 'loggedIn');
      history.push('/dashboard');
      window.location.reload();
    } else {
      alert('Invalid login and / or password!');
    }
  };

  const logout = () => { 
    localStorage.removeItem('loggedIn'); 
    history.push('/');
    window.location.reload();
  };

  return (
    <div>
      <div className='align-items-center w-100 nav'>
        <div className='col-md-6'>
          <h1>Login App</h1>
        </div>
        <div className='col-md-6'>
          {
            (() => {
              if (localStorage.getItem('loggedIn')) {
                return (
                  <button 
                    className='btn btn-success'
                    onClick={logout}
                  >
                    LOGOUT
                  </button>
                );
              } else {
                return (
                  <>
                    <input
                      onChange={(e) => setPassword(e.target.value)} 
                      placeholder='password'
                      type='text'
                      value={password}
                    />
                    <input
                      onChange={(e) => setUsername(e.target.value)} 
                      placeholder='username'
                      type='text'
                      value={username}
                    />
                    <button
                      className='btn btn-success'
                      onClick={login}
                    >
                      LOGIN
                    </button>
                  </>
                );
              }
            })()
          }
        </div>
      </div>
    </div>
  );
}

export default Navbar;
