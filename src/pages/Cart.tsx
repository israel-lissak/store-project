import React from 'react'

const Cart = () => {
  return (
    <>
      <div>Cart</div>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias eveniet, ipsa laborum mollitia, et laboriosam dignissimos error placeat ab iste nam architecto est laudantium. Consequatur eum recusandae doloribus veniam esse corporis maiores ullam delectus atque distinctio ea, accusamus sint fugit nobis, velit numquam asperiores porro quo. At voluptas, ab ducimus molestias ut debitis. Pariatur aut esse, earum ipsam fugit maxime alias laborum recusandae explicabo quia repellendus, reiciendis nemo, optio beatae sit deserunt! Repellat eius earum porro quis deserunt quibusdam. Quis ipsa maiores cumque tempore. Dolorem suscipit obcaecati illum exercitationem voluptas id sit aliquam eum harum minima eius iusto modi, eligendi odio cum at minus laboriosam. Commodi velit debitis adipisci autem necessitatibus error accusamus et, expedita sed quia quas assumenda aspernatur? Ex facilis accusamus, repellat pariatur corrupti debitis ipsam sunt assumenda iure deserunt, aliquid doloribus similique hic magni voluptas laborum quidem recusandae, dolorum nobis vitae sequi cumque impedit quibusdam sed? Nobis obcaecati incidunt, praesentium tenetur, id dicta at qui non maiores itaque unde suscipit quaerat tempore enim eius, voluptate accusantium ea magnam illo libero. Accusamus itaque officiis consectetur molestiae, nemo incidunt dolor fuga ea! Autem officiis suscipit nam eveniet amet, illum voluptatem? Voluptatibus libero deserunt quam harum delectus eligendi praesentium error, obcaecati in aut distinctio totam, eius fuga, impedit laudantium laborum eaque optio vel nulla at pariatur. Inventore quibusdam, expedita amet nam numquam soluta saepe eaque harum! Eligendi magnam sequi dolor rem suscipit quos veritatis adipisci quam commodi dolorem minus quibusdam quae soluta eveniet, id atque nihil est nulla unde aperiam debitis, repellendus quas? Harum in molestiae culpa deleniti labore consequatur, facilis nobis amet rem voluptatibus alias, ullam, assumenda fuga ipsam ipsum rerum. Nulla veritatis, nostrum ex illo nesciunt quibusdam deleniti ullam id, sint rerum praesentium facere, voluptate ipsa sit optio cumque vitae nam rem corporis suscipit ea error. Aspernatur possimus provident iste minima, eum beatae non asperiores officiis ad incidunt veritatis quos quas amet. Soluta, harum! Minima, illo voluptas doloremque porro debitis totam id ducimus, reprehenderit deleniti laudantium amet quaerat ratione veritatis consequatur eum numquam labore nostrum optio! Dolores magni illum amet aspernatur ut incidunt, doloribus nostrum doloremque. Unde quaerat eaque numquam animi tempora nobis consequuntur expedita, asperiores excepturi  iusto ab corrupti animi, officiis, optio voluptatum officia. Molestiae tenetur sed ipsa nam eaque dignissimos at non maiores deleniti suscipit.</p>
      <a href="/home">Back to Home</a>
      
    </>
  )
};
export default Cart;


app:
// import { Badge, Drawer, Grid, LinearProgress } from "@material-ui/core";
// import { AddShoppingCart } from "@material-ui/icons";
// import { useState } from "react";
// import { useQuery } from "react-query";
// import { Wrapper, StyledButton } from "./App.styles";
// import Item from "./Item/Item";
// import Cart from "./Cart/Cart";
// import "./styles.css";

// export type CartItemType = {
//   id: number;
//   category: string;
//   description: string;
//   image: string;
//   price: number;
//   title: string;
//   amount: number;
// };

// const getProducts = async (): Promise<CartItemType[]> =>
//   await (await fetch("https://fakestoreapi.com/products")).json();

// export default function App() {
//   const [cartOpen, setCartOpen] = useState(false);
//   const [cartItems, setCartItems] = useState<CartItemType[]>([]);

//   const { data, isLoading, error } = useQuery<CartItemType[]>(
//     "products",
//     getProducts
//   );

//   const getTotalItems = (items: CartItemType[]) =>
//     items.reduce((acc, item) => acc + item.amount, 0);

//   const handleAddToCart = (clickedItem: CartItemType) => {
//     setCartItems((prev) => {
//       const isItemInCart = prev.find((item) => item.id === clickedItem.id);

//       if (isItemInCart) {
//         return prev.map((item) =>
//           item.id === clickedItem.id
//             ? { ...item, amount: item.amount + 1 }
//             : item
//         );
//       }

//       return [...prev, { ...clickedItem, amount: 1 }];
//     });
//   };

//   const handleRemoveFromCart = (id: number) => {
//     setCartItems((prev) =>
//       prev.reduce((acc, item) => {
//         if (item.id === id) {
//           if (item.amount === 1) return acc;
//           return [...acc, { ...item, amount: item.amount - 1 }];
//         } else {
//           return [...acc, item];
//         }
//       }, [] as CartItemType[])
//     );
//   };

//   if (isLoading) return <LinearProgress />;
//   if (error) return <div>Something went wrong</div>;

//   return (
//     <Wrapper>
//       <p>ftufutfy</p>
//       <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
//         <Cart
//           cartItems={cartItems}
//           addToCart={handleAddToCart}
//           removeFromCart={handleRemoveFromCart}
//         />
//       </Drawer>

//       <StyledButton onClick={() => setCartOpen(true)}>
//         <Badge badgeContent={getTotalItems(cartItems)} color="error">
//           <AddShoppingCart />
//         </Badge>
//       </StyledButton>

//       <Grid container spacing={3}>
//         {data?.map((item) => (
//           <Grid item key={item.id} xs={12} sm={4}>
//             <Item item={item} handleAddToCart={handleAddToCart} />
//           </Grid>
//         ))}
//       </Grid>
//     </Wrapper>
//   );
// }



cart:
// import { Button } from "@material-ui/core";
// import { CartItemType } from "../App";
// import CartItem from "../CartItem/CartItem";

// import { Wrapper } from "./Cart.styles";

// type Props = {
//   cartItems: CartItemType[];
//   addToCart: (clickedItem: CartItemType) => void;
//   removeFromCart: (id: number) => void;
// };

// const Cart = ({ cartItems, addToCart, removeFromCart }: Props) => {
//   const calculateTotal = (items: CartItemType[]) =>
//     items.reduce((acc, item) => acc + item.amount * item.price, 0);

//   return (
//     <Wrapper>
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? <p>No items in cart.</p> : null}
//       {cartItems.map((item) => (
//         <CartItem
//           key={item.id}
//           item={item}
//           addToCart={addToCart}
//           removeFromCart={removeFromCart}
//         />
//       ))}
//       <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
//     </Wrapper>
//   );
// };

// export default Cart;

cartItem:
// import { Button } from "@material-ui/core";
// import { CartItemType } from "../App";

// import { Wrapper } from "./CartItem.styles";

// type Props = {
//   item: CartItemType;
//   addToCart: (clickedItem: CartItemType) => void;
//   removeFromCart: (id: number) => void;
// };

// const CartItem = ({ item, addToCart, removeFromCart }: Props) => {
//   return (
//     <Wrapper>
//       <div>
//         <h3>{item.title}</h3>
//         <div className="information">
//           <p>Price: ${item.price}</p>
//           <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
//         </div>
//         <div className="buttons">
//           <Button
//             size="small"
//             disableElevation
//             variant="contained"
//             onClick={() => removeFromCart(item.id)}
//           >
//             -
//           </Button>
//           <p>{item.amount}</p>
//           <Button
//             size="small"
//             disableElevation
//             variant="contained"
//             onClick={() => addToCart(item)}
//           >
//             +
//           </Button>
//         </div>
//       </div>
//       <img src={item.image} alt={item.title} />
//     </Wrapper>
//   );
// };

// export default CartItem;
