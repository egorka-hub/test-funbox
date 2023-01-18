import React from "react";
import styles from "./Card.module.scss";

const Card = () => {
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.textBlock}>
        <p className={styles.upperText}>Сказачное заморское яство</p>
        <h2 className={styles.yummyText}>Нямушка</h2>
        <p className={styles.taste}>с фуа-гра</p>
        <p className={styles.gift}>10 порций мышь в подарок</p>
      </div>

      <div>
        <img className={styles.catImg} src="/img/cat.png" alt="Cat" />
        <div className={styles.foodWeight}>
          <div className={styles.weightAmount}>0, 5</div>
          <div className={styles.measure}>кг</div>
        </div>
      </div>
    </div>
  );
};

export default Card;



// Изменение цвета (логика примерная)

// const [selected, setSelected] = React.useState(false);
   
  // function handleSelected () {
  //   setSelected(selected => !selected);
  // }

  // const selectedClass = selected ? 'selected' : 'wrapper';

  // onClick={handleSelected} 
