import React, { Suspense } from 'react';
import ApplicationStat from './ApplicationStat';
import ApplicationList from './ApplicationList';

const MyApplications = () => {
    return (
        <div>
            <ApplicationStat></ApplicationStat>
            <Suspense fallback={'Loading your applications'}>

            </Suspense>
            <ApplicationList></ApplicationList>
        </div>
    );
};

export default MyApplications;