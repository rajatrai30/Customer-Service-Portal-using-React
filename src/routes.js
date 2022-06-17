import LoginForm from "./Components/LoginForm";
import PurchasedItems from "./Components/PurchasedItems";
import ProductDetails from "./Components/ProductDetails";

let routes = [
  {
    path:'/',
    component:LoginForm,
    exact:true
  },
  {
    path:'/purchasedItems',
    component:PurchasedItems
  },
  {
    path:'/productDetails/:id',
    component:ProductDetails
  }
]


export default routes;
