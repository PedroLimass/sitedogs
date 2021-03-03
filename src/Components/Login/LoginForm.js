import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Error from '../Helper/Error';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <div>
      <section className='animeLeft'>
        <h1 className='title'>Login</h1>
        <form action='' onSubmit={handleSubmit}>
          <Input label='Usuário' type='text' name='username' {...username} />
          <Input label='Senha' type='password' name='password' {...password} />
          {loading ? <Button disabled>Entrar</Button> : <Button>Entrar</Button>}
          <Error error={error} />
          {error && <p>{error}</p>}
        </form>
        <Link to='/login/criar'>Cadastro</Link>
      </section>
    </div>
  );
};

export default LoginForm;
