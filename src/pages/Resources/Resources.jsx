import React from 'react';
import Header from '../../components/Header/Header'; // Import your existing header
import ResourcesContent from '../../components/ResourcesContent/ResourcesContent';
import './Resources.scss';

const Resources = () => {
  return (
    <div className="resources">
      <Header />
      <ResourcesContent />
    </div>
  );
};

export default Resources;
