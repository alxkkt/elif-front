import "../node_modules/modern-normalize/modern-normalize.css";
import "./App.scss";
import "./sass/main.scss";

import MyRoutes from "./Routes";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <MyRoutes />
    </div>
  );
};

export default App;
