export type Guitar = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
};

//heredamos los atributos de Guitar y agregamos mas atributos
export type CartItem = Guitar & {
  quantity: number;
};

// export type CartItem = Pick<Guitar, 'id' | 'name' | 'price' > & {
//     quantity: number
// }
// export type CartItem = Omit<Guitar, 'id' | 'name' | 'price' > & {
//     quantity: number
// }
