import React, { use } from "react";
import JobApplicationsRaw from "./JobApplicationsRaw";

const ApplicationList = ({ MyApplicationsPromise }) => {
  const applications = use(MyApplicationsPromise);

  return (
    <div>
      <h3 className="text-3xl">Jobs Applied So Far: {applications.length}</h3>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  #
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <JobApplicationsRaw
                key={application._id}
                application={application}
                index={index}
              ></JobApplicationsRaw>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
