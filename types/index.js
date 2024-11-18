// ====== USER PARAMS
export const CreateUserParams = {
  clerkId: "",
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  photo: "",
};

export const UpdateUserParams = {
  firstName: "",
  lastName: "",
  username: "",
  photo: "",
};

// ====== EVENT PARAMS
export const CreateEventParams = {
  userId: "",
  event: {
    title: "",
    description: "",
    location: "",
    imageUrl: "",
    startDateTime: new Date(), // You can set specific date if needed
    endDateTime: new Date(), // Same here
    categoryId: "",
    price: "",
    isFree: false,
    url: "",
  },
  path: "",
};

export const UpdateEventParams = {
  userId: "",
  event: {
    _id: "",
    title: "",
    imageUrl: "",
    description: "",
    location: "",
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: "",
    price: "",
    isFree: false,
    url: "",
  },
  path: "",
};

export const DeleteEventParams = {
  eventId: "",
  path: "",
};

export const GetAllEventsParams = {
  query: "",
  category: "",
  limit: 0,
  page: 0,
};

export const GetEventsByUserParams = {
  userId: "",
  limit: 0,
  page: 0,
};

export const GetRelatedEventsByCategoryParams = {
  categoryId: "",
  eventId: "",
  limit: 0,
  page: 0,
};

export const Event = {
  _id: "",
  title: "",
  description: "",
  price: "",
  isFree: false,
  imageUrl: "",
  location: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  url: "",
  organizer: {
    _id: "",
    firstName: "",
    lastName: "",
  },
  category: {
    _id: "",
    name: "",
  },
};

// ====== CATEGORY PARAMS
export const CreateCategoryParams = {
  categoryName: "",
};

// ====== ORDER PARAMS
export const CheckoutOrderParams = {
  eventTitle: "",
  eventId: "",
  price: "",
  isFree: false,
  buyerId: "",
};

export const CreateOrderParams = {
  stripeId: "",
  eventId: "",
  buyerId: "",
  totalAmount: "",
  createdAt: new Date(),
};

export const GetOrdersByEventParams = {
  eventId: "",
  searchString: "",
};

export const GetOrdersByUserParams = {
  userId: null,
  limit: 0,
  page: null,
};

// ====== URL QUERY PARAMS
export const UrlQueryParams = {
  params: "",
  key: "",
  value: null,
};

export const RemoveUrlQueryParams = {
  params: "",
  keysToRemove: [],
};

export const SearchParamProps = {
  params: { id: "" },
  searchParams: {},
};
