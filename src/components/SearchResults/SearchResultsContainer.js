import {getCardsForSearchResults} from '../../redux/cardsRedux.js';
import {connect} from 'react-redux';
import SearchResults from './SearchResults';

const mapStateToProps = (state, props) => {
  const searchString = props.match.params.id;
  return {
    cards: getCardsForSearchResults(state, searchString),
    title: searchString,
  };
};

export default connect(mapStateToProps)(SearchResults);
