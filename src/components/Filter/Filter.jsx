import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { changesFilter } from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import { Label, Input, Wrapper } from './Filter.styled';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Label>
        Find contacts by name
        <Input
          type="text"
          value={value}
          onChange={e => dispatch(changesFilter(e.currentTarget.value))}
        />
      </Label>
    </Wrapper>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

//------------------------------------------------
//redux-toolkit без хуків
//------------------------------------------------
/*
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Label, Input, Wrapper } from './Filter.styled';
import { changesFilter } from '../../redux/contacts/contacts-actions';

const Filter = ({ value, onChange }) => (
  <Wrapper>
    <Label>
      Find contacts by name
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  </Wrapper>
);

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changesFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
 */
