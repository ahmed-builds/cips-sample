import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import WebLayout from './users/layout/web-layout';
import HomePage from './users/home/home-page';
import PageWhoWeAre from './users/about/page-who-we-are';
import PageOurTeam from './users/about/page-our-team';
import PageLeadership from './users/about/page-leadership';
import PageOrganogram from './users/about/page-organogram';
import PageAnnualReports from './users/about/page-annual-reports';
import PageAbout from './users/about/component-about';
import PageAwards from './users/awards/page-awards';
import PageYearWiseAwards from './users/awards/page-year-wise-awards';
import PageKnowledgeBank from './users/knowledge-bank/page-knowledge-bank';
import PageInnovativePractices from './users/knowledge-bank/page-innovative-practices';
import PagePublications from './users/knowledge-bank/page-publications';
import PageArticles from './users/knowledge-bank/page-articles';
import PageProjects from './users/projects/page-projects';
import PageReplications from './users/replications/page-replications';
import PageCollaborations from './users/collaborations/page-collaborations';
import PageError from './users/page-error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WebLayout><HomePage /></WebLayout>}></Route>
        <Route path='about' element={<WebLayout><PageAbout /></WebLayout>}>
          <Route path='who-we-are' element={<PageWhoWeAre />} />
          <Route path='our-team' element={<PageOurTeam />} />
          <Route path='leadership' element={<PageLeadership />} />
          <Route path='organogram' element={<PageOrganogram />} />
          <Route path='annual-reports' element={<PageAnnualReports />} />
        </Route>
        <Route path='awards' element={<WebLayout><PageAwards /></WebLayout>}></Route>
        <Route path='awards/:year' element={<WebLayout><PageYearWiseAwards /></WebLayout>}></Route>
        <Route path='knowledge-bank' element={<WebLayout><PageKnowledgeBank /></WebLayout>}>
          <Route path='innovative-practices' element={<PageInnovativePractices />} />
          <Route path='publications' element={<PagePublications />} />
          <Route path='articles' element={<PageArticles />} />
        </Route>
        <Route path='projects' element={<WebLayout><PageProjects /></WebLayout>} />
        <Route path='projects/:projectType' element={<WebLayout><PageProjects /></WebLayout>} />
        <Route path='replications' element={<WebLayout><PageReplications /></WebLayout>} />
        <Route path='collaborations' element={<WebLayout><PageCollaborations /></WebLayout>} />
        <Route path='*' element={<WebLayout><PageError /></WebLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
