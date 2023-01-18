import Container from '../../components/Container';
import Title from '../../components/Title';
import Card from '../../components/Card';

import styles from './Main.module.scss'


const cards = [
  {portion: 10, taste: 'фуа-гра', mouse: '', weight: '0,5'},
  {portion: 40, taste: 'рыбой', mouse: '2', weight: '2'},
  {portion: 100, taste: 'курой', mouse: '5', weight: '5', disable: true},
]

function Main() {
  return (
    <div className={styles.background}>
      <Container>
        <Title>Ты сегодня покормил кота?</Title>
        <div className={styles.wrapper}>
          {cards.map(el => (
            <Card {...el} />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Main
