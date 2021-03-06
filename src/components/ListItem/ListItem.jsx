import React from 'react';
import PropTypes from 'prop-types';
import Item from 'semantic-ui-react/dist/commonjs/views/Item/Item';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon/Icon';
import Label from 'semantic-ui-react/dist/commonjs/elements/Label/Label';
import DeletePopup from '../DeletePopup/DeletePopup';
import CaloriesNumber from '../CaloriesNumber/CaloriesNumber';
import styles from './ListItem.module.scss';

const getItemStyle = (hovered, activeClassName) => {
  const defaultStyle = styles.item;
  const activeStyle = activeClassName || '';
  const hoverStyle = hovered && !activeStyle ? styles.hover : '';
  return `${defaultStyle} ${activeStyle} ${hoverStyle}`;
};

const ListItem = ({
  onClick, activeClassName, onMouseEnter, onMouseLeave, image,
  title, description, statistic, tags, hovered, onEdit, onDelete
}) => (
  <Item
    onClick={onClick}
    className={getItemStyle(hovered, activeClassName)}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <Item.Image src={image} className={styles.image} />
    <Item.Content>
      <Item.Header>{title}</Item.Header>
      {description && <Item.Description>{description}</Item.Description>}
      <Item.Extra>
        <CaloriesNumber num={statistic} floated="right" />
        {tags.map(tag => <Label key={tag}>{tag}</Label>)}
      </Item.Extra>
    </Item.Content>
    {hovered && (
    <div className={styles.icons}>
      <Icon name="pencil" size="large" onClick={onEdit} />
      <DeletePopup onDelete={onDelete}>
        <Icon
          name="trash alternate"
          size="large"
          className={styles.deleteIcon}
        />
      </DeletePopup>
    </div>
    )}
  </Item>
);

ListItem.defaultProps = {
  onClick: undefined,
  activeClassName: null,
  description: null,
  onDelete: undefined
};

ListItem.propTypes = {
  onClick: PropTypes.func,
  activeClassName: PropTypes.string,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  statistic: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  hovered: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func
};

export default ListItem;
