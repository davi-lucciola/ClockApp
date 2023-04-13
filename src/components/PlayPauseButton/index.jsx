import { FaPlay, FaPause } from 'react-icons/fa';
import { Button } from '../Button';
import './style.css';

export const PlayPauseButton = ({ onClick, isRunning }) => {
    return (
        <Button className='play-pause-button' onClick={onClick} 
            content={isRunning ? (
                <FaPause className="pause-icon"/>
            ) : (
                <FaPlay className="play-icon"/>
            )}
        />
    )
}

