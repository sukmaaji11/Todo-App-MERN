import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';

const Signup = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(name, gender, email, password);
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      {error && <div className="error">{error}</div>}
      <label>Name</label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Name"
      />
      <label>Gender</label>
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Please Select One</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <label>Email</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="Email"
      />
      <label>Password</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="Password"
      />
      <p className="password-instruction"></p>
      <button disabled={isLoading}>Sign Up</button>
    </form>
  );
};
export default Signup;
