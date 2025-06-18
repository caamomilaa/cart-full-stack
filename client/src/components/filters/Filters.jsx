const Filters = (filterActive, setFilterActive) => {
  return (
    <>
      <div>
        <button onClick={() => setFilterActive('default')}>Default</button>
        <button onClick={() => setFilterActive('name')}>Name</button>
        <button onClick={() => setFilterActive('price')}>Price</button>
      </div>
    </>
  );
};

export default Filters;
