import React from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";

const jobsPromise = fetch("http://localhost:3000/jobs").then(res => res.json());


const Home = () => {
  
    return (
         <>
            <Banner></Banner>
            <suspense fallback={'loading hot jobs'}>
                <HotJobs jobsPromise={jobsPromise}></HotJobs>
            </suspense>
        </>
    );
};

export default Home;
