import { Trans, useTranslation } from "react-i18next"
import i18n from "i18next"
import Style from '../../forms/create-account/use_translation.module.scss'

export const CreateAccount = () => {
  const { t } = useTranslation()
  const lgs: any = {
    en: {nativeName: 'En'},
    zh: {nativeName: 'ZhCN'}
  }

  const handleLang = (e: any) => {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <div className={`${Style.Translation}`}>
      <nav>
        { Object.keys(lgs).map((lng) => {
          return (
            <button
              className='btn btn-add'
              aria-label={`${lng}`}
              type='button'
              value={`${lng}`}
              key={lng}
              onClick={() => i18n.changeLanguage()}
              disabled={i18n.resolvedLanguage === lng}
            >
              {lgs[lng].nativeName}
            </button>
          )
        })
        }
      </nav>

      <select
        name='languages'
        onClick={handleLang}
      >
        <option value='en' defaultChecked={true}>English</option>
        <option value='zh_cn'>{t("zh_cn")}</option>
        { Object.keys(lgs).map((lng) => {
          return (
            <option
              className='btn btn-add'
              defaultChecked={true}
              aria-label={`${lng}`}
              value={`${lng}`}
              key={lng}
              //onClick={() => i18n.changeLanguage()}
              //disabled={i18n.resolvedLanguage === lng}
            >
              {lgs[lng].nativeName}
            </option>
          )
        })
        }
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
