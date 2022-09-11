import React from 'react';
import JournalPage from '../components/JournalPage';
import {homeObjOne } from '../components/JournalPage/Data'



const Journal = () => {

    return (
  <>
        <JournalPage {...homeObjOne} />

        </>

     );

    };




export default Journal;