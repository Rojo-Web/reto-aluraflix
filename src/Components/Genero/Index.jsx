import MediaCard from "../Card";
import styles from "./Genero.module.css";

const Genero = (props) => {
  const { colorPrimario, colorSecundario, titulo, cancioness } = props;
  const colorTitulo = { color: colorPrimario };
  const FondoColor = { backgroundColor: colorSecundario };
  console.log("Estamos aqui");
  console.log(cancioness);
  console.log("tipo de dato: ", typeof cancioness);
  return (
    <>
      {cancioness === undefined ? (
        <></>
      ) : (
        <>
          <div className={styles.container} style={FondoColor}>
            <h1 className={styles.titulo} style={colorTitulo}>
              {titulo}
            </h1>
            <div className={styles.canciones}>
              {
                //de aqui los enviamos a a las canciones
                cancioness.map((Cancion) => (
                  <MediaCard
                    titulo={Cancion.titulo}
                    url={Cancion.url}
                    key={Cancion.id}
                    colorFondo={colorPrimario}
                    //   eliminarColaborador={eliminarColaborador}
                    //   like={like}
                  />
                ))
              }
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Genero;
