import React from 'react';
import ReactPlayer from 'react-player';
import '../VideoPublicidad/videoPublicidad.css'
import TextoCeleste from '../TextoCeleste/TextoCeleste';

const VideoPublicidad = ({ url }) => {
  return (
    <div className='container__videoPublicidad'>
        <TextoCeleste text={"Video Publicitario"} />
        <div className='videoPublicidad' >
          <ReactPlayer url="https://res.cloudinary.com/dcf9eqqgt/video/upload/v1716929998/landing%20perritos/Video_Publicitario_para_M%C3%83_s_que_perros_peluquer%C3%83_a_canina_vkhzvd.mp4" controls={true} width="100%" height="100%" />
        </div>
      
      

    </div>
)};

export default VideoPublicidad;
