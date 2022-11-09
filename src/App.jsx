import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import CreateContainer from "./components/CreateContainer";
function App() {

  return (
    <AnimatePresence>
      <div className="w-full h-auto flex flex-col bg-primary">
        <Header />
        <main className="p-8 mt-14 md:mt-20 md:px-16 px-4 py-4 w-full">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
