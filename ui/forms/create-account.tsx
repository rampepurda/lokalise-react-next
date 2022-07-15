import Link from 'next/link';
import Style from './create-acount.module.scss'

export default function CreateAccount() {
  return (
    <form
      className={Style.createAccount}
      name='createAccount'>
      <h2>Create an Account</h2>
      <h2 className={Style.sub}>Connect with your friends today!</h2>
      <label>Email Address</label>
      <input
        type={'email'}
        placeholder={'Enter your email'}
      />

      <label>Phone Number</label>
      <input
        type={'text'}
        placeholder={'Enter your phonenumber'}
      />

      <label>Password</label>
      <input
        type={'password'}
        placeholder={'Please Enter Your Password'}
      />

      <button
        type='button'
      >
        Sign Up
      </button>
    </form>
  );
}
