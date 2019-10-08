import React from "react";
import Navbar from "./Components/Layout.component/Navbar.component";
import Search from "./Components/Search.component/Search-form.component";
import SearchDisplay from "./Components/Search.component/Search-display.component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <SearchDisplay />
    </div>
  );
}

export default App;
