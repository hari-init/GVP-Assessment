import { useState, useEffect } from 'react';
import service from "./service/service"
import "./App.css";
import JobCard from "./components/JobCard"
import Layout from "./layouts/Layout"
import Loader from './components/Loader';
import { useSelector, useDispatch } from "react-redux";
import { updateList } from './actions/action';

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [jobList, setJobsList] = useState([]);
  useEffect(() => {
    dispatch(updateList(true))
    service.getJobList().then((res) => {
      console.log(res)
      setJobsList(res?.data)
    }).finally(function () {
      // always executed
      dispatch(updateList(false))
    });
  },[state.currentAction])

  const jobCard = jobList.map((job) => {
       return <JobCard key={job.id} jobData={job}/>
  })
  return (
    <div className="App p-5 flex flex-wrap justify-center mt-12">
      <Layout />
      {jobCard}
      {state.updateList ? <Loader />: ''}
    </div>
  );
}

export default App;
