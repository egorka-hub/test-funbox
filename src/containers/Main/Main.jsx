import Container from '../../components/Container';
import Title from '../../components/Title';
import Card from '../../components/Card';

import styles from './Main.module.scss'

const cards = [
  {
    portion: 10,
    taste: 'фуа-гра',
    mouse: 0,
    weight: '0,5',
    additionalText: 'Печень утки разварная с артишоками.',
    disable: false
  },
  {
    portion: 40,
    taste: 'рыбой',
    mouse: 2,
    weight: '2',
    additionalText: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    disable: false
  },
  {
    portion: 100,
    taste: 'курой',
    mouse: 5,
    weight: '5',
    additionalText: 'Филе из цыплят с трюфелями в бульоне.',
    disable: true
  },
]

function Main() {
  return (
    <div className={styles.background}>
      <Container>
        <Title>Ты сегодня покормил кота?</Title>
        <div className={styles.wrapper}>
          {cards.map(el => (
            <Card key={el.taste} {...el} />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Main
