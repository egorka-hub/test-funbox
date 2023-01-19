import React from "react";
import cn from "classnames";
import { getNoun } from '../../utils/getNoun';

import CAT_IMG from '../../assets/images/cat.png'

import styles from "./Card.module.scss";


const Card = ({ disable, portion, weight, taste, mouse, additionalText }) => {
  const [isSelected, setIsSelected] = React.useState(false);

  function handleOnClick() {
    if (!disable) {
      setIsSelected((prev) => !prev);
    }
  }

  const mouseCountStr = getNoun(mouse, 'мышь', 'мыши', 'мышей')

  const getBottomTextByStatus = (isSelected, disable) => {
    switch (true) {
      case isSelected:
        return additionalText
      case disable:
        return (
          <p className={styles.wrapper_text__yellow}>
            Печалька, c {taste} закончился.
          </p>
        )
      default:
        return (
          <>
            Чего сидишь? Порадуй котэ,&nbsp;
            <span className={styles.wrapper_link} onClick={handleOnClick}>купи.</span>
          </>
        )
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
            <p>{mouse !== 0 ? `${mouse} ${mouseCountStr}` : 'мышь'} {} в подарок</p>
          </div>
        </div>
        <img className={styles.card_img} src={CAT_IMG} alt="Cat" />
        <div className={styles.card_weight}>
          <div className={styles.card_weight_count}>{weight}</div>
          <div className={styles.card_weight_postfix}>кг</div>
        </div>
      </div>
      <p className={styles.wrapper_text}>
        {getBottomTextByStatus(isSelected, disable)}
      </p>
    </div>
  );
};

export default Card;
