export const mianTableColumns = [
  {
    id: "1",
    title: "Coin Name",
    selector: "s",
  },
  {
    id: "2",
    title: "High Price",
    cell: (row) => <small>{row.h}</small>,
  },
  {
    id: "3",
    title: "Open Price",
    cell: (row) => <small>{row.o}</small>,
  },
];
export const expandColumns = [
  {
    id: "1",
    title: "Coin Name",
    selector: "s",
  },
  {
    id: "2",
    title: "Low Price",
    cell: (row) => <small>{row.l}</small>,
  },
  {
    id: "3",
    title: "Open Price",
    cell: (row) => <small>{row.o}</small>,
  },
];
