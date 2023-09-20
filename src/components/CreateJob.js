import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleForm, setAction, updateList } from "../actions/action";
import service from "../service/service";
import "../css/CreateJob.css";
import Input from "../components/base/Input";
import Radio from "./base/Radio";

function CreateJob() {
  const state = useSelector((state) => state.formValues);
  const isUpdate = useSelector((state) => state.isUpdate);
  const jobCardID = useSelector((state) => state.jobCardID);
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [valError, setError] = useState(false);
  const [applyType, setApplyType] = useState({
    internal: false,
    external: false,
  });
  const [formData, setFormData] = useState({
    role: state.role,
    company: state.company,
    industry: state.industry,
    location: state.location,
    remote: state.remote,
    expMin: state.expMinCount,
    expMax: state.expMaxCount,
    salaryMin: state.salaryMin,
    salaryMax: state.salaryMax,
    totalEmp: state.totalEmp,
    applyType: state.source,
  });
  const inputHandler = ({ target }, id) => {
    if (id && target?.value && formData.hasOwnProperty(id)) {
      setFormData({ ...formData, [id]: target?.value });
    } else if (["internal", "external"].indexOf(id) > -1) {
      if (id === "internal") {
        setApplyType({ internal: true, external: false });
      } else {
        setApplyType({ internal: false, external: true });
      }
      setFormData({ ...formData, applyType: id });
    }
  };
  const createJob = () => {
    console.log({ ...formData });
    for (const key in formData) {
      if (Object.hasOwnProperty.call(formData, key)) {
        if (!formData[key]) {
          setError(true);
          break;
        } else {
          setError(false);
          setStep(2);
        }
      }
    }
    const payload = {
      role: formData.role,
      company: formData.company,
      industry: formData.industry,
      jobType: `Part-Time (9.00 am - 5.00 pm IST) `,
      salaryMax: formData.salaryMax,
      salaryMin: formData.salaryMin,
      expMaxCount: formData.expMax,
      expMinCount: formData.expMin,
      source: formData.applyType,
      remote: formData.remote,
      totalEmp: formData.totalEmp,
      location: formData.location,
    };

    step === 2 && !isUpdate &&
      service.addJobList(payload)
      .then((res) => {
        dispatch(setAction('ADD'))
        dispatch(toggleForm())
      }).finally(() => {
        dispatch(updateList(false))
      })
    step === 2 && isUpdate &&
      service.updateJobCard(jobCardID, payload)
      .then((res) => {
        dispatch(setAction('UPDATE'))
        dispatch(toggleForm())
      }).finally(() => {
        dispatch(updateList(false))
      })
  };

  return (
    <div className="m-auto p-5  relative ">
      <div className="createJob p-8 rounded-lg  flex-auto border-cBorder">
        {step === 1 ? (
          <div>
            <div className="flex justify-between mb-6">
              <h1 className="font-medium text-xl">Create a job</h1>
              <h1 className="font-medium text-xl">Step 1</h1>
            </div>
            <div className="flex justify-start flex-col mb-6">
              <h1 className="font-medium self-start mb-1">
                Job Title<span className="text-error">*</span>
              </h1>
              <Input
                id="job_title"
                type="text"
                value={formData.role}
                classObj="w-full border"
                placeholder="ex. UX UI Designer"
                handler={(event) => inputHandler(event, "role")}
                error={!formData.role && valError}
                errorText="Please enter job title"
              />
            </div>
            <div className="flex justify-start flex-col mb-6">
              <h1 className="font-medium self-start mb-1">
                Company Name<span className="text-error">*</span>
              </h1>
              <Input
                id="company_name"
                type="text"
                value={formData.company}
                classObj="w-full border"
                placeholder="ex. Google"
                handler={(event) => inputHandler(event, "company")}
                error={!formData.company && valError}
                errorText="Please enter company name"
              />
            </div>
            <div className="flex justify-start flex-col mb-6">
              <h1 className="font-medium self-start mb-1">
                Industry<span className="text-error">*</span>
              </h1>
              <Input
                id="industry"
                type="text"
                value={formData.industry}
                classObj="w-full border"
                placeholder="ex. Information Technology"
                handler={(event) => inputHandler(event, "industry")}
                error={!formData.industry && valError}
                errorText="Please enter industry type"
              />
            </div>
            <div className="flex flex-row mb-24">
              <div className="flex w-2/4 mr-6 flex-col">
                <h1 className="font-medium self-start mb-1">Location</h1>
                <Input
                  id="location"
                  value={formData.location}
                  type="text"
                  classObj="w-full border"
                  placeholder="ex. Chennai"
                  handler={(event) => inputHandler(event, "location")}
                />
              </div>
              <div className="flex w-2/4 flex-col">
                <h1 className="font-medium self-start mb-1">Remote Type</h1>
                <Input
                  id="remote"
                  value={formData.remote}
                  type="text"
                  classObj="w-full border"
                  placeholder="ex. In-office"
                  handler={(event) => inputHandler(event, "remote")}
                />
              </div>
            </div>
            <div className="flex justify-end items-center">
              <button
                onClick={() => dispatch(toggleForm())}
                className="flex bg-white border border-primary font-medium text-primary mr-4 px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => createJob()}
                className="flex bg-primary text-white px-4 py-2 font-medium rounded-lg"
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-between mb-6">
              <h1 className="font-medium text-xl">Create a job</h1>
              <h1 className="font-medium text-xl">Step 2</h1>
            </div>

            <div className="flex justify-start flex-col mb-6 w-full">
              <h1 className="font-medium self-start mb-1">Experience</h1>
              <div className="flex flex-row">
                <Input
                  id="exp_min"
                  value={formData.expMin}
                  type="text"
                  classObj="w-full border"
                  placeholder="Minimum"
                  width="w-1/2 mr-6"
                  handler={(event) => inputHandler(event, "expMin")}
                />
                <Input
                  id="exp_max"
                  type="text"
                  value={formData.expMax}
                  classObj="w-full border"
                  placeholder="Maximum"
                  width="w-1/2"
                  handler={(event) => inputHandler(event, "expMax")}
                />
              </div>
            </div>
            <div className="flex justify-start flex-col mb-6 w-full">
              <h1 className="font-medium self-start mb-1">Salary</h1>
              <div className="flex flex-row">
                <Input
                  id="salary_min"
                  value={formData.salaryMin}
                  type="text"
                  classObj="w-full border"
                  placeholder="Minimum"
                  width="w-1/2 mr-6"
                  handler={(event) => inputHandler(event, "salaryMin")}
                />
                <Input
                  id="salary_max"
                  type="text"
                  value={formData.salaryMax} 
                  classObj="w-full border"
                  placeholder="Maximum"
                  width="w-1/2"
                  handler={(event) => inputHandler(event, "salaryMax")}
                />
              </div>
            </div>
            <div className="flex justify-start flex-col mb-6">
              <h1 className="font-medium self-start mb-1">Total Employee</h1>
              <Input
                id="total_emp"
                type="text"
                value={formData.totalEmp} 
                classObj="w-full border"
                placeholder="ex. 100"
                handler={(event) => inputHandler(event, "totalEmp")}
              />
            </div>
            <div className="flex justify-start flex-col mb-24 w-full">
              <h1 className="font-medium self-start mb-1">Apply type</h1>
              <div className="flex flex-row">
                <Radio
                  id="internal"
                  classObj="border mr-1"
                  width="mr-6 flex items-center"
                  label="Quick Apply"
                  checked={(formData.source === 'internal' && true )|| applyType.internal}
                  handler={(event) => inputHandler(event, "internal")}
                />

                <Radio
                  id="external"
                  classObj="border  mr-1"
                  width="flex items-center"
                  label="External Apply"
                  checked={(formData.source === 'external' && true ) || applyType.external}
                  handler={(event) => inputHandler(event, "external")}
                />
              </div>
            </div>
            <div className="flex justify-end items-center">
              <button
                onClick={() => dispatch(toggleForm())}
                className="flex bg-white border border-primary font-medium text-primary mr-4 px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => createJob()}
                className="flex bg-primary text-white px-4 py-2 font-medium rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateJob;
