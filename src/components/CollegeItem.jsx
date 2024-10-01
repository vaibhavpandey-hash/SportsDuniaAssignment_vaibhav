import React from 'react';
import newsIcon from '../images/news.png';
import worldWideIcon from '../images/worldwide.png';
import newsReportIcon from '../images/news-report.png';

const CollegeDetail = ({ college }) => {
  return (
    <>
      <td>#{college.rank}</td>
      <td>
        {college.featured && <p className="featured">Featured</p>}
        {college.featured ? (
          <>
            <h4 className='colorBlue'>{college.name}</h4>
            <p>{college.location}</p>
            <div className="buttonsInName">
              <button><i className="fa-solid fa-arrow-right"></i> Apply Now</button>
              <button><i className="fa-solid fa-arrow-down"></i> Download Brochure</button>
              <button className="button-with-checkbox">
                <input type="checkbox" id={`compare-${college.rank}`} className="checkbox" />
                <label htmlFor={`compare-${college.rank}`} className="checkbox-label">Add To Compare</label>
              </button>
            </div>
          </>
        ) : (
          <>
            <h4 className='colorBlue'>{college.name}</h4>
            <p>{college.location}</p>
            <div className='orangeColor'>
              <div className='orangeHeading'>B.Tech in Computer Science and Engineering <i className="fa-solid fa-angle-down"></i></div>
              <div>JEE Advanced 2023 cutoff - {Math.ceil(Math.random() * 100)}</div>
            </div>
            <div className="buttonsInName">
              <button><i className="fa-solid fa-arrow-right"></i> Apply Now</button>
              <button><i className="fa-solid fa-arrow-down"></i> Download Brochure</button>
              <button className="button-with-checkbox">
                <input type="checkbox" id={`compare-${college.rank}`} className="checkbox" />
                <label htmlFor={`compare-${college.rank}`} className="checkbox-label">Add To Compare</label>
              </button>
            </div>
          </>
        )}
      </td>

      <td>
        <p>
          <div className='money'>₹{college.fees}</div>
          <div className='fontSize'>
            <div>BE/B.Tech</div>
            <div>-1st year's fees</div>
            <div className='compareFees'><i className="fa-solid fa-exchange"></i> Compare Fees</div>
          </div>
        </p>
      </td>

      <td>
        <p>
          <div className='money'>₹{college.placement.average}</div>
          <div className='fontSize'>Average Package</div>
          <div className='money'>₹{college.placement.highest}</div>
          <div className='fontSize'>Highest Package</div>
          <div className='compareFees fontSize'><i className="fa-solid fa-exchange"></i> Compare Placement</div>
        </p>
      </td>
      
      <td>
        <div className='custom-bullet'><span className="circle"></span> {college.userReviews}/10</div>
        <div className='fontSize'>
          <div>Based on {college.totalReviews} User Reviews</div>
          <div>
            <button className='socialLife'><i className="fa-solid fa-check"></i> Best in Social Life <i className="fa-solid fa-angle-down"></i></button>
          </div>
        </div>
      </td>
      
      <td>
        <p style={{fontSize: '14px'}}>#{college.rank}/{<span>{Math.ceil(Math.random() * 200)}</span>} in India in 2023</p>
        <div className='lightBlue'>
          <p>
            <img src={newsIcon} alt="News" />
            <img src={newsReportIcon} alt="News Report" />
            <img src={worldWideIcon} alt="Worldwide" />
            <span> + {Math.ceil(Math.random() * 10)} More</span>
          </p>
        </div>
      </td>
    </>
  );
};

export default CollegeDetail;
