interface Product {
    _id: string;
    title: string;
    description: string;
    quantity: number;
    image: string;
    available_in: {
      height: number;
      width: number;
    }[];
    price: number;
    clicks: number;
    liters?: number;
    brand?: string;
    watts?: number;
    screen_size?: number;
    size?: string;
    doors?: number;
  }
  
  interface Category {
    _id: {
      $oid: string;
    };
    name: string;
    filter: string;
    clicks: number;
    products: Product[];
  }
  