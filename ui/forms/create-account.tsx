import {FC} from "react";
import Style from './create-acount.module.scss'

interface initValues {
  headline: string,
  subHeadline: string,
  labelEmail: string,
  labelPhone: number,
  labelPass: string,
  placeholderEmail: string,
  placeholderPhone: string,
  placeholderPass: string,
  btnSubmit: string
}

interface propsCreateAccount {
  data: initValues
}

export const CreateAccount: FC<propsCreateAccount> = ({data}) => {
  return (
    <form
      className={Style.createAccount}
      name='createAccount'>
      <h2>{data.headline}</h2>
      <h2 className={Style.sub}>{data.subHeadline}</h2>
      <label>{data.labelEmail}</label>
      <input
        type={'email'}
        placeholder={`${data.placeholderEmail}`}
      />

      <label>{data.labelPhone}</label>
      <input
        type={'text'}
        placeholder={`${data.placeholderPhone}`}
      />

      <label>{data.labelPass}</label>
      <input
        type={'password'}
        placeholder={`${data.placeholderPass}`}
      />

      <button type='button'>
        {data.btnSubmit}
      </button>
    </form>
  );
}
