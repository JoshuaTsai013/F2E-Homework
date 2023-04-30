import style from './Image.module.css'
import { Row, Col } from "antd";
export default function Image({ images }) {
  return (
    <div>
      <article className={style.imageLayout}>
        <div className="container">
          <h1 className="text-center">IMAGES</h1>
          <hr className="divider--dark" />
          <Row gutter={[24, 24]}>
          {images.map(image => (
            <Col
              key={image.id}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
              xl={{ span: 6 }}
            >
              <div className={style.image}>
                <a href="#" className={style.imagelink}>
                  <img src={image.image} alt={image.name} className={style.imageStyle} />
                </a>
                <p className={style.imageTitle}>{image.name}</p>
              </div>
            </Col>
            ))}
          </Row>
        </div>
      </article>
    </div>
  );
}