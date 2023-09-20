import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { updateList } from "../actions/action";
const HEAD = "https://64ff9475f8b9eeca9e2a47f4.mockapi.io";


const getJobList = () => {
  return axios
    .get(`${HEAD}/jobList`)
    .catch(function (error) {
      // handle error
      console.log(error);
    })
};
const addJobList = (payload) => {
  return axios
    .post(`${HEAD}/jobList`, payload)
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
};

const updateJobCard = (id, payload) => {
  return axios
    .put(`${HEAD}/jobList/${id}`, payload)
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
};

const deleteJobCard = (id) => {
  return axios
    .delete(`${HEAD}/jobList/${id}`)
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
};

export default {
  getJobList,
  addJobList,
  updateJobCard,
  deleteJobCard,
};
