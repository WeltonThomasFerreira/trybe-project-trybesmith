export interface IInputProduct {
  name: string;
  amount: string;
}

export interface IProduct {
  item: {
    id: number;
    name: string;
    amount: string;
  };
}
