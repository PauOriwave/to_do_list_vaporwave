import React from 'react';

function FilterButtons({ filter, setFilter }) {
  return (
    <div>
      <button onClick={() => setFilter('all')} disabled={filter === 'all'}>Todas</button>
      <button onClick={() => setFilter('completed')} disabled={filter === 'completed'}>Completadas</button>
      <button onClick={() => setFilter('pending')} disabled={filter === 'pending'}>Pendientes</button>
    </div>
  );
}

export default FilterButtons;
