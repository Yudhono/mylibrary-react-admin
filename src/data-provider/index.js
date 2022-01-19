import funcGetList from "./func-get-list";
import funcGetOne from "./func-get-one";
import funcGetMany from "./func-get-many";
import funcUpdate from "./func-update";
import funcCreate from "./func-create";
import funcDelete from "./func-delete";

const dataProvider = {
  getList: async (resource, params) => {
    console.log("getList", { resource, params });
    return await funcGetList(resource, params);
  },

  getOne: async (resource, params) => {
    console.log("getOne", { resource, params });
    return await funcGetOne(resource, params);
  },

  getMany: async (resource, params) => {
    console.log("getMany", { resource, params });
    return await funcGetMany(resource, params);
  },

  update: async (resource, params) => {
    console.log("update", { resource, params });
    return await funcUpdate(resource, params);
  },

  create: async (resource, params) => {
    console.log("create", { resource, params });
    return await funcCreate(resource, params);
  },

  delete: async (resource, params) => {
    console.log("delete", { resource, params });
    return await funcDelete(resource, params);
  },
};

export default dataProvider;
