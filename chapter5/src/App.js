import './App.css';
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";


const ChildComp = () => {
    return <div>child component</div>;
}

function App() {
    //const BodyProps = {name: "박호진", location: "서울시", //favorList: ["파스타", "빵", "떡볶이"],
   // }
    return (
        <div className="App">
            <Header/>
            <Body>
                <ChildComp />
            </Body>
            <Footer/>
        </div>
    );
}

export default App;
