import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Graph = ({ procent }) => {


  return (
    <div className='graph'>
        <CircularProgressbar 
            className='graph-item' 
            value={procent} 
            text={`${procent}%`}
            styles={buildStyles({
                pathColor: '#4E9F3D',
                textColor: '#4E9F3D'
            })}
        />
    </div>
  )
}

export default Graph