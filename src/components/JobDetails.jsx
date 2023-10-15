import { useParams } from "react-router-dom";
import jobs from "../data/data";


export function JobDetails() {
  const {position} = useParams();
  const job = jobs.find((item)=>item.position===position);
  {console.log(job)}
  return ( <section>
    <div className="container">
      <div className="details__top">
        <h1>{job.company}</h1>
        <h6>{job.postedAt} - {job.contract}</h6>
      </div>
      <div className="requirements">
        <h1>Requirements</h1>
        <p>
          <ul className="requirement__item">
            {job.requirements.reqItem.map((item, index)=>(
              <li key={index}>{item}</li>
            ))}
          </ul>
        </p>
      </div>
      <div className="responsibility">
        <h1>Responsibility</h1>
        <p>
          <ul className="responsibility__item">
            {job.responsibility.resItem.map((item, index)=>(
              <li key={index}>{item}</li>
            ))}
          </ul>
        </p>
      </div>
   </div>
  </section>

  );
}
