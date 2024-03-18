import React from 'react'
import '../style/ComponentPrincipales.css'

export const ComponentPrincipales = ({community, time, tittle, description, likes=0, comments=0}) => {
  const timeAgo = Date.now()-time;
  let avarageTime;
  if (Math.floor(timeAgo/31104000000)>=1) {
    avarageTime = Math.floor(timeAgo/31104000000).toString()+' a.'
  } else if (Math.floor(timeAgo/2592000000)>=1) {
    avarageTime = Math.floor(timeAgo/2592000000).toString()+' m.'
  } else if (Math.floor(timeAgo/86400000)>=1) {
    avarageTime = Math.floor(timeAgo/86400000).toString()+' d.'
  } else if (Math.floor(timeAgo/3600000)>=1) {
    avarageTime = Math.floor(timeAgo/3600000).toString()+' h.'
  } else if (Math.floor(timeAgo/60000)>=1) {
    avarageTime = Math.floor(timeAgo/60000).toString()+' min.'
  } else {avarageTime = ' un momento'}
  

  return (
    <article className="rd-principal">
    <div className="rd-principal-header">
      <div className='rd-principal-header-left'>
        <img src={`https://unavatar.io/twitter/${community}`} className='rd-principal-header-left-icon' height={24} width={24}/>
        <p className='rd-principal-header-left-subtittle'><strong>r/{community}</strong> · hace {avarageTime}</p>
      </div>
      <div className='rd-principal-header-right'>
        <button className='rd-principal-header-right-joinButton rd-principal-button'>Unirse</button>
        <button className="rd-principal-header-right-configButton rd-principal-button"><i class="fa-solid fa-ellipsis"></i></button>
      </div>
    </div>

    <h3 className='rd-principal-tittle'>{tittle}</h3>

    <p className="rd-principal-description">{description}</p>

      <div className="rd-principal-bottom">
      <div className="rd-principal-bottom-likes">
        <button className="rd-principal-bottom-likes-high rd-principal-button"><i class="fa-solid fa-up-long"></i></button>
        {likes}
        <button className="rd-principal-bottom-likes-low rd-principal-button"><i class="fa-solid fa-down-long"></i></button>
      </div>
      <button className="rd-principal-bottom-comments rd-principal-button"><i class="fa-regular fa-comment"></i>{comments}</button>
      <button className="rd-principal-bottom-share rd-principal-button"><i class="fa-solid fa-arrow-up-from-bracket"></i>Compartir</button>
    </div>
    </article>
  )
}
