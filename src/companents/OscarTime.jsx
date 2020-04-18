
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import { SliderRail, Handle, Track, Tick } from "./Comp"; 
import React from 'react';
import axios from 'axios';
import OscarChild from './OscarChild';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import {gridStyleSider,gridStyleHeader, gridStyleContent, gridStyleLayout1} from  './style/grids/gridsStyle.js';
import s from './TimeChild.module.css';
import oscar from './style/picture/oscar.png';

const { Header, Footer, Sider, Content } = Layout;

const sliderStyle = {
  position: "relative",
  width: "100%"
};
  
  class OscarTime extends React.Component {
    constructor() {
      super();
      this.state = {
        selected: 2020,
        updated: 2020,
        min: 2018,
        max: 2020
      };
    }
  
    onChange = ([year]) => {
      this.setState({
        selected: year
      });
    };
  
    onUpdate = ([year]) => {
      this.setState({
        updated: year
      });
    };
  
    renderDateTime(date, header) {
      return (
        <div
          style={{
            width: "100%",
            textAlign: "center",
            fontFamily: "Arial",
            margin: 7
          }}
        >
          <b>{header}:</b>
          <div style={{ fontSize: 14 }}>{date}</div>
        </div>
      );
    }

    requestData(){
        const self = this;
        const data_url = 'https://avdeevaelena.github.io/json/oscar.json';
        const rowsTimeLine= [];
        axios.get(data_url)
                .then(function (response) {
                        const dataTimeLine=response.data;
                    for (let i = 0; i < dataTimeLine.length; i += 1) {
                      rowsTimeLine.push([
                                dataTimeLine[i].year ]
                         );
             }
                    self.setState({dateTimeLine: rowsTimeLine});
                })
                .catch(function (error) { 
                    console.log(error);
                })
                .finally(function () {     
                });     
    }
    componentDidMount() {
        this.requestData();      
    } 

    render() {
      const { min, max, selected, updated } = this.state;
      const dateTicks = this.state.dateTimeLine;
  
      return (
        <div>
            <Layout style={gridStyleLayout1} >
                  <Sider  style={gridStyleSider}>
                  <img className={s.sliderPhoto} src={oscar}/>
                  <img className={s.sliderPhoto} src={oscar}/>
                  </Sider>
                  <Layout>
                    <Header style={gridStyleHeader}> 
                    <h1 className={s.h1}>THE OSCAR WINNERS </h1>
                    <div style={{ margin: "5%", height: 100, width: "90%" }}>
                    <Slider
                      mode={1}
                      step={1}
                      domain={[+min, +max]}
                      rootStyle={sliderStyle}
                      onUpdate={this.onUpdate}
                      onChange={this.onChange}
                      values={[+selected]}
                    >
                      <Rail>
                        {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
                      </Rail>
                      <Handles>
                        {({ handles, getHandleProps }) => (
                          <div>
                            {handles.map(handle => (
                              <Handle
                                key={handle.id}
                                handle={handle}
                                domain={[+min, +max]}
                                getHandleProps={getHandleProps}
                              />
                            ))}
                          </div>
                        )}
                      </Handles>
                      <Tracks right={false}>
                        {({ tracks, getTrackProps }) => (
                          <div>
                            {tracks.map(({ id, source, target }) => (
                              <Track
                                key={id}
                                source={source}
                                target={target}
                                getTrackProps={getTrackProps}
                              />
                            ))}
                          </div>
                        )}
                      </Tracks>
                      <Ticks values={dateTicks}>
                        {({ ticks }) => (
                          <div>
                            {ticks.map(tick => (
                              <Tick
                                key={tick.id}
                                tick={tick}
                                count={ticks.length}   
                       o       />
                            ))}
                          </div>
                        )}
                      </Ticks>
                    </Slider>
                  </div>
                    </Header>
                    <Content style={gridStyleContent}>
                    <OscarChild my={this.state.selected} />            
                    </Content>
                    <Footer > made by React and me
                    <p> avdeevaelena5@gmail.com  </p> 
                    </Footer>
                  </Layout>
                </Layout>
          </div>
      );
    }
  }
  
export default OscarTime;
