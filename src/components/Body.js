import { useState } from 'react';

const Body = () => {

  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  const registerUser = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem('users') || '[]');
    let newUser = {
      name,
      password,
      username
    }

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('You have successfully registered!');
  };

  return (
    <div>
      <div className='row w-100 py-5 my-5 container'>
        <div className='col-md-4'>
          <h1>Register</h1>
            <form onSubmit={registerUser}>
              <input
                className='form-control'
                onChange={(e) => setName(e.target.value)}
                placeholder='name'
                type='text'
                value={name}
              />
              <input
                className='form-control'
                onChange={(e) => setUsername(e.target.value)}
                placeholder='username'
                type='text'
                value={username}
              />
              <input
                className='form-control'
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password'
                type='text'
                value={password}
              />
              <input
                className='btn btn-success'
                type='submit'
                value='SIGN UP'
              />
            </form>
        </div>
      </div>
    </div>
  );
}

export default Body;
