import React from 'react';
import Card from './Card';
import './SecondarySection.module.css';

const SecondarySection: React.FC = () => {
  return (
    <div className="container vh-100 overflow-auto">
        <div className="row my-1">
            <Card imgSrc="shoes/shoes-09.png" imgAlt="Image 1" title="Title 1" price="$10" />
            <Card imgSrc="shoes/shoes-02.png" imgAlt="Image 2" title="Title 2" price="$20" />
        </div>
        <div className="row my-1">
            <Card imgSrc="shoes/shoes-03.png" imgAlt="Image 1" title="Title 1" price="$10" />
            <Card imgSrc="shoes/shoes-04.png" imgAlt="Image 2" title="Title 2" price="$20" />
        </div>
        <div className="row my-1">
            <Card imgSrc="shoes/shoes-05.png" imgAlt="Image 1" title="Title 1" price="$10" />
            <Card imgSrc="shoes/shoes-06.png" imgAlt="Image 2" title="Title 2" price="$20" />
        </div>
        <div className="row my-1">
            <Card imgSrc="shoes/shoes-07.png" imgAlt="Image 1" title="Title 1" price="$10" />
            <Card imgSrc="shoes/shoes-08.png" imgAlt="Image 2" title="Title 2" price="$20" />
        </div>
    </div>
  );
};

export default SecondarySection;