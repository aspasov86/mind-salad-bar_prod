import { CALORIES, ASC } from '../../constants/constants';

export const caloriesReducer = ingredients => ingredients.reduce((ttl, curr) => ttl + curr.calories, 0);

const saladsFilter = (data, {
  searchTerm, tagFilter, filterBy, sortType
}) => data
  .filter(({ name }) => name.toLowerCase().includes(searchTerm.toLowerCase()))
  .filter(({ tags }) => (tagFilter ? tags.includes(tagFilter) : true))
  .sort((a, b) => {
    let result = 0;
    if (filterBy === CALORIES) {
      const itemA = caloriesReducer(a.ingredients);
      const itemB = caloriesReducer(b.ingredients);
      result = sortType === ASC ? itemA - itemB : itemB - itemA;
    } else {
      const itemA = a.name.toLowerCase();
      const itemB = b.name.toLowerCase();
      result = sortType === ASC ? itemA.localeCompare(itemB) : itemB.localeCompare(itemA);
    }
    return result;
  });

export default saladsFilter;
