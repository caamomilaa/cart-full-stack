import Filters from '../filters/Filters';

const Header = (filterActive, setFilterActive) => {
  return (
    <>
      <h1>DESSERTS</h1>
      <Filters filterActive={filterActive} setFilterActive={setFilterActive} />
    </>
  );
};
export default Header;
