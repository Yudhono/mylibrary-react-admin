import Mbaas from "../mbaasProvider";

export default async function getMany(resource, params) {
  let client = Mbaas.client.getTable(resource);

  if (resource === "user-management") {
    client = Mbaas.client.getTable("users");
    params.data.roles = [params.data.roles];
  } else if (resource === "user-mobile-app") {
    client = Mbaas.client.getTable("users");
    params.data.roles = [params.data.roles];
  } else if (resource === "user-anggota-mu") {
    client = Mbaas.client.getTable("users");
    params.data.roles = [params.data.roles];
  } else if (resource === "tiket") {
    client = Mbaas.client.getTable("tickets");
  } else if (resource === "kategori-tiket") {
    client = Mbaas.client.getTable("ticket_categories");
  } else if (resource === "artikel") {
    client = Mbaas.client.getTable("articles");
  }

  const query = client
    // .filter(moco.composeFilter().in("id", params.ids).toString())
    .limit(25);
  const { data } = await query.read();

  return { data: data };
}
