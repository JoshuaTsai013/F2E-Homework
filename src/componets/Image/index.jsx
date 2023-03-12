import style from './Image.module.css'
export default function Image() {
    return (
        <div>
        <article className={style.imageLayout}>
        <div className="container">
          <h1 className="text-center">IMAGES</h1>
          <hr className="divider--dark"/>
          <div className="row">
            <div className={style.image}>
              <a href="" className={style.imagelink}>
                <img src="images/img1.jpg" alt="" className={style.imageStyle}/>
              </a>
              <p className={style.imageTitle}>Place 1</p>
            </div>
            <div className={style.image}>
              <a href="" className="image__link">
                <img src="images/img2.jpg" alt="" className={style.imageStyle}/>
              </a>
              <p className={style.imageTitle}>Place 2</p>
            </div>
            <div className={style.image}>
              <a href="" className="image__link">
                <img src="images/img3.jpg" alt="" className={style.imageStyle}/>
              </a>
              <p className={style.imageTitle}>Place 3</p>
            </div>
            <div className={style.image}>
              <a href="" className="image__link">
                <img src="images/img4.jpg" alt="" className={style.imageStyle}/>
              </a>
              <p className={style.imageTitle}>Place 4</p>
            </div>
            <div className={style.image}>
              <a href="" className="image__link">
                <img src="images/img5.jpg" alt="" className={style.imageStyle}/>
              </a>
              <p className={style.imageTitle}>Place 5</p>
            </div>
            <div className={style.image}>
              <a href="" className="image__link">
                <img src="images/img6.jpg" alt="" className={style.imageStyle}/>
              </a>
              <p className={style.imageTitle}>Place 6</p>
            </div>                
            <div className={style.image}>
              <a href="" className="image__link">
                <img src="images/img7.jpg" alt="" className={style.imageStyle}/>
              </a>
              <p className={style.imageTitle}>Place 7</p>
            </div>
            <div className={style.image}>
              <a href="" className="image__link">
                <img src="images/img8.jpg" alt="" className={style.imageStyle}/>
              </a>
              <p className={style.imageTitle}>Place 8</p>
            </div>   
          </div>
        </div>
      </article>      
      </div>
    );
}