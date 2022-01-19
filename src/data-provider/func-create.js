import Mbaas from "../mbaasProvider";
import moment from "moment";

export default async function create(resource, params) {
  const authUser = await Mbaas.client.user.get();
  let client = Mbaas.client.getTable(resource);
  let dataInput = params.data;
  let book_cover = params.data.book_cover;
  const authUserId = authUser.data.id;
  let fileName = `cover-${moment(new Date()).format()}`;

  console.log("111", dataInput);

  if (resource === "books") {
    client = Mbaas.client.getTable("books");
    console.log("333", params.data);
    const uploadCoverPicture = await Mbaas.client.storage.upload({
      file: book_cover.rawFile,
      params: {
        filename: fileName,
        bucket: "mybucket",
      },
    });

    console.log("123", uploadCoverPicture);

    const inputData = {
      book_name: dataInput.book_name,
      book_cover: {
        filename: fileName,
        bucket: "mybucket",
      },
      category_name: dataInput.category_name,
    };

    const { data } = await client.insert(inputData);
    return { data: data };
  } else if (resource === "book_categories") {
    client = Mbaas.client.getTable("book_categories");
    console.log("333", params.data);

    const { data } = await client.insert(dataInput);
    return { data: data };
  }
}
