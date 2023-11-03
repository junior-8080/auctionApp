export const homeText = {
  heroLgText: `Say hello to your next awesome Items`,
  heroSmText: `Featuring Used, Wholesale and Salvage Cars, Trucks & SUVs for Sale`,
  featureText: [
    {
      title: "Millions of unique items",
      desc: `Each year 4 million unique items are added to The Auction giving you the chance to own something
      you could never ordinarily have. A piece of history.`,
    },
    {
      title: "Curated by experts",
      desc: `We connect you with over 700 auction houses from around the world, drawing upon decades of experience to bring you unique items selected by experts.`,
    },
    {
      title: "Bid with ease",
      desc: "We use the latest technology so that you can easily and conveniently bid in auctions across the world from the comfort of your own home.",
    },
  ],
};

export const INITIAL_STATES = {
  POST_AUCTION: {
    make: "",
    region: "",
    product_name: "",
    attribute: "",
    description: "",
    image: "",
    starting_price: 0,
    buy_now_price: 0,
    reserve_price: 0,
    duration: 0,
    buyer_deposit: false,
    amount: 0,
    bid_type: "",
    buy_now_checked: false,
    reserve_price_checked: false,
  },
  CONTACT_US: {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  },
  AUTH: {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    agreement: false,
    rememberMe: false,
  },
};
