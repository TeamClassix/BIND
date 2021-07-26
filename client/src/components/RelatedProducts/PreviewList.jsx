import React from 'react';

const PreviewList = ({ title, list }) => {
  console.log('stop');
  return (
    <div>
      <h1>{title}</h1>
      <div>
        {list.map(item => <ItemPreview key={item.id} value={item} />)}
      </div>
    </div>
  );
};

export default PreviewList;
