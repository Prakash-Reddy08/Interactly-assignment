import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { MdClosedCaptionOff } from 'react-icons/md'
import { RiFullscreenLine } from 'react-icons/ri'
const withVideo = (videoSource, h1Text) => {
    return props => {
        const videoRef = useRef(null);
        const [isMute, setIsMute] = useState(true)
        const [progress, setProgress] = useState(0);
        const handlePlay = () => {
            setIsMute((prev) => !prev);
            videoRef.current.currentTime = 0;
            isMute ? videoRef.current.play() : videoRef.current.pause()
            videoRef.current.muted = !isMute;
        }
        const handleFullscreen = (e) => {
            document.requestFullscreen();
        }
        const secondsToTime = (seconds = 0) => {
            const minutes = Math.floor(seconds / 60);
            const formattedSeconds = seconds % 60 < 10 ? `0${parseInt(seconds % 60)}` : parseInt(seconds % 60);
            return `${minutes}:${formattedSeconds}`;
        }

        useEffect(() => {
            const video = videoRef.current;
            const handleTimeUpdate = () => {
                setProgress((video.currentTime / video.duration) * 100);
            }
            video.addEventListener('timeupdate', handleTimeUpdate);
            return () => {
                video.removeEventListener('timeupdate', handleTimeUpdate);
            }
        }, []);
        return (
            <VideoContainer onClick={handlePlay}>
                {!isMute && <><div className="progress-bar" style={{ width: `${progress}%`, backgroundColor: 'rgba(125, 0, 254, 0.592)', height: '10px' }} ></div>
                    <div className="controles">
                        <div className="time">{secondsToTime(videoRef.current?.currentTime)} / {secondsToTime(videoRef.current?.duration)}</div>
                        <div className="cc"><MdClosedCaptionOff /></div>
                        <div className="speed">1x</div>
                        <div className="fullscreen" onClick={handleFullscreen}><RiFullscreenLine /></div>
                    </div></>
                }
                <h1 className="welcome">
                    {h1Text}
                </h1>
                <video loading='lazy' src={videoSource} ref={videoRef} loop autoPlay muted />
                {isMute && <button className="play">
                    <svg fill="none" height="96" width="96" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M48 96c26.51 0 48-21.49 48-48S74.51 0 48 0 0 21.49 0 48s21.49 48 48 48z" fill="#fff" fillRule="evenodd"></path><path clipRule="evenodd" d="M37.326 33.822c0-2.408 2.695-3.835 4.687-2.481l20.862 14.178c1.752 1.19 1.752 3.772 0 4.963L42.013 64.66c-1.992 1.354-4.687-.072-4.687-2.48V33.821z" fill="#000" fillRule="evenodd"></path></svg>
                </button>}
                <div className="poweredBy">
                    <div>
                        <p>
                            Powered by:
                        </p>
                        <svg fill="none" height="19" viewBox="0 0 742 139" width="108" xmlns="http://www.w3.org/2000/svg" alt="videoask" color="#ffffff" className="styles__SvgLogoStyled-sc-13lm7vi-5 ibAvyo"><path d="M274.53 50.474h16.87v68.483h-16.87V50.474zM282.955 40.876A10.96 10.96 0 11293.831 30a10.709 10.709 0 01-10.876 10.876zM674.133 19.166h16.869v56.727l22.444-25.42h20.411l-29.233 31.392L737 118.957h-20.411l-25.587-31.12v31.12h-16.869V19.166zM633.584 118.957c-15.367 0-25.433-6.839-30.197-20.516l15.235-5.302a16.763 16.763 0 005.574 8.697 16.43 16.43 0 009.933 2.724c2.782.11 5.545-.496 8.026-1.76a5.555 5.555 0 003.269-4.757 4.899 4.899 0 00-3.122-4.359 46.115 46.115 0 00-11.296-3.541c-15.367-3.353-23.051-10.688-23.051-22.004a16.77 16.77 0 013.395-10.33 21.832 21.832 0 018.99-7.063 30.115 30.115 0 0111.966-2.452c12.238 0 21.172 5.12 26.802 15.36l-12.112 8.383c-3.269-6.245-8.117-9.367-14.544-9.367a12.13 12.13 0 00-6.286 1.614 4.858 4.858 0 00-2.578 4.19 5.257 5.257 0 002.578 4.485 30.13 30.13 0 009.786 3.27c8.522 1.634 14.809 4.037 18.86 7.208a15.675 15.675 0 016.287 13.454 19.19 19.19 0 01-7.88 16.156 31.669 31.669 0 01-19.635 5.91zM463.068 101.438a32.316 32.316 0 0029.652 17.519 33.071 33.071 0 0017.834-4.757 31.653 31.653 0 0011.714-12.762 38.293 38.293 0 004.191-17.813 37.387 37.387 0 00-4.191-17.665 31.73 31.73 0 00-11.693-12.909 35.774 35.774 0 00-35.625 0 32.67 32.67 0 00-11.84 12.909 38.325 38.325 0 00-4.086 17.666 39.245 39.245 0 004.044 17.812zm16.765-32.628a15.255 15.255 0 0112.908-6.098 14.965 14.965 0 0112.804 6.098 26.107 26.107 0 010 29.631 14.913 14.913 0 01-12.804 6.119 15.232 15.232 0 01-12.908-6.119 26.615 26.615 0 010-29.631zM386.056 100.474a32.429 32.429 0 0010.897 13.328 32.045 32.045 0 0018.63 5.155c14.25 0 24.637-5.707 31.161-17.121l-13.475-7.062c-4.191 6.51-9.779 9.772-16.764 9.786a18.42 18.42 0 01-8.99-2.095 17.74 17.74 0 01-5.973-5.847 17.184 17.184 0 01-2.326-7.481h48.303v-6.915a39.563 39.563 0 00-3.395-15.906 30.07 30.07 0 00-28.583-17.938 30.572 30.572 0 00-29.485 18.525 42.468 42.468 0 00-3.395 16.764 43.445 43.445 0 003.395 16.807zm18.651-34.116a15.107 15.107 0 0110.876-4.191 14.457 14.457 0 0110.708 3.856 19.846 19.846 0 015.302 10.184h-32.23a18.065 18.065 0 015.302-9.849h.042zM312.984 109.443c5.448 6.342 13.202 9.514 23.261 9.514a20.33 20.33 0 0010.331-2.578 15.305 15.305 0 006.287-5.574v7.062h16.869V19.166h-16.869v36.379a18.59 18.59 0 00-6.937-5.155 22.38 22.38 0 00-9.66-2.096c-10.059 0-17.813 3.22-23.261 9.66-5.449 6.441-8.131 14.998-8.047 25.672 0 10.799 2.675 19.404 8.026 25.817zm14.145-41.178a14.086 14.086 0 0111.421-5.574 13.686 13.686 0 0111.295 5.574c2.997 3.625 4.484 8.76 4.484 15.36 0 6.602-1.487 11.778-4.484 15.487a13.79 13.79 0 01-11.295 5.448 14.085 14.085 0 01-11.421-5.574 23.823 23.823 0 01-4.484-15.36c0-6.602 1.487-11.736 4.484-15.361zM193.223 50.474h16.995l17.414 44.698 17.414-44.698h16.995l-28.709 68.483h-11.421l-28.688-68.483zM557.892 64.2a12.178 12.178 0 017.209-2.327c3.086-.112 6.116.851 8.571 2.725a9.83 9.83 0 013.416 8.151v2.997h-11.442a38.353 38.353 0 00-15.235 2.85 22.887 22.887 0 00-10.331 7.88 19.3 19.3 0 00-3.688 11.693 19.989 19.989 0 001.279 8.312 19.98 19.98 0 004.588 7.048 21.19 21.19 0 0014.963 5.428 25.975 25.975 0 0021.081-9.787l1.76 8.697h13.077V76.962c0-10.325-2.452-17.659-7.356-22.004-4.903-4.345-11.798-6.566-20.683-6.664a27.244 27.244 0 00-16.597 5.302 25.148 25.148 0 00-9.514 13.726l14.292 4.065a12.765 12.765 0 014.61-7.187zm19.049 25.67a13.452 13.452 0 01-2.578 8.152 16.45 16.45 0 01-6.538 5.302 18.668 18.668 0 01-8.382 1.907 7.489 7.489 0 01-5.721-2.096 7.186 7.186 0 01-2.095-5.03 8.196 8.196 0 013.269-7.187 16.052 16.052 0 019.514-2.452h12.384l.147 1.404zM104.853 44.816c11.006 0 19.929-8.913 19.929-19.908C124.782 13.913 115.859 5 104.853 5c-11.007 0-19.929 8.913-19.929 19.908 0 10.995 8.922 19.908 19.929 19.908zM44.731 44.816c11.006 0 19.929-8.913 19.929-19.908C64.66 13.913 55.737 5 44.73 5c-11.006 0-19.929 8.913-19.929 19.908 0 10.995 8.923 19.908 19.93 19.908zM12.585 68.412a7.314 7.314 0 00-7.46 8.654 71.252 71.252 0 0069.656 56.269 71.252 71.252 0 0069.657-56.269 7.306 7.306 0 00-1.649-6.12 7.318 7.318 0 00-5.811-2.534H12.585z" fill="#fff" alt="videoask" color="#ffffff" className="styles__SvgLogoStyled-sc-13lm7vi-5 ibAvyo"></path></svg>
                    </div>
                </div>
            </VideoContainer>
        )
    }
}
const VideoContainer = styled.div`
    position:relative ;
    cursor: pointer;
    .progress-bar{
        position:absolute ;
        top:0;
        z-index:11
    }
    .controles{
        z-index:10;
        position:absolute ;
        top:40px;
        left:calc(100vw - 50vw - 33%);
        display:flex ;
        align-items:center ;
        justify-content:space-between ;
        gap:1rem;
        height:30px ;
        .time{
            font-size:medium ;
            color:white ;
            display:flex ;
            align-items:center ;
        }
        .cc,.speed,.fullscreen{
            display:flex ;
            align-items:center ;
            color:white ;
            transition:transform .2s ;
            :hover{
                transform: scale(1.5);
            }      
        }
        .cc{
            font-size:x-large ;
        }
        .speed{
            font-size:large ;
        }
        .fullscreen{
            font-size:large ;
        }
    }
    video{
        width:50vw ;
        min-height:100vh ;
        object-fit: cover;
        position:absolute ;
    }
    h1{
        z-index:1;
    }
    .play{
        position: absolute;
        background-color:transparent ;
        border:none ;
        top:calc(100vh - 60vh);
        left:calc(100vw - 50vw - 60%);
        transition: transform .2s;
        opacity:0.83 ;
    }
    :hover{
        .play{transform:scale(1.1) }
    }
    .welcome{
        position:absolute ;
        top:8vh;
        left:calc(100vw - 50vw - 92%);
        font-size:2.5rem ;
        color:white ;
    }
    .poweredBy{
        position: absolute;
        background-color:rgba(125, 0, 254, 0.592) ;
        display:flex ;
        flex-direction:column ;
        transition: transform .2s;
        padding:0.5rem ;
        border-radius:10px ;
        top:85vh;
        left:calc(100vw - 50vw - 92%);
        p{
            margin:0 ;
            margin-bottom:9px ;
            font-size:small ;
            color:white;
        }
        :hover{
            transform:scale(1.1) ;
            background-color:rgba(125, 0, 254, 1) ;
        }
    }
`
export default withVideo;