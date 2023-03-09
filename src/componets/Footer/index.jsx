import style from './Footer.module.css'
export default function Footer() {
    return (
        <footer className={style.footer}>
        <div className={style.footerAbove}>
          <div className={style.container}>
            <div className="row my-3">
              <h5 className={style.footerDescription} col-lg-8>
                臺北市和平東路二段134號，國立臺北教育大學 數位科技設計學系
              </h5>
              <ul className={style.footerList} col-lg-4>
                <li className={style.footerItem}><a href="" className={style.footerlink}><i className="fab fa-facebook-f"></i></a></li>
                <li className={style.footerItem}><a href="" className={style.footerlink}><i className="fab fa-google-plus-g"></i></a></li>
                <li className={style.footerItem}><a href="" className={style.footerlink}><i className="fab fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
    
        <div className={style.footerBelow}>
          <div className="container">
            <h6>
              &copy; Copyright All rights reserved.
            </h6>
          </div>
        </div>
      </footer>
    );
}