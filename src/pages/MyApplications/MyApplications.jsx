import React, { Suspense } from 'react';
import ApplicationStat from './ApplicationStat';
import ApplicationList from './ApplicationList';
import UseAuth from '../../Hooks/UseAuth';
import { MyApplicationsPromise } from '../../api/applicationsAPI';



const MyApplications = () => {

    const { user } = UseAuth();

    return (
        <div>
            <ApplicationStat></ApplicationStat>
            <Suspense fallback={'Loading your applications'}>
                <ApplicationList 
                MyApplicationsPromise={MyApplicationsPromise(user.email)}
                ></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;