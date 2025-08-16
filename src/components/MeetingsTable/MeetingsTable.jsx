import React from 'react';
import './MeetingsTable.scss';

const MeetingsTable = () => {
  const meetings = [
    {
      id: 1,
      name: 'Math Study Session',
      date: 'July 15, 2024',
      group: 'Calculus Crew',
      participants: 5
    },
    {
      id: 2,
      name: 'History Review',
      date: 'July 10, 2024',
      group: 'History Buffs',
      participants: 4
    },
    {
      id: 3,
      name: 'Science Discussion',
      date: 'July 5, 2024',
      group: 'Science Squad',
      participants: 6
    }
  ];

  return (
    <div className="meetings-table">
      <table className="meetings-table__table">
        <thead className="meetings-table__head">
          <tr>
            <th className="meetings-table__header" scope="col">Meeting</th>
            <th className="meetings-table__header" scope="col">Date</th>
            <th className="meetings-table__header" scope="col">Group</th>
            <th className="meetings-table__header" scope="col">Participants</th>
            <th className="meetings-table__header meetings-table__header--actions" scope="col">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="meetings-table__body">
          {meetings.map((meeting) => (
            <tr key={meeting.id}>
              <td className="meetings-table__cell meetings-table__cell--name">
                {meeting.name}
              </td>
              <td className="meetings-table__cell">{meeting.date}</td>
              <td className="meetings-table__cell">{meeting.group}</td>
              <td className="meetings-table__cell">{meeting.participants}</td>
              <td className="meetings-table__cell meetings-table__cell--actions">
                <a href="#" className="meetings-table__link">View Details</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MeetingsTable;
