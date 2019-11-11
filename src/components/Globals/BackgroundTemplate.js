import React from 'react'
import BackgroundImage from 'gatsby-background-image'

export default function BackgroundTemplate({img, styleClass, title, children }) {
    //BackgroundTemplate is like a wrapper, around the BackgroundImage, which can be customized and that applies to the bg Image
    // the children parameter is just to add anything other than the title in the background, like a button, and display it
    return (
        <BackgroundImage className={styleClass} fluid={img}>
            <h1 className="title text-center text-uppercase text-white display-4 font-weight-bold">{title}</h1>
            {children}
        </BackgroundImage>
    );
}

// Default Pros are quite like a setting that needs to be applied all over and preventing it to be added manually everywhere
BackgroundTemplate.defaultProps= {
    title: "Guhan's Coffee",
    styleClass: "default-background"
}; 