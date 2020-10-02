import React from 'react';
import './widget.css';

function Widgets() {
    return (
        <div className="widgets">
              
         <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBMW&tabs=timeline&width=340&height=1500&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340"
         height="100%" style={{border:'none', overflow:'hidden'}}  scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        </div>
    )
}

export default Widgets
