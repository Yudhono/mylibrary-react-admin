import { init } from "@mocobaas/client-js";
class MbaasProvider {
  constructor() {
    const uriProd = "https://xxxx.com";
    const uriTest = "https://arek-mu-be.arekmu.hash.id";
    const uriDev = "http://localhost:3000"; // connect local db
    this._url = uriDev;
    // process.env.NEXT_PUBLIC_DEFINED_ENV === "production" ? uriProd : uriTest;
    this._client = new init(this._url);
  }
  get client() {
    return this._client;
  }
}
const mbaas = new MbaasProvider();
export default mbaas;
