// in src/posts.js
import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Edit,
  Create,
  SimpleForm,
  TextInput,
} from "react-admin";

const CategoryFilters = [
  <TextInput source="category_name" label="Search" alwaysOn />,
  // <ReferenceInput
  //   source="id"
  //   label="Category"
  //   reference="book_categories"
  //   allowEmpty
  // >
  //   <SelectInput optionText="category_name" />
  // </ReferenceInput>,
];

const CatTitle = ({ record }) => {
  return <span>Category: {record ? `"${record.category_name}"` : ""}</span>;
};

export const CategoryLists = (props) => (
  <List filters={CategoryFilters} {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="category_name" />
      <EditButton />
    </Datagrid>
  </List>
);

export const CategoryEdit = (props) => (
  <Edit title={<CatTitle />} {...props}>
    <SimpleForm redirect={(basePath) => basePath}>
      <TextInput source="category_name" />
    </SimpleForm>
  </Edit>
);

export const CategoryCreate = (props) => (
  <Create {...props}>
    <SimpleForm redirect={(basePath) => basePath}>
      <TextInput source="category_name" />
    </SimpleForm>
  </Create>
);
