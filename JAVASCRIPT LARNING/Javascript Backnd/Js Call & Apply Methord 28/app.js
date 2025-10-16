// Javascript Call & Apply Methord
const greenLine = {
  bus: 'Hanif Porebohon',
  bCode: 'HNF',
  ticket: [],
  book(setNum, name, address) {
    const ticketInfo = `Your sate Namber is ${setNum} Name is ${name} your addace is ${address}.`;
    console.log(ticketInfo);
    const ticketPushObj = {
      bussInfu: `${this.bCode}-${setNum}`,
      address,
      name,
    };
    this.ticket.push(ticketPushObj);
    return ticketPushObj;
  },
};

//* SHG POREBOHON ADD BUSS.
const shogPrebohon = {
  bus: 'Shohag Porebohon',
  Bcode: 'SHG',
  ticket: [],
};

//*  HANIF POREBOHON ADD BUSS
const hanifPorebohon = {
  bus: 'Hanif Porebohon',
  bCode: 'HNF',
  Price: 4000,
  ticket: [],
};

const booksShgPb = greenLine.book;
const booksHnfPb = greenLine.book;

const shagBook = booksShgPb.bind(shogPrebohon);
const hanifBook = booksHnfPb.bind(hanifPorebohon);

// shagBook('D8', ' Joy Sarker', 'alaudinPrak-sitibazer-Saver Ranpur');
// hanifBook('H1', 'Joy Sarker', 'Rangpur');

booksHnfPb.call(
  hanifPorebohon,
  'D8',
  ' Joy Sarker',
  'alaudinPrak-sitibazer-Saver Ranpur'
);

console.log(hanifPorebohon.ticket);
