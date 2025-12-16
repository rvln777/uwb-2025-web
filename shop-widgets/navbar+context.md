# Add Navbar 
https://medium.com/@swati.sharma_216/creating-navbar-using-react-router-63c4e785c2d4

# Create AppContext to keep selected product and method to refresh cart counter
https://medium.com/@pratyushpavanchoudhary/understanding-react-context-a-comprehensive-guide-8594fb5fdc2f

- App.js
export const AppContext = React.createContext(null);

const [product, setProduct] = useState({});
const [refresh, refreshNavbar] = useState(0);

<AppContext.Provider value={{
    product, setProduct,
    refresh, refreshNavbar
}}>
 .. components   
</AppContext.Provider>

- Component (usage)
const { refresh, refreshNavbar } = useContext(AppContext);

refreshNavbar(refresh +1)

- Navbar.js (get data from local storage every time selected items change)
const { refresh } = useContext(AppContext);
const [counter, setCounter] = useState(0);

useEffect(() => {
    const cartProducts = localStorage.getItem("cart-products") ?? '[]';
    const cartProductsParsed = JSON.parse(cartProducts);
    setCounter(cartProductsParsed.length)
}, [refresh])

- Product.js (set product in context and navigate to Product Details Page)
const { setProduct } = useContext(AppContext);
const navigate = useNavigate();

const openProduct = () => {
    setProduct(product);
    navigate('/product');
}

- Product Details.js
const { product } = useContext(AppContext);
