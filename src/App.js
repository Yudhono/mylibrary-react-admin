
import React from "react";
import { Admin, Resource } from 'react-admin';
import { UserList } from "./users";
import { BookLists, BooksCreate, BookEdit } from "./books";
import { CategoryLists, CategoryCreate, CategoryEdit } from "./categories";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import Cat from "@material-ui/icons/Category"
import Dashboard from "./Dashboard";
import authProvider from "./auth-provider";
import dataProvider from "./data-provider";


// const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource
      name="books"
      list={BookLists}
      edit={BookEdit}
      create={BooksCreate}
      icon={PostIcon}
    />
    <Resource
      name="book_categories"
      list={CategoryLists}
      create={CategoryCreate}
      edit={CategoryEdit}
      icon={Cat}
    />
  </Admin>
);

export default App;