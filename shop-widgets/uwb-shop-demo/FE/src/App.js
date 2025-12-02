import './App.css';
import { ProductsPage } from './Components/ProductsPage';
import { CartPage } from './Components/Cart';
import { OrdersPage } from './Components/Order';

function App() {
  return (
    <div className="App">
      <ProductsPage />
      <CartPage/>
      <OrdersPage/>
    </div>
  );
}

export default App;
