import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import '../index.css';
import CollegeItem from './CollegeItem';

import { colleges as collegeData } from '../data';

const CollegeList = () => {
  const [collegeItems, setCollegeItems] = useState(collegeData.slice(0, 10)); // Initial load
  const [hasMoreColleges, setHasMoreColleges] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortingCriteria, setSortingCriteria] = useState('');
  const [sortingOrder, setSortingOrder] = useState('asc'); // Default to ascending order

  useEffect(() => {
    // Handle sorting
    const sortColleges = (criteria, order) => {
      const criteriaMap = {
        rank: 'rank',
        fees: 'fees',
        userReviews: 'userReviews',
      };
      const sortingProperty = criteriaMap[criteria];

      const sortedColleges = [...collegeData].sort((a, b) => {
        if (order === 'asc') {
          return a[sortingProperty] - b[sortingProperty];
        } else {
          return b[sortingProperty] - a[sortingProperty];
        }
      });
      setCollegeItems(sortedColleges.slice(0, collegeItems.length));
    };

    sortColleges(sortingCriteria, sortingOrder);
  }, [sortingCriteria, sortingOrder]);

  const loadMoreColleges = () => {
    if (collegeItems.length >= collegeData.length) {
      setHasMoreColleges(false);
      return;
    }
    setTimeout(() => {
      setCollegeItems(collegeItems.concat(collegeData.slice(collegeItems.length, collegeItems.length + 10)));
    }, 1500);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredColleges = collegeItems.filter(college =>
    college.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="controls">
        
        <input
          type="text"
          placeholder="Search by college name...."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <select onChange={(e) => setSortingCriteria(e.target.value)} defaultValue="">
          <option value="">Sort By</option>
          <option value="rank">CD Rating</option>
          <option value="fees">Fees</option>
          <option value="userReviews">User Reviews</option>
        </select>
        <select onChange={(e) => setSortingOrder(e.target.value)} defaultValue="asc">
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <InfiniteScroll
        dataLength={filteredColleges.length}
        next={loadMoreColleges}
        hasMore={hasMoreColleges}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
          </p>
        }
      >

        <table border="1" cellPadding="10" cellSpacing="2">
          <thead>
            <tr>
              <th>CD Rank</th>
              <th>Colleges</th>
              <th>Courses Fees</th>
              <th>Placement</th>
              <th>User Reviews</th>
              <th>Ranking</th>
            </tr>
          </thead>
          <tbody>
            {filteredColleges.map((college, index) => (
              <tr key={index} className={college.featured ? "college backgroundOrange" : "college"}>
                <CollegeItem key={index} college={college} />
              </tr>
            ))}
          </tbody>
        </table>

      </InfiniteScroll>
    </div>
  );
};

export default CollegeList;
