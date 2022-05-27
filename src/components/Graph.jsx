import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Graph = () => {

    const percentage = 66;

  return (
    <div className='graph'>
        <CircularProgressbar 
            className='graph-item' 
            value={percentage} 
            text={`${percentage}%`}
            styles={buildStyles({
                pathColor: '#4E9F3D',
                textColor: '#4E9F3D'
            })}
        />
    </div>
  )
}

export default Graph