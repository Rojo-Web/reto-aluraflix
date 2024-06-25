import styles from "./Genero.module.css"

const Genero = (props) => {
    const {colorPrimario,colorSecundario,titulo} = props
    const colorTitulo = {color: colorPrimario}
    const FondoColor = {backgroundColor: colorSecundario}
  return (
    <>
    <div className={styles.container} style={FondoColor}>
      <h1 className={styles.titulo} style={colorTitulo}>{titulo}</h1>
    </div>
    </>
  );
};

export default Genero;
