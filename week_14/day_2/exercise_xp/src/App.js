import Car from './Components/Car';
import Garage from './Components/Garage';
import Events from './Components/Events';
import Phone from './Components/Phone';
import Color from './Components/Color';

function App() {
    const carinfo = { name: 'Ford', model: 'Mustang' };
    return (
        <div>
            <h1>Exercise 1:</h1>
            <Garage size="small"/>
            <Car model={carinfo.model} colour="white"></Car>
            <h1>Exercise 2:</h1>
            <Events/>
            <h1>Exercise 3:</h1>
            <Phone/>
            <h1>Exercise 4:</h1>
            <Color/>
        </div>
    );
}

export default App;
