import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";

function App() {
  return (
    <>
      <NavBar />     
      <div className="container">
        <h1 className="text-primary py-3">DashBoard de Vendas</h1>

        <div className="row px-3">
            <div className="col-sm-6">
              <h5 className="text-center text-secundary">Taxa de sucesso(%)</h5>
              <BarChart />
            </div>
            <div className="col-sm-6">
              <h5 className="text-center text-secundary">Todas Vendas</h5>
              <DonutChart />
            </div>

            <div className="py-3">
                <h2 className="text-primary">Todas as Vendas</h2>
            </div>   

        </div>

        <DataTable />
      </div>
      <Footer/>
    </>
  );
}

export default App;
