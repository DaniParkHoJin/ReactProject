import './App.css';
import Header from "./component/Header";
import Body from "./component/Body";
import footer from "./component/Footer";
import Footer from "./component/Footer";

// function Header() {
//   return (<header>
//     <h1>header</h1>
//   </header>
//   );
// }

// const Header = () => {
//   return(
//       <header>
//         <h1>header</h1>
//       </header>
//   );
// };

function App() {
    return (
        <div className="App">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
}

export default App;
