
import './App.css';
import Name from './components/name';
import Price from './components/price';
import Desc from './components/desc';
import product from './product';


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function App() {
  const firstname = 'John';
  return (
  <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`${firstname ? product.image : ''}`}/>
      <Card.Body>
        <Card.Title>{<Name/>}</Card.Title>
        <Card.Text>
          {<Desc/>}
        </Card.Text>
        <Button variant="primary">{<Price/>}</Button>
      </Card.Body>
    </Card>
    <section>
      <h1>Hello {firstname}</h1>
    </section>
    </div>
  );
}



export default App;
