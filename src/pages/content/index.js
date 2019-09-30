import React from 'react';
import Timestamp from 'react-timestamp';
import './styles.css';

const Content = ({infoList, endPost, imgThumb}) => (
    
    <section className="container">
        {infoList.slice(0,endPost).map(resp => (
            
            <a href={`https://www.reddit.com/${resp.url}`} target="_blank" key={resp.id} rel="noopener noreferrer">
                <div className='conteiner-reddit' >
                    <div>
                        <img src={resp.imgThumb.indexOf('.jpg') !== -1 ? resp.imgThumb : imgThumb} alt="Thumb"/>
                    </div>    
                    <div>
                        <strong>{resp.title}</strong>
                        <p>Enviado as <Timestamp relative date={resp.date} /> por <span className='corUser'>{resp.userid}</span></p>
                        <p className="corDomain" >{resp.domain}</p>
                    </div>    
                </div>
            </a>

        ))}
    </section>
);

export default Content;