export type IFilterState<T> = Readonly<{
  data: T[];
  isLoading: boolean;
  itemName: string;
}>;
