import {React} from 'react';

const imgstyle = {
    padding : "3px"
}

export const MyImages = () => {
    return (
        <div className="MyImages">
            <img src="https://picsum.photos/300/400" style={imgstyle} alt="decorative images"/>
            <img src="https://picsum.photos/300/400?grayscale" style={imgstyle} alt="decorative images"/>
            <img src="https://picsum.photos/300/400" style={imgstyle} alt="decorative images"/>
        </div>
    );
}