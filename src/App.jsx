import "./App.css";
import { Header } from "./components/Header";
import { MyRoutes } from "./routers/routers";


function App() {
  return (
    <div className="App">
      <Header />
      <MyRoutes/>
    </div>
  );
}

export default App;
