import React from 'react';
import tileData from '../../assets/pics.json'
import { Card, CardImg } from 'reactstrap';

let pic = tileData[0].image
// src="<%= asset_url('path/to/image.png') %>"
const Example = _ => {
  
  return (

    <div>
      <Card>
        <CardImg top width="100%" src={} alt={tileData[0].id} />
      </Card>
    </div>
  );
};

export default Example;