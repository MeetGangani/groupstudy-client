import React, { useState } from 'react';
import './SummariesContent.scss';

const SummariesContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSummary, setSelectedSummary] = useState(null);

  const summaries = [
    {
      id: 1,
      date: 'July 15, 2024',
      title: 'Project Kickoff Meeting',
      participants: 'Alex, Jordan, Taylor, Casey',
      preview: 'Initial meeting to discuss the project scope, goals, and timeline. Key decisions were made on technology stack and initial task assignments.',
      fullContent: {
        description: 'This document summarizes the key discussion points, decisions, and action items from the project kickoff meeting. The primary objective was to align the team on the project\'s vision, goals, and immediate next steps.',
        takeaways: [
          'The project\'s main goal is to launch the MVP by the end of Q3.',
          'We will be using the MERN stack (MongoDB, Express, React, Node.js).',
          'Weekly sprint cycles will be adopted, with planning on Mondays and reviews on Fridays.',
          'Alex is assigned as the lead developer for the backend, and Taylor will lead the frontend development.'
        ],
        actionItems: [
          { person: 'Casey', task: 'Set up the project repository on GitHub and invite all team members.', due: 'July 17' },
          { person: 'Taylor', task: 'Create initial wireframes for the main dashboard.', due: 'July 22' },
          { person: 'Alex', task: 'Define the initial database schema.', due: 'July 22' },
          { person: 'Jordan', task: 'Draft the detailed project requirements document.', due: 'July 24' }
        ]
      }
    },
    {
      id: 2,
      date: 'July 10, 2024',
      title: 'Design Review Session',
      participants: 'Alex, Jordan, Taylor',
      preview: 'Reviewed the latest UI/UX mockups. Feedback was collected on the color scheme and layout. Action items assigned for revisions.'
    },
    {
      id: 3,
      date: 'July 5, 2024',
      title: 'Sprint Planning Meeting',
      participants: 'Alex, Jordan, Casey',
      preview: 'Planned the upcoming two-week sprint. User stories were prioritized and assigned to team members. Defined sprint goals and success metrics.'
    },
    {
      id: 4,
      date: 'June 28, 2024',
      title: 'Client Feedback Review',
      participants: 'Jordan, Taylor, Casey',
      preview: 'Analyzed feedback from the client on the latest prototype. Identified key areas for improvement and created a plan to address concerns.'
    },
    {
      id: 5,
      date: 'June 20, 2024',
      title: 'Retrospective',
      participants: 'Alex, Jordan, Taylor, Casey',
      preview: 'Discussed what went well and what could be improved from the previous sprint. Agreed on action items to enhance team collaboration.'
    },
    {
      id: 6,
      date: 'June 15, 2024',
      title: 'API Integration Brainstorm',
      participants: 'Alex, Casey',
      preview: 'Brainstorming session on the best approaches for integrating with third-party APIs. Outlined potential challenges and solutions.'
    }
  ];

  const openModal = (summary) => {
    setSelectedSummary(summary);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSummary(null);
  };

  return (
    <main className="summaries-content">
      <div className="summaries-content__container">
        {/* Header Section */}
        <div className="summaries-content__header">
          <div className="summaries-content__title">
            <span className="summaries-content__emoji">📝</span>
            <h2 className="summaries-content__heading">Meeting Summaries</h2>
          </div>
          <button className="summaries-content__btn summaries-content__btn--primary">
            <svg className="summaries-content__btn-icon" fill="currentColor" height="18" viewBox="0 0 256 256" width="18">
              <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
            </svg>
            New Summary
          </button>
        </div>

        {/* Filters Section */}
        <div className="summaries-content__filters">
          <div className="summaries-content__search">
            <div className="summaries-content__search-icon">
              <svg className="summaries-content__icon" fill="currentColor" height="20" viewBox="0 0 256 256" width="20">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            </div>
            <input 
              className="summaries-content__search-input" 
              placeholder="Search summaries..." 
              type="text"
            />
          </div>
          <select className="summaries-content__select">
            <option>Sort by Date (Newest)</option>
            <option>Sort by Date (Oldest)</option>
            <option>Sort by Title (A-Z)</option>
            <option>Sort by Title (Z-A)</option>
          </select>
          <select className="summaries-content__select">
            <option>Filter by Group</option>
            <option>Biology Club</option>
            <option>History Enthusiasts</option>
            <option>Coding Cohort</option>
          </select>
          <select className="summaries-content__select">
            <option>Filter by Topic</option>
            <option>Project Kickoff</option>
            <option>Design Review</option>
            <option>Sprint Planning</option>
          </select>
        </div>

        {/* Summaries Grid */}
        <div className="summaries-content__grid">
          {summaries.map((summary) => (
            <div 
              key={summary.id} 
              className="summaries-content__card"
              onClick={() => openModal(summary)}
            >
              <div className="summaries-content__card-content">
                <p className="summaries-content__card-date">{summary.date}</p>
                <h3 className="summaries-content__card-title">{summary.title}</h3>
                <p className="summaries-content__card-participants">
                  Participants: {summary.participants}
                </p>
                <p className="summaries-content__card-preview">{summary.preview}</p>
                <button className="summaries-content__btn summaries-content__btn--secondary summaries-content__card-btn">
                  View Full Summary
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && selectedSummary && (
          <div className="summaries-content__modal-overlay" onClick={closeModal}>
            <div className="summaries-content__modal" onClick={(e) => e.stopPropagation()}>
              <div className="summaries-content__modal-header">
                <h3 className="summaries-content__modal-title">
                  {selectedSummary.title} Summary
                </h3>
                <button 
                  className="summaries-content__modal-close"
                  onClick={closeModal}
                >
                  <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24">
                    <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                  </svg>
                </button>
              </div>
              
              <div className="summaries-content__modal-body">
                <div className="summaries-content__modal-meta">
                  <p><strong>Date:</strong> {selectedSummary.date}</p>
                  <p><strong>Participants:</strong> {selectedSummary.participants}</p>
                </div>
                
                {selectedSummary.fullContent && (
                  <div className="summaries-content__modal-content">
                    <p>{selectedSummary.fullContent.description}</p>
                    
                    <h4>Key Takeaways:</h4>
                    <ul className="summaries-content__modal-list">
                      {selectedSummary.fullContent.takeaways.map((takeaway, index) => (
                        <li key={index}>{takeaway}</li>
                      ))}
                    </ul>
                    
                    <h4>Action Items:</h4>
                    <ol className="summaries-content__modal-list summaries-content__modal-list--ordered">
                      {selectedSummary.fullContent.actionItems.map((item, index) => (
                        <li key={index}>
                          <strong>{item.person}:</strong> {item.task} (Due: {item.due})
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
              
              <div className="summaries-content__modal-footer">
                <button className="summaries-content__btn summaries-content__btn--secondary">
                  <svg fill="currentColor" height="18" viewBox="0 0 256 256" width="18">
                    <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"></path>
                  </svg>
                  Download PDF
                </button>
                <button className="summaries-content__btn summaries-content__btn--primary">
                  <svg fill="currentColor" height="18" viewBox="0 0 256 256" width="18">
                    <path d="M136.6,133.47a8,8,0,0,1,0,11.31l-44,44a8,8,0,0,1-11.31-11.31L119.39,128,81.28,89.89a8,8,0,0,1,11.31-11.31l44,44A8,8,0,0,1,136.6,133.47Zm88.11-44.11a8,8,0,0,0-11.31,0l-44,44a8,8,0,0,0,11.31,11.31L224.1,100.28,186,138.39a8,8,0,0,0,11.31,11.31l44-44a8,8,0,0,0,0-11.31Z"></path>
                  </svg>
                  Share Link
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default SummariesContent;
