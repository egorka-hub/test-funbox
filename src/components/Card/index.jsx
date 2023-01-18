import React from "react";
import cn from "classnames";

import styles from "./Card.module.scss";

const Card = ({ disable, portion, weight, taste, mouse }) => {
  const [isSelected, setIsSelected] = React.useState(false);

  function handleOnClick() {
    if (!disable) {
      setIsSelected((prev) => !prev);
    }
  }

  return (
    <div className={styles.wrapper}>
      <div
        className={cn(
          styles.card,
          { [styles.card_selected]: isSelected },
          { [styles.card_disable]: disable }
        )}
        onClick={handleOnClick}
      >
        <div className={styles.card_text}>
          <p className={styles.card_text_upper}>Сказачное заморское яство</p>
          <h2 className={styles.card_text_title}>Нямушка</h2>
          <p className={styles.card_text_taste}>с {taste}</p>
          <div className={styles.card_text_advantages}>
            <p>{portion} порций</p>
            <p>{mouse} мыши в подарок</p>
          </div>
        </div>
        <div>
          <img className={styles.catImg} src="/img/cat.png" alt="Cat" />
          <div className={styles.foodWeight}>
            <div className={styles.weightAmount}>{weight}</div>
            <div className={styles.measure}>кг</div>
          </div>
        </div>
      </div>

      <p className={styles.wrapper_text}>Чего сидишь? Порадуй котэ, <a className={styles.link} href="#">купи.</a></p>
    </div>
  );
};

export default Card;
