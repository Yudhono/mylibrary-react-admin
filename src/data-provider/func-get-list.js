import Mbaas from "../mbaasProvider";

export default async function getList(resource, params) {
  let client = Mbaas.client.getTable(resource);

  const { page, perPage } = params.pagination;
  let { field, order } = params.sort;
  const { dateGte, dateLte } = params.filter || {};
  let filterObject = "true";

  if (resource === "book_categories") {
    client = Mbaas.client.getTable("book_categories");
    if (Object.keys(params.filter).length !== 0) {
      filterObject = client.composeFilter();
      if (params.filter.category_name) {
        filterObject.and((x) =>
          x.contains(
            (x) => x.toLower("category_name"),
            params.filter.category_name.toLowerCase()
          )
        );
      }
    }
    filterObject = filterObject !== "true" ? filterObject.toOData() : "true";
  } else if (resource === "books") {
    client = Mbaas.client.getTable("books");
    if (Object.keys(params.filter).length !== 0) {
      filterObject = client.composeFilter();
      if (params.filter.book_name) {
        filterObject.and((x) =>
          x.contains(
            (x) => x.toLower("book_name"),
            params.filter.book_name.toLowerCase()
          )
        );
      }
      if (params.filter.category_name) {
        filterObject.and((x) =>
          x.eq("category_name", params.filter.category_name)
        );
      }
    }
    filterObject = filterObject !== "true" ? filterObject.toOData() : "true";
  }

  console.log(333344, filterObject);

  const { data, total } = await client
    .filter(filterObject)
    .sort(order === "DESC" ? `-${field}` : field)
    .limit(perPage)
    .offset((page - 1) * perPage)
    .read();
  console.log(333300, data);

  const imageUrl = data.map(async (el) => {
    const getUrl = async () => {
      let preview = await Mbaas.client.storage.downloadUrl({
        fileId: el.book_cover?.filename, // tambahi tanda tanya '?' ketika filename undefine, jadi cara bacanya: apakah di book_cover ada filename? kalo ga ada skip
        params: {
          bucket: el.book_cover?.bucket,
        },
      });
      console.log("222", el.book_cover);
      console.log("33333", el);
      console.log("444", preview.data?.url);
      return preview.data?.url;
    };
    return {
      ...el,
      urlCover: await getUrl(),
    };
  });
  const results = await Promise.all(imageUrl);

  console.log("kiara", results);

  return { data: results, total };
}
