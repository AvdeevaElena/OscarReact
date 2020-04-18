import React from 'react';
import s from './TimeChild.module.css';
import axios from 'axios';
import { Card, Col, Row } from 'antd';
import { styleCard} from  './style/grids/gridsStyle.js';
const { Meta } = Card;

class OscarChild extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: "" };
    }

    requestData(dataToRequest){
   
        const self = this;
        const data_url = 'https://avdeevaelena.github.io/json/oscar.json';
        const photoLine =[];
        const yearLine =[];
        const titleLine =[];
        const producerLine =[];
        const infoLine =[];
        const animatedPhotoLine =[];
        const animatedInfoLine =[];
        const animatedProducerLine =[];
        const animatedTitleLine =[];
        const bestActorNameLine =[];
        const bestActorUrlLine =[];
        const bestActorMovieLine =[];
        const bestActressNameLine =[];
        const bestActressUrlLine =[];
        const bestActressMovieLine =[];
        const bestCostumeDesignNameLine =[];
        const bestCostumeDesignUrlLine =[];
        const bestCostumeDesignMovieLine =[];
        const bestCinematographyNameLine =[];
        const bestCinematographyUrlLine =[];
        const bestCinematographyMovieLine =[];

        axios.get(data_url)
                .then(function (response) {
                    const dataTimeLine=response.data;
                    
                    for (let i = 0; i <= dataTimeLine.length; i += 1) {
                      if ( Number(dataTimeLine[i].year) === Number(dataToRequest)) { 
                        yearLine.push([dataTimeLine[i].year] );
                        photoLine.push([dataTimeLine[i].best_picture.url] );
                        titleLine.push([dataTimeLine[i].best_picture.title] );
                        producerLine.push([dataTimeLine[i].best_picture.producer] );
                        infoLine.push([dataTimeLine[i].best_picture.info] );
                        animatedPhotoLine.push([dataTimeLine[i].best_picture_animated.url]);
                        animatedTitleLine.push([dataTimeLine[i].best_picture_animated.title]);
                        animatedProducerLine.push([dataTimeLine[i].best_picture_animated.producer]);
                        animatedInfoLine.push([dataTimeLine[i].best_picture_animated.info]);
                        bestActorNameLine.push([dataTimeLine[i].best_actor.name]);
                        bestActorUrlLine.push([dataTimeLine[i].best_actor.url]);
                        bestActorMovieLine.push([dataTimeLine[i].best_actor.movie]);
                        bestActressNameLine.push([dataTimeLine[i].best_actress.name]);
                        bestActressUrlLine.push([dataTimeLine[i].best_actress.url]);
                        bestActressMovieLine.push([dataTimeLine[i].best_actress.movie]);
                        bestCostumeDesignNameLine.push([dataTimeLine[i].costume_design.name]);
                        bestCostumeDesignUrlLine.push([dataTimeLine[i].costume_design.url]);
                        bestCostumeDesignMovieLine.push([dataTimeLine[i].costume_design.movie]);
                        bestCinematographyNameLine.push([dataTimeLine[i].cinematography.name]);
                        bestCinematographyUrlLine.push([dataTimeLine[i].cinematography.url]);
                        bestCinematographyMovieLine.push([dataTimeLine[i].cinematography.movie]);
                        self.setState({bestCostumeDesignName: bestCostumeDesignNameLine});
                        self.setState({bestCostumeDesignUrl: bestCostumeDesignUrlLine});
                        self.setState({bestCostumeDesignMovie: bestCostumeDesignMovieLine});                    
                        self.setState({bestCinematographyName: bestCinematographyNameLine});
                        self.setState({bestCinematographyUrl: bestCinematographyUrlLine});
                        self.setState({bestCinematographyMovie: bestCinematographyMovieLine});
                        self.setState({bestActressName: bestActressNameLine});
                        self.setState({bestActressUrl: bestActressUrlLine});
                        self.setState({bestActressMovie: bestActressMovieLine});
                        self.setState({bestActorName: bestActorNameLine});
                        self.setState({bestActorUrl: bestActorUrlLine});
                        self.setState({bestActorMovie: bestActorMovieLine});
                        self.setState({dateTicks: yearLine});
                        self.setState({photoUrl: photoLine});
                        self.setState({titleBestMovie: titleLine});
                        self.setState({producerBestMovie: producerLine});
                        self.setState({infoBestMovie: infoLine});
                        self.setState({animatedInfo: animatedInfoLine});
                        self.setState({animatedProdecere: animatedProducerLine});
                        self.setState({animatedTitle: animatedTitleLine});
                        self.setState({animatedPhoto: animatedPhotoLine});
                      }
                    }
                })
                .catch(function (error) { 
                    console.log(error);
                })
                .finally(function () {     
                });     
    }
    
    componentWillReceiveProps(nextProps) {
        console.log('next props', nextProps.my); 
        console.log('value pass', this.props.my);  
  
        if (this.props.my !== nextProps.my) {
             this.requestData(nextProps.my);
        }
        else    this.requestData(this.props.my);
    }      
  render() {
      let photo = this.state.photoUrl;
      let titleBestMovie = this.state.titleBestMovie;
      let prodecer  = this.state.producerBestMovie;
      let animatedProdecere  = this.state.animatedProdecere;
      let animatedTitle  = this.state.animatedTitle;
      let animatedPhoto  = this.state.animatedPhoto;   
      let bestActorName = this.state.bestActorName;
      let bestActorMovie = this.state.bestActorMovie;
      let bestActorUrl = this.state.bestActorUrl;
      let bestActressName = this.state.bestActressName;
      let bestActressMovie = this.state.bestActressMovie;
      let bestActressUrl = this.state.bestActressUrl;  
      let bestCostumeDesignName = this.state.bestCostumeDesignName;
      let bestCostumeDesignMovie = this.state.bestCostumeDesignMovie;
      let bestCostumeDesignUrl = this.state.bestCostumeDesignUrl;
      let bestCinematographyName = this.state.bestCinematographyName;
      let bestCinematographyMovie = this.state.bestCinematographyMovie;
      let bestCinematographyUrl = this.state.bestCinematographyUrl;

      return ( <div>
<div className="s.site-card-wrapper" style={{ background: "rgb(187,187,187)", padding: "10px" }}>
    <Row gutter={16}>
      <Col span={8}>
      <Card  style={styleCard}  title="BEST ACTOR" bordered={true}>
        <img  className={s.mainPhoto} alt="example" src={bestActorUrl} />
        <Meta  style={styleCard} title={bestActorName} description={bestActorMovie}  />
        </Card>
      </Col>
      <Col span={8}>
      <Card  style={styleCard}  title="BEST PICTURE" bordered={true} >
        <img  className={s.mainPhoto} alt="example" src={photo} />
        <Meta  style={styleCard} title={titleBestMovie} description={prodecer} />
        </Card>
      </Col>
      <Col span={8}>
      <Card  style={styleCard}  title="BEST ACTRESS" bordered={true}>
        <img  className={s.mainPhoto} alt="example" src={bestActressUrl} />
        <Meta  style={styleCard} title={bestActressName} description={bestActressMovie} />
        </Card>
      </Col>
    </Row>
    <Row gutter={16} style={{  padding: "25px 0px 0px 0px" }}>
    <Col span={8}>
      <Card  style={styleCard}  title="BEST COSTUME DESIGN" bordered={true}>
        <img  className={s.mainPhoto} alt="example" src={bestCostumeDesignUrl} />
        <Meta  style={styleCard} title={bestCostumeDesignName} description={bestCostumeDesignMovie} />
        </Card>
      </Col>
      <Col span={8}>
      <Card  style={styleCard}  title="BEST ANIMATED PICTURE" bordered={true}>
        <img  className={s.mainPhoto} alt="example" src={animatedPhoto} />
        <Meta  style={styleCard} title={animatedTitle} description={animatedProdecere}  />
        </Card>
      </Col>
      <Col span={8}>
      <Card  style={styleCard}  title="BEST CINEMATOGRAPHY PICTURE" bordered={true}>
        <img  className={s.mainPhoto} alt="example" src={bestCinematographyUrl} />
        <Meta  style={styleCard} title={bestCinematographyName} description={bestCinematographyMovie}  />
        </Card>
      </Col>
    </Row>
  </div>
  </div>
      );
    }
  
  }
  export default OscarChild;