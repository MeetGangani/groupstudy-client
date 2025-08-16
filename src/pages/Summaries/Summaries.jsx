import React from 'react';
import Header from '../../components/Header/Header'; // Import your existing header
import SummariesContent from '../../components/SummariesContent/SummariesContent';
import './Summaries.scss';

const Summaries = () => {
  return (
    <div className="summaries">
      <Header />
      <SummariesContent />
    </div>
  );
};

export default Summaries;
