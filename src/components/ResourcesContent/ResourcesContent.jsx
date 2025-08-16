import React from 'react';
import './ResourcesContent.scss';

const ResourcesContent = () => {
  const resources = [
    {
      id: 1,
      name: 'Calculus Notes',
      uploader: 'Sophia Clark',
      dateAdded: '2023-09-15',
      tag: 'Calculus',
      tagColor: 'blue',
      fileType: 'pdf'
    },
    {
      id: 2,
      name: 'Organic Chemistry Guide',
      uploader: 'Ethan Miller',
      dateAdded: '2023-09-10',
      tag: 'Chemistry',
      tagColor: 'green',
      fileType: 'pdf'
    },
    {
      id: 3,
      name: 'Physics Problem Set',
      uploader: 'Olivia Davis',
      dateAdded: '2023-09-05',
      tag: 'Physics',
      tagColor: 'purple',
      fileType: 'doc'
    },
    {
      id: 4,
      name: 'Biology Study Guide',
      uploader: 'Liam Wilson',
      dateAdded: '2023-08-28',
      tag: 'Biology',
      tagColor: 'yellow',
      fileType: 'pdf'
    },
    {
      id: 5,
      name: 'History Essay',
      uploader: 'Ava Martinez',
      dateAdded: '2023-08-20',
      tag: 'History',
      tagColor: 'indigo',
      fileType: 'doc'
    }
  ];

  const getFileIcon = (fileType) => {
    return fileType === 'pdf' ? 'picture_as_pdf' : 'description';
  };

  const getFileIconColor = (fileType) => {
    return fileType === 'pdf' ? 'red' : 'blue';
  };

  return (
    <main className="resources-content">
      <div className="resources-content__container">
        {/* Header Section */}
        <div className="resources-content__header">
          <div className="resources-content__title-section">
            <span className="material-icons resources-content__title-icon">folder</span>
            <div className="resources-content__title-text">
              <h2 className="resources-content__title">Resources</h2>
              <p className="resources-content__subtitle">
                Access and share study materials with your group.
              </p>
            </div>
          </div>
          <button className="resources-content__upload-btn">
            <span className="material-icons">upload_file</span>
            Upload File
          </button>
        </div>

        {/* Filters Section */}
        <div className="resources-content__filters">
          <div className="resources-content__search">
            <span className="material-icons resources-content__search-icon">search</span>
            <input 
              type="text"
              placeholder="Search resources..."
              className="resources-content__search-input"
            />
          </div>
          <div className="resources-content__select-wrapper">
            <select className="resources-content__select">
              <option>All Types</option>
              <option>PDF</option>
              <option>DOCX</option>
              <option>Image</option>
              <option>Link</option>
            </select>
            <span className="material-icons resources-content__select-icon">expand_more</span>
          </div>
          <div className="resources-content__select-wrapper">
            <select className="resources-content__select">
              <option>All Groups</option>
              <option>Calculus Crew</option>
              <option>Chemistry Club</option>
              <option>Physics Phantoms</option>
            </select>
            <span className="material-icons resources-content__select-icon">expand_more</span>
          </div>
        </div>

        {/* Table Section */}
        <div className="resources-content__table-container">
          <div className="resources-content__table-wrapper">
            <table className="resources-content__table">
              <thead className="resources-content__table-head">
                <tr>
                  <th className="resources-content__table-header" scope="col">Name</th>
                  <th className="resources-content__table-header" scope="col">Uploader</th>
                  <th className="resources-content__table-header" scope="col">Date Added</th>
                  <th className="resources-content__table-header" scope="col">Tags</th>
                  <th className="resources-content__table-header resources-content__table-header--actions" scope="col">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="resources-content__table-body">
                {resources.map((resource) => (
                  <tr key={resource.id}>
                    <td className="resources-content__table-cell">
                      <div className="resources-content__file-info">
                        <span className={`material-icons resources-content__file-icon resources-content__file-icon--${getFileIconColor(resource.fileType)}`}>
                          {getFileIcon(resource.fileType)}
                        </span>
                        <span className="resources-content__file-name">{resource.name}</span>
                      </div>
                    </td>
                    <td className="resources-content__table-cell resources-content__table-cell--secondary">
                      {resource.uploader}
                    </td>
                    <td className="resources-content__table-cell resources-content__table-cell--secondary">
                      {resource.dateAdded}
                    </td>
                    <td className="resources-content__table-cell">
                      <span className={`resources-content__tag resources-content__tag--${resource.tagColor}`}>
                        {resource.tag}
                      </span>
                    </td>
                    <td className="resources-content__table-cell resources-content__table-cell--actions">
                      <div className="resources-content__actions">
                        <button className="resources-content__action-btn" title="Download">
                          <span className="material-icons">download</span>
                        </button>
                        <button className="resources-content__action-btn" title="View">
                          <span className="material-icons">visibility</span>
                        </button>
                        <button className="resources-content__action-btn" title="Share">
                          <span className="material-icons">share</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResourcesContent;
