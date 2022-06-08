import style from './footer.module.css';
import facebook from '../../iconFacebook.svg';
import linkedin from '../../iconLinkedin.svg';
import tweet from '../../iconTweet.svg';
import instagram from '../../iconInstagram.svg';
import logo from '../../isologotipo.svg'

const footer = () => {
  return (
    <div className={style.footerContainer}>
        <div className={style.footerBrand}>
            <img src={logo} className={style.isologotipo}></img>
            <p>&#169; 2022</p>
        </div>
        <div className={style.footerSocialMedia}>
            <img src={facebook}></img>
            <img src={linkedin}></img>
            <img src={tweet}></img>
            <img src={instagram}></img>
        </div>
    </div>
  )
}

export default footer