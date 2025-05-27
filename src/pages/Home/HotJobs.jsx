import React, { use } from 'react';
import HotJobsCard from '../Shared/HotJobsCard';

const HotJobs = ({jobsPromise}) => {

    const jobs = use(jobsPromise);
    // console.log(jobs);

    return (
        <div>
            <h2 className='text-center text-4xl font-semibold mt-24 mb-10'>Hot Jobs Of the Day</h2>
           <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
            {
                jobs.map(job => <HotJobsCard job={job} key={job._id}></HotJobsCard>)
            }
           </div>
        </div>
    );
};

export default HotJobs;