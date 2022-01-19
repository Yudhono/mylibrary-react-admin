// in src/posts.js
import * as React from "react";
import { List,
         Datagrid,
         TextField,
         ReferenceField,
         EditButton,
         Edit,
         Create,
         SimpleForm,
         ReferenceInput,
         SelectInput,
         ImageInput,
         ImageField,
         Viewer,
         TextInput } from "react-admin";



const BooksFilters = [
  <TextInput source="book_name" label="Search" alwaysOn />,
  <ReferenceInput
    source="category_name"
    label="Category"
    reference="book_categories"
    allowEmpty
  >
    <SelectInput optionText="category_name" />
  </ReferenceInput>,
];

const BookTitle = ({ record }) => {
    return <span>Book {record ? `"${record.book_name}"` : ''}</span>;
};

export const BookLists = (props) => (
  <List filters={BooksFilters} {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="book_name" />
      <ReferenceField source="category_name" reference="book_categories">
        <TextField source="category_name" />
      </ReferenceField>

      <ImageField source="urlCover" title="title" />;

      <EditButton />
    </Datagrid>
  </List>
);

export const BookEdit = (props) => (
  <Edit title={<BookTitle />} {...props}>
    <SimpleForm redirect={(basePath) => basePath}>
      <TextInput disabled source="id" />
      <ReferenceInput source="category_name" reference="book_categories">
        <SelectInput optionText="category_name" />
      </ReferenceInput>
      <TextInput source="book_name" />
    </SimpleForm>
  </Edit>
);

export const BooksCreate = (props) => (
  <Create {...props}>
    <SimpleForm redirect={(basePath) => basePath}>
      <ReferenceInput source="category_name" reference="book_categories">
        <SelectInput optionText="category_name" />
      </ReferenceInput>
      <TextInput source="book_name" />
      <ImageInput
        source="book_cover"
        label="Book Cover"
        accept="image/*"
        options={{ multiple: false }}
      >
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
