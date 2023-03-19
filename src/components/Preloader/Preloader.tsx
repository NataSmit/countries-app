import React from 'react'
import './Preloader.css'

interface PreloaderProps {
  isLoading: boolean
}

const Preloader = ({isLoading}: PreloaderProps) => {
    return (
        <div className={`preloader ${isLoading ? 'preloader_active' : ''}`}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
