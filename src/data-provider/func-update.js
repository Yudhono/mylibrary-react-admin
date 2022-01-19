import Mbaas from "../mbaasProvider";

export default async function update(resource, params) {
  let client = Mbaas.client.getTable(resource);
  let updatedData = params.data;
  delete updatedData.type;
  delete updatedData.id;
  delete updatedData.created_at;
  delete updatedData.updated_at;

  // if (resource === "user-management") {
  //   client = Mbaas.client.getTable("users");
  //   delete updatedData.deactivated_at;
  //   delete updatedData.fcm_tokens;
  //   delete updatedData.roles;
  // } else if (resource === "user-mobile-app") {
  //   client = Mbaas.client.getTable("users");
  //   delete updatedData.deactivated_at;
  //   delete updatedData.fcm_tokens;
  //   delete updatedData.roles;
  // } else if (resource === "user-anggota-mu") {
  //   client = Mbaas.client.getTable("users");
  //   delete updatedData.deactivated_at;
  //   delete updatedData.fcm_tokens;
  //   delete updatedData.roles;
  // } else if (resource === "tiket") {
  //   delete updatedData.type;
  //   client = Mbaas.client.getTable("tickets");
  // } else if (resource === "kategori-tiket") {
  //   delete updatedData.type;
  //   client = Mbaas.client.getTable("ticket_categories");
  // } else if (resource === "artikel") {
  //   delete updatedData.type;
  //   client = Mbaas.client.getTable("articles");
  // }

  const { data } = await client.update({
    id: params.id,
    data: updatedData,
  });

  return { data: data };
}
