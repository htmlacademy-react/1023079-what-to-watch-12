export type Review = {
  comment: string;
  id: number;
  date: string;
  rating: number;
  user: {
    id: number;
    name: string;
  };
};
