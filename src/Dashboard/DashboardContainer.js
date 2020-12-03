import { useState, useEffect } from 'react';
import { db } from '../firebase';
import Dashboard from './Dashboard';

export default function DashBoardContainer({ enterprise_name, campaign_name }) {
    const [userList, setUsers] = useState({});
    const [referrerList, setReferrers] = useState({});
    
    // gather the list of all users that filled out form
    useEffect(() => {
        db.collection('enterprises').doc(enterprise_name).collection(campaign_name).doc('customers')
        .collection('customerinfo').get()
        .then(res => {
            console.log('succesfully pulled')
            let users_obj = {};
            let referrers_obj = {};
            res.forEach(doc => {
                const doc_data = doc.data();
                users_obj[doc_data.email] = doc_data;

                if (!(doc_data.referrer in referrers_obj)) {
                    referrers_obj[doc_data.referrer] = [doc_data.email];
                }
                else {
                    referrers_obj[doc_data.referrer].push(doc_data.email);
                }
            });
            console.log(referrers_obj);
            setUsers(users_obj);
            setReferrers(referrers_obj);
        });
    },);

    return (
        <Dashboard 
        userList={userList}
        referrerList={referrerList}
        />
    )
}