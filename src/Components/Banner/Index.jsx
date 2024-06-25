import { urlCodigo } from "../../API/Api";
import styles from "./Banner.module.css";


const Banner = (props) => {
  const { Titulo, Parrafo, url } = props;
  const urlConvertida = urlCodigo(url);
  return (
    <div className={styles.container}>
      <div className={styles.contenido}>
        <h2>{Titulo}</h2>
        <p>{Parrafo}</p>
      </div>
      <iframe
        className={styles.video}
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${urlConvertida}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Banner;
