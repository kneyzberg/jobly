import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes
   // obviously, you'll add a lot here ...
  
   //  auth routes

  static async registerUser(data) {
    let res = await this.request(`auth/register`, data, method="post");
    return res.token;
  }
  
  static async loginUser(data) {
    let res = await this.request(`auth/token`, data, method="post");
    return res.token;
  }
  
  //user API routes
  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  // static async createUser(data) {
  //   let res = await this.request(`users/`, data, method="post");
  //   return res.user;
  // }

  static async updateUser(username, data) {
    let res = await this.request(`users/${username}`, data, method="patch");
    return res.user;
  }


  static async applyToJob(username, jobId ) {
    let res = await this.request(`users/${username}/jobs/${jobId}`, method="patch");
    return res.job;
  }
  
  //company API routes
  /** Get details on a company by handle. */
  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getCompanies(filterData) {
    // TODO write query for filter
    let res = await this.request(`companies/`, filterData);
    return res.companies;
  }

  //job API routes
  static async getJob(id) {
    let res = await this.request(`companies/${id}`);
    return res.company;
  }

  static async getJobs(filterData) {
    let res = await this.request(`jobs/`, filterData);
    return res.company;
  }

  
}

// for now, put token ("testuser" / "password" on class)
JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";



    export default JoblyApi;