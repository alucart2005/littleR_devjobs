import jobs from "../data/data";
import { Link } from "react-router-dom";
import { useState } from "react";

export function JobLists() {
  const [jobData, setJobData] = useState(jobs);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchByLocation, setSearchByLocation] = useState("");
  const searchTermValue = searchTerm.toLowerCase();

  const locationSearchHandler = () => {
    const filteredData = jobs.filter((job) =>
      job.location.toLowerCase().includes(searchByLocation.toLowerCase())
    );
    setJobData(filteredData);
  };

  return (
    <section className="job__list">
      <div className="container">
        <div className="job__list__wrapper">
          <div className="search__panel">
            <div className="search__panel-01">
              <input
                type="text"
                placeholder="Search by title, company"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="search__panel-02">
              <input
                type="text"
                placeholder="Search by location"
                value={searchByLocation}
                onChange={(e) => setSearchByLocation(e.target.value)}
              />
              <button onClick={locationSearchHandler}>Search</button>
            </div>

          </div>
          <div className="jobs__wrapper">
            {jobData
              ?.filter((job) => {
                if (searchTerm === "") return job;
                if (
                  job.position.toLowerCase().includes(searchTermValue) ||
                  job.company.toLowerCase().includes(searchTermValue)
                )
                  return job;
              })
              .map((item) => (
                <div className="job__item" key={item.id}>
                  <div className="job__content">
                    <h6>
                      {item.postedAt} - {item.contract}
                    </h6>
                    <h1>
                      <Link to={`/jobs:${item.position}`}>
                        {" "}
                        {/* Link comes from react-router-dom*/}
                        {item.position}
                      </Link>
                    </h1>
                    <p>{item.company}</p>
                    <div className="location">
                      <p>
                        Location: <span>{item.location}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
