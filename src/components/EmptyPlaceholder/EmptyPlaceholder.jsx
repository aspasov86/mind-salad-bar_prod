import React from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment/Segment';

const EmptyPlaceholder = ({ filteredData, data, itemName }) => (
  <>
    {!get(data, 'length') && (
      <Segment>
        {`Create new ${itemName.toLowerCase()}`}
      </Segment>
    )}
    {(filteredData.length === 0 && get(data, 'length') > 0) && (
      <Segment>
        No results found
      </Segment>
    )}
  </>
);

EmptyPlaceholder.defaultProps = { data: null };

EmptyPlaceholder.propTypes = {
  filteredData: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  itemName: PropTypes.string.isRequired
};

export default EmptyPlaceholder;
