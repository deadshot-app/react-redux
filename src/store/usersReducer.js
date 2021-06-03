import { v4 as uuid } from "uuid";
// import UserInfo from "./components/UserInfo";
const initialState = {
  users: [
    {
      id: "1",
      name: "Ahmed Zaky",
      email: "ahmed Zaky",
      gen: 1,
    },
    {
      id: "2",
      name: "Emmanuel ansah",
      email: "emmanuel@gmail.com",
      gen: 4,
    },
    {
      id: "3",
      name: "daniel ann",
      email: "daniel@gmail.com",
      gen: 6,
    },
    {
      id: "4",
      name: "abu dabi",
      email: "abu@gmail.com",
      gen: "3",
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      const newUser = {
        id: uuid(),
        name: action.payload.name,
        email: action.payload.email,
        gen: action.payload.gen,
      };
      return { ...state, users: [...state.users, newUser] };
    case "DELETE_USER":
      const filteredUsers = state.users.filter(
        (user) => user.id !== action.payload
      );
      return { ...state, users: filteredUsers };
    case "EDIT_USER":
      const editedUsers = state.users.map((user) => {
        if (user.id === action.user_id) {
          return { ...user, ...action.updated_info };
        } else {
          return user;
        }
      });
      return { ...state, users: editedUsers };
    default:
      return state;
  }
};

export default usersReducer;
