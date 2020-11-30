import { useState, useEffect } from 'react';
import { db } from '../firebase';
import Dashboard from './Dashboard';

export default function DashBoardContainer({ enterprise_name, campaign_name }) {
    const [userList, setUsers] = useState({});
    
    // gather the list of all users that filled out form
    useEffect(() => {
        db.collection('enterprises').doc(enterprise_name).collection(campaign_name).doc('customers')
        .collection('customerinfo').get()
        .then(res => {
            console.log('succesfully pulled')
            let users_obj = {}
            res.forEach(doc => {
                const doc_data = doc.data();
                users_obj[doc_data.email] = doc_data;
            });
            console.log(users_obj);
            setUsers(users_obj);
        });
    }, []);

    // gather the list of all referrers and their corresponding users
    useEffect(() => {

    });

    return (
        <Dashboard 
        userList={userList}
        />
    )
}