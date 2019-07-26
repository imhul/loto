import React from 'react';
import { Carousel  } from 'antd';

const MainSlider = () => (
    <Carousel autoplay dots={false}>
        <div>
            <h3>1</h3>
        </div>
        <div>
            <h3>2</h3>
        </div>
        <div>
            <h3>3</h3>
        </div>
        <div>
            <h3>4</h3>
        </div>
    </Carousel>
);

export default MainSlider;