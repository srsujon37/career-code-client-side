import React from "react";
import UseAuth from './../../Hooks/UseAuth';
import { axios } from 'axios';

const AddJob = () => {
  const {user} = UseAuth();

  const handleAddAJob = e =>{
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries())

    // process salary range data
    const {min, max, currency, ...newJob} = data;
    newJob.salaryRange = {min, max, currency}

    // process requirements data
    const requirementsString = newJob.requirements;
    const requirementsDirty = requirementsString.split(',')
    const requirementsClean = requirementsDirty.map(req => req.trim())
    newJob.requirements = requirementsClean;

    // process responsibilities
    newJob.responsibilities = newJob.responsibilities.split(',').map(res => res.trim())
    
    newJob.status = "active";

    console.log(newJob);

    // save job to the database
    axios.post('http://localhost:3000/jobs/', newJob)
      .then(res => {
        console.log(res);
      })
      .catch(error =>{
        console.log(error);
      })

  }
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center">Add a Job</h1>
      <form action="" onSubmit={handleAddAJob}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">Basic Info </legend>

          <label className="label">Job Title</label>
          <input
            type="text"
            name="title"
            className="input w-full"
            placeholder="Job Title"
          />

          <label className="label">Company</label>
          <input
            type="text"
            name="company"
            className="input w-full"
            placeholder="Company Name"
          />

          <label className="label">Location</label>
          <input
            type="text"
            name="location"
            className="input w-full"
            placeholder="Company Location"
          />
          <label className="label">Company logo</label>
          <input
            type="text"
            name="company_logo"
            className="input w-full"
            placeholder="Company Logo URL"
          />
        </fieldset>

        {/* job type */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">Job Type </legend>
          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="jobType"
              aria-label="All"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="On-Site"
              value='on-site'
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Remote"
              value='remote'
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Hybrid"
              value="Hybrid"
            />
          </div>
        </fieldset>
        {/* Job Category */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">Job Category </legend>
          <select
            defaultValue="Pick a Category"
            className="select"
            name="category"
          >
            <option disabled={true}>Pick a Category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </fieldset>
        {/* Application Deadline */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">Application Deadline </legend>

          <input type="date" className="input" name="applicationDeadline" />
        </fieldset>

        {/* salaryRange */}
        <fieldset className="fieldset bg-base-200 border-base-300  rounded-box border p-4">
          <legend className="fieldset-legend">Salary Range</legend>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2.5 ">
            <div>
              <label className="label">Minimum Salary</label>
              <input
                type="text"
                className="input w-full"
                name="min"
                placeholder="Minimum Salary"
              />
            </div>

            <div>
              <label className="label">Maximum Salary</label>
              <input
                type="text"
                className="input w-full"
                name="max"
                placeholder="Maximum Salary"
              />
            </div>

            <div>
              <label className="label">Currency</label>
              <select
                defaultValue="Select a currency"
                className="select w-full"
                name="currency"
              >
                <option disabled={true}>Select a currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>EU</option>
              </select>
            </div>
          </div>
        </fieldset>
        {/* Job Description */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">Job Description </legend>
          <textarea
            className="textarea"
            name="description"
            placeholder="Bio"
          ></textarea>
        </fieldset>
        {/* job requirements */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">Job requirements</legend>
          <textarea
            className="textarea"
            name="requirements"
            placeholder="Requirements (separate by comma)"
          ></textarea>
        </fieldset>
        {/* job responsibilities */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">Job responsibilities</legend>
          <textarea
            className="textarea"
            name="responsibilities"
            placeholder="Responsibilities (separate by comma)"
          ></textarea>
        </fieldset>

        {/* HR info */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">HR Info </legend>

          <label className="label">HR Name</label>
          <input
            type="text"
            name="hr_name"
            className="input w-full"
            placeholder="HR Name"
          />

          <label className="label">HR Email</label>
          <input
            defaultValue={user.email}
            type="email"
            name="hr_email"
            className="input w-full"
            placeholder="HR Email"
          />

        </fieldset>

        <input type="submit" value="Add job" className="btn w-full" />
      </form>
    </div>
  );
};

export default AddJob;
