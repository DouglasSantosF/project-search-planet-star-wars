import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import tableContext from '.';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [dataTable, setDataTable] = useState(data);
  const [dataKey, setDataKey] = useState([]);
  const [filters, setFilters] = useState({ filterByName: { name: '' },
    filterByNumericValues: [
    ] });

  useEffect(() => {
    const fetchApi = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const getApi = await fetch(endpoint);
      const { results } = await getApi.json();
      results.map((item) => delete item.residents);
      const filteredKey = Object.keys(results[0]);
      setData(results);
      setDataTable(results);
      setDataKey(filteredKey);
    };

    fetchApi();
  }, []);

  useEffect(() => {
    const filterPlanet = () => {
      const planetFiltered = data
        .filter((planet) => (planet.name).toUpperCase()
          .includes(filters.filterByName.name.toUpperCase()));
      setDataTable(planetFiltered);
    };
    filterPlanet();
  }, [data, filters.filterByName.name]);

  const contextValues = {
    data,
    dataKey,
    setFilters,
    setDataTable,
    filters,
    dataTable,
  };

  return (
    <tableContext.Provider value={ contextValues }>
      {children}
    </tableContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Provider;
