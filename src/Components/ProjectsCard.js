import { Link } from 'react-router-dom';
export default function ProjectsCard({title,link,description}) 
{
    return(<div className="projects-container" style={{borderBottom:'black solid 1px'}}>
    <Link style={{textDecoration:'none'}} to={link}>
      <h2>{title}</h2>
      <p>Summary: {description}</p>
    </Link>
  </div>)}
