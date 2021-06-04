import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
//import {settings} from '../../data/dataStore';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';
//import Creator from '../Creator/Creator.js';


class Column extends React.Component {
  /*state = {
    cards: this.props.cards || [],
  }*/

  static propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.array,
    icon: PropTypes.node,
  }

  /*addCard(title){
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
            title,

          },
        ],
      }
    ));
  }*/

  render() {
    const {title, icon, cards} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}<span className={styles.icon}><Icon name={icon} /></span></h3>
        <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        {/*}
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div>*/}

      </section>

    );
  }
}

export default Column;
