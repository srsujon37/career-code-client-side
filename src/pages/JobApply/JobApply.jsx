import React from "react";
import { Link, useParams } from "react-router";
import UseAuth from "../../Hooks/UseAuth";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = UseAuth();
  console.log(jobId, user);

  const handleApplyFormSubmit = e =>{
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;
    console.log(linkedIn, github, resume);
  }
  return (
    <div>
      <h3 className="text-3xl">Apply for this Job: <Link to={`/jobs/${jobId}`}>Details</Link> </h3>
      <form onSubmit={handleApplyFormSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">

          <label className="label">LinkedIn Link</label>
          <input type="url" name="linkedIn" className="input w-full" placeholder="Enter you LinkedIn profile link" />

          <label className="label">GitHub Link</label>
          <input type="url" name="github" className="input w-full" placeholder="Enter you GitHub profile link" />

          <label className="label">Resume Link</label>
          <input type="url" name="resume" className="input w-full" placeholder="Enter you GitHub Resume link" />

          <input type="submit" className="btn btn-info" value="Apply" />
        </fieldset>
        
      </form>
    </div>
  );
};

export default JobApply;
