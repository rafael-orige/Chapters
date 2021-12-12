import React from "react";

import ModalLink from "../ModalLink";

export default function Modal({imageInfo, onClick, state}) {
    return (
        <div className={`image-modal ${state}`}>
            <div className="modal-background" onClick={onClick}></div>
            <div className="modal">
                <div className="close-btn" onClick={onClick}>
                    <div></div>
                    <div></div>
                </div>
                <div className="modal-image--area">
                    <img src={imageInfo.src.large} alt={imageInfo.photographer} className="modal-image" loading="lazy"/>
                </div>
                <div className="modal-image--info">
                    <div className="modal-image--authorInfo">
                        <div className="image-author">Photo uploaded by <a href={imageInfo.photographer_url} target="_blank" rel="noopener noreferrer">{imageInfo.photographer}</a></div>
                        <div className="image-proportion">Image's size: {imageInfo.width}x{imageInfo.height}</div>
                        <div className="image-add">
                            <p>Add to favorites</p>
                            <p>Add to album</p>
                        </div>
                    </div>
                    <ul>
                        <li><ModalLink imageLink={imageInfo.src.original} imageSize={"Original"}/></li>
                        <li><ModalLink imageLink={imageInfo.src.landscape} imageSize={"Landscape"}/></li>
                        <li><ModalLink imageLink={imageInfo.src.large} imageSize={"Large"}/></li>
                        <li><ModalLink imageLink={imageInfo.src.portrait} imageSize={"Portrait"}/></li>
                        <li><ModalLink imageLink={imageInfo.src.medium} imageSize={"Medium"}/></li>
                        <li><ModalLink imageLink={imageInfo.src.small} imageSize={"Small"}/></li>
                    </ul>
                    
                </div>
            </div>
        </div>
    );
}