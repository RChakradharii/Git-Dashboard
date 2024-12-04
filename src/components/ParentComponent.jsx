import React from 'react';
import LanguageChart from './LanguageChart';
import PopularChart from './PopularChart';
import StarsPerLanguageChart from './StarsPerLanguageChart';
import MostForkedChart from './MostForkedChart';

const ParentComponent = ({ languages, popularRepos, starsPerLanguage, forkedRepos }) => {
  return (
    <div>
      <LanguageChart languages={languages} />
      <PopularChart popularRepos={popularRepos} />
      <StarsPerLanguageChart starsPerLanguage={starsPerLanguage} />
      <MostForkedChart forkedRepos={forkedRepos} />
    </div>
  );
};

export default ParentComponent;
