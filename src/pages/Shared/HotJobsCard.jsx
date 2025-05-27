import React from "react";
import { LuMapPinHouse } from "react-icons/lu";
import { Link } from "react-router";

const HotJobsCard = ({ job }) => {
  const {
    _id,
    title,
    company_logo,
    location,
    salaryRange,
    description,
    requirements,
    company,
  } = job;
  return (
    <div className="card bg-base-100  shadow-sm">
      <div className="flex items-center gap-2.5">
        <figure>
          <img src={company_logo} className="w-[50px]" alt="Shoes" />
        </figure>
        <div>
          <h3 className="text-3xl">{company}</h3>
          <p className="flex items-center gap-1.5">
            <LuMapPinHouse size={15} />
            {location}
          </p>
        </div>
      </div>

      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
        <p>{description}</p>
        <div className="card-actions">
          {requirements.map((skill, index) => (
            <div key={index} className="badge badge-outline">
              {skill}
            </div>
          ))}
        </div>
        <div>
            <Link to={`/jobs/${_id}`}>
                 <button className="btn">See Details</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobsCard;
