import React from 'react';

export const ColorComponents = (props) => {
    const { color, children} = props
    const constStyle = {
        color,
        fontSize: '18px'
    };
    return (
        <p style={constStyle}>{children}</p>
    );
};

//export default ColorComponents;