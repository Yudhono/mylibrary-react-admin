import Mbaas from "../mbaasProvider";

export default async function getOne(resource, params) {
  let client = Mbaas.client.getTable(resource);

  if (resource === "user-management") {
    client = Mbaas.client.getTable("users");
  } else if (resource === "user-mobile-app") {
    client = Mbaas.client.getTable("users");
  } else if (resource === "user-anggota-mu") {
    client = Mbaas.client.getTable("users");
  } else if (resource === "tiket") {
    client = Mbaas.client.getTable("tickets");
  } else if (resource === "kategori-tiket") {
    client = Mbaas.client.getTable("ticket_categories");
  } else if (resource === "artikel") {
    client = Mbaas.client.getTable("articles");
  }

  const { data } = await client.lookup(params.id);
  return { data: data };
}
