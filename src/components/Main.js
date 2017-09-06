require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//获取图片相关的数据
let imageDatas = require('json!../data/imageDatas.json');
//利用自执行函数，将图片名信息转成图片URL路径信息
imageDatas=(function genImageURL(imageDatasArr) {
  for(var i=0;i<imageDatasArr.length;i++){
    let singleImageData=imageDatasArr[i];
    singleImageData.imageURL=require('../images/'+singleImageData.fileName);
     imageDatasArr[i]=singleImageData;
  }
  return imageDatasArr;
})(imageDatas);

class ImgFigure extends React.Component {
  render() {
    return (
      <figure>
          <img src={this.props.data.imageURL}
                alt={this.props.data.title}/>
          <figcaption>
              <h2>{this.props.data.title}</h2>
          </figcaption>
      </figure>
    );
  }
}

class GalleryByReactApp extends React.Component {


  render() {

      let controllerUnits=[];
      let imgFigures=[];

      imageDatas.forEach((value, index) =>{

      imgFigures.push(<ImgFigure data = {value} key={'imgFigures'+index}/>);

    });
    return (
      <section className="stage">
        <section className="img-sec">
          {imgFigures}
        </section>
        <nav className="controller-nav">
          {controllerUnits}
        </nav>
      </section>
    );
  }
}

GalleryByReactApp.defaultProps = {
};

export default GalleryByReactApp;
