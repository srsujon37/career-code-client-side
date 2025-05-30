import React from "react";

const AddJob = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center">Add a Job</h1>
      <form action="">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">Basic Info </legend>

          <label className="label">Title</label>
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
          <legend className="fieldset-legend">Basic Info </legend>

         
        </fieldset>
        {/*  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">Basic Info </legend>

         
        </fieldset>
        {/*  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">Basic Info </legend>

         
        </fieldset>
        {/*  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">Basic Info </legend>

         
        </fieldset>
      </form>
    </div>
  );
};

export default AddJob;
