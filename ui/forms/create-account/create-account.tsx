import i18n from "i18next";
import {initReactI18next, Trans, useTranslation} from "react-i18next";
import Style from '../../forms/create-account/use_translation.module.scss';
import En from '../../../locale/en.json';
import ZhCn from '../../../locale/zh_CN.json';

const translationEn: any = En
const translationZhCn: any = ZhCn

i18n
  .use( initReactI18next)
  .init({
    resources: {
      en: {translation: translationEn},
      zh_cn: {translation: translationZhCn}
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false}
  })

export const CreateAccount = () => {
  const { t } = useTranslation()
  const handleLang = (e: any) => {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <div className={`${Style.Translation}`}>
      <select
        name='languages'
        onClick={handleLang}
      >
        <option value='en' defaultChecked={true}>English</option>
        <option value='zh_cn'>Chinese</option>
      </select>

      <div className={Style.Form}>
        <h2>{t("headline")}</h2>
        <p>
          <Trans components={{bold: <strong />}}>labelPhone</Trans>
        </p>

        <form name={'createAccount'}>
          <label htmlFor='f_email'>{t("labelEmail")}</label>
          <input id='f_email' type='email' placeholder={`${t("placeholderEmail")}`} />

          <label htmlFor='f_pwd'>{t("labelPass")}</label>
          <input id='f_pwd' type='password' placeholder={`${t("placeholderPass")}`} />
        </form>
      </div>
    </div>
  )
}
