import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleForm, toggleFormWithData } from "../actions/action";
import service from "../service/service"
import "../css/JobCard.css";
import NetFlix from "../asserts/NetFlix.png";
import { updateList, setAction } from '../actions/action';

function JobCard({ jobData }) {
  const dispatch = useDispatch();
const deleteAction = () => {
  dispatch(updateList(true))
  service.deleteJobCard(jobData.id).then(res => {
    dispatch(setAction('DELETE' + jobData.id))
  }).finally(() =>{
    dispatch(updateList(false))
  })
}
  return (
    <div className="jobCard m-4 py-4 px-6 rounded-lg flex-auto border-cBorder">
      <div className="flex flex-row justify-between">
        <div className="flex">
          <div>
            <div className="jobIcon pr-2">
              <img src={NetFlix} alt="job Logo" width={60} height={64}></img>
            </div>
          </div>
          <div className="jobContents">
            <div className="jobTitle flex flex-col items-start pb-5">
              <h1 className="font-semibold text-lg ">{jobData?.role}</h1>
              <h1>
                {jobData?.company} - {jobData.industry}
              </h1>
              <p className="text-pHolder">
                {jobData.location} ({jobData.remote}){" "}
              </p>
            </div>
            <div className="jobDesc flex flex-col items-start">
              <p className="py-1">Part-Time (9.00 am - 5.00 pm IST)</p>
              <p className="py-1">
                Experience ({jobData.expMinCount} - {jobData.expMaxCount} years)
              </p>
              <p className="py-1">
                INR {jobData.salaryMin} - {jobData.salaryMax} / Month
              </p>
              <p className="py-1">{jobData.totalEmp} employees</p>
            </div>
            <div className="jobAction pt-5">
              {jobData.source === "internal" ? (
                <button className="flex bg-primary text-white px-4 py-2 font-medium rounded-lg">
                  Apply Now
                </button>
              ) : (
                <button className="flex bg-white border border-primary font-medium text-primary px-4 py-2 rounded-lg">
                  External Apply
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="flex">
          <div onClick={() => dispatch(toggleFormWithData(jobData))}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-pHolder cursor-pointer mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </div>
          <div onClick={deleteAction}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-pHolder cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
