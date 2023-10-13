import jobs from "../data/data";
import { Link } from "react-router-dom";
import { useState } from "react";

export function JobLists() {
  const [jobData, setJobData] = useState(jobs);

  return (
    <section>
      <div>
        {jobData.map((item, index) => ( // Start MAPPING
          <div key={index}>
            <div>
              <h6>{item.postedAt}</h6>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
