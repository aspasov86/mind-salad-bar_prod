import React, { useEffect, useState, useMemo } from 'react';
import { find } from 'lodash';
import PropTypes from 'prop-types';
import Item from 'semantic-ui-react/dist/commonjs/views/Item/Item';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header/Header';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button/Button';
import ListItem from '../ListItem/ListItem';
import SaladIngredientsList from './SaladIngredientsList';
import ToolsBar from '../ToolsBar/ToolsBar';
import { getSalads, deleteSalad } from '../../services/saladService';
import Layout from '../Layout/Layout';
import salad1 from '../../media/salad1.png';
import salad2 from '../../media/salad2.png';
import styles from './Salads.module.scss';
import saladsFilter from './saladsFilter';
import useFetching from '../../hooks/Fetching';
import useHover from '../../hooks/Hover';
import Loader from '../Loader/Loader';
import EmptyPlaceholder from '../EmptyPlaceholder/EmptyPlaceholder';
import TopBar from '../Layout/TopBar';

const Salads = ({ history }) => {
  const [salads, loading, fetchSalads] = useFetching(getSalads);
  const [activeSaladId, setActiveSaladId] = useState(null);
  const activeSalad = useMemo(
    () => find(salads, ['id', activeSaladId]),
    [activeSaladId] // eslint-disable-line react-hooks/exhaustive-deps
  );
  const [filteredSalads, setFilteredSalads] = useState(salads || []);
  const [itemHovered, mouseEnterHandler, onMouseLeave] = useHover();

  useEffect(() => {
    if (!find(filteredSalads, ['id', activeSaladId])) setActiveSaladId(null);
  }, [filteredSalads]); // eslint-disable-line react-hooks/exhaustive-deps

  const onAddNew = () => history.push('/salads/new');
  const activeHandler = id => () => setActiveSaladId(activeSaladId === id ? null : id);
  const editClickHandler = id => () => history.push(`/salads/${id}`);
  const saladDeleteHandler = id => async () => {
    const res = await deleteSalad(id);
    if (res) fetchSalads();
  };
  return (
    <Layout
      title="SALADS"
      tools={(
        <TopBar
          left={(
            <div className={styles.newBtn}>
              <Button
                icon="add"
                label={{ basic: true, content: 'New salad' }}
                labelPosition="right"
                onClick={onAddNew}
              />
            </div>
          )}
          right={(
            <ToolsBar
              data={salads}
              storeFilteredData={setFilteredSalads}
              filterFn={saladsFilter}
            />
          )}
        />
      )}
      bottomLeft={loading ? (
        <Loader />
      ) : (
        <div className={styles.items}>
          {filteredSalads && !!filteredSalads.length ? (
            <Item.Group divided>
              {filteredSalads.map(({
                id, name, ingredients, tags
              }, index) => (
                <ListItem
                  key={id}
                  title={name}
                  tags={tags}
                  onClick={activeHandler(id)}
                  activeClassName={activeSaladId === id ? styles.active : ''}
                  onMouseEnter={mouseEnterHandler(id)}
                  onMouseLeave={onMouseLeave}
                  image={[salad1, salad2][index % 2]}
                  description={(
                    ingredients.length
                      ? `Ingredients: ${ingredients.map((ingredient => ingredient.name)).join(', ')}`
                      : 'No ingredients'
                  )}
                  statistic={ingredients.reduce((ttl, curr) => ttl + curr.calories, 0)}
                  hovered={itemHovered === id}
                  onEdit={editClickHandler(id)}
                  onDelete={saladDeleteHandler(id)}
                />
              ))}
            </Item.Group>
          ) : (
            <EmptyPlaceholder
              filteredData={filteredSalads}
              data={salads}
              itemName="salad"
            />
          )}
        </div>
      )}
      bottomRight={activeSalad && (
        <div>
          <Header>{activeSalad.name}</Header>
          {!activeSalad.ingredients.length ? (
            <div>No ingredients</div>
          ) : (
            <SaladIngredientsList activeSalad={activeSalad} />
          )}
        </div>
      )}
    />
  );
};

Salads.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired
};

export default Salads;
