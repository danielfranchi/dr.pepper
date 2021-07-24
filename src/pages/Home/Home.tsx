import Header from "../../components/Header/Header"

import "./Home.css"

const Home = () => {

  const totalUser = JSON.parse(localStorage.getItem('aa') || '[]')
  const totalProducts = JSON.parse(localStorage.getItem('produto') || '[]')

  return (
    <>
      <Header />
      
      <div className="overview-home">
        <div className="overview-list">
          <div className="overview">
            <h3>Usuarios</h3>
            <span>{totalUser.length}</span>
          </div>

          <div className="overview">
            <h3>Produtos</h3>
            <span>{totalProducts.length}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home
