import { FaPlay, FaPause, FaStop } from 'react-icons/fa';
import { Button } from '../Button';
import './style.css';

export const TimeControl = ({ isRunning, timeZero, playPauseButton, resetCronometer }) => {
    return (
        <div className='time-control'>
            <Button className='play-pause-button' onClick={playPauseButton} 
                content={isRunning ? (
                    <FaPause className='pause-icon'/>
                ) : (
                    <FaPlay className='play-icon'/>
                )}
            />
            {(isRunning || !timeZero) && (
                <Button className='stop-button' 
                    content={(<FaStop className='stop-icon'/>)}
                    onClick={resetCronometer}/>
            )}
        </div>
    )
}

