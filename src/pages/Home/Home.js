import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Form, Card, Select, List, Input, Carousel,Icon,Button,Tag    } from 'antd';

import TagSelect from '@/components/TagSelect';
import Ellipsis from '@/components/Ellipsis';
import StandardFormRow from '@/components/StandardFormRow';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './Home.less';

const { Option } = Select;
const FormItem = Form.Item;

/* eslint react/no-array-index-key: 0 */

@connect(({ list,homeModel, loading }) => ({
  list,
  homeModel,
  loading: loading.models.list,
}))
@Form.create({
  // onValuesChange({ dispatch }, changedValues, allValues) {
  //   // 表单项变化时请求数据
  //   // eslint-disable-next-line
  //   console.log(changedValues, allValues);
  //   // 模拟查询表单生效
  //   dispatch({
  //     type: 'list/fetch',
  //     payload: {
  //       count: 18,
  //     },
  //   });
  // },
})
class Home extends PureComponent {
  state={
    carouselImg :'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/bannerJapan.jpg',
    imgArr:[
      'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/bannerJapan.jpg',
      'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/bannerKorea.jpg',
      'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/bannerEuropeanAmerican.jpg',
      'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/bannerJapan.jpg',
      'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/bannerKorea.jpg',
      'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/bannerEuropeanAmerican.jpg'
    ]
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'homeModel/getAllClassification',
      payload: {},
    });
    dispatch({
      type: 'list/fetch',
      payload: {
        count: 18,
      },
    });
    this.hot();
  }

  hot(){
    const {homeModel:{getDownPart:{goodsList,page}} } = this.props;
    //console.log('page',page)
    this.props.dispatch({
      type: 'homeModel/getDownPart',
      payload: {
        page:page
      },
    });
  }



  
  handleDown = () => {
    this.hot();
  }


  render() {
    const {homeModel:{getDownPart:{goodsList,page}} } = this.props;
    const {homeModel:{getDownPart} } = this.props;
    const {homeModel:{getUpPart}} = this.props;
    const {homeModel:{getUpPart:{banner,homePageChangeGoodsItem}}} = this.props;
   // console.log('循环',homePageChangeGoodsItem.classification)
    console.log(77777777,getUpPart)

    const bannerPlay = banner ?(
      <Carousel
          className={styles.carousel}
          autoplay
        >
          {
            banner.map((item,index) =>
            (
              <div
                key={index}
              >
                <img style={{ width:'100%',padding:0 }}  src={item} alt="" />
              </div>
            ))
          }

      </Carousel>
    ):null;

    const {
      list: { list = [] },
      loading,
      form,
    } = this.props;
    const { getFieldDecorator } = form;
    // const allList = list ?(
    //   <div>
    //     <div style={{width: '100%',height: '50px'}} className={styles.nav_top} ><span  className={styles.nav_top_span} style={{float: 'left',fontSize:'24px',fontWeight:'bold'}}> 日本馆</span ><em style={{cursor:'pointer',marginTop:'12px',float:'right',fontStyle:'normal'}} className={styles.nav_top_em}>换一批 <Icon style={{marginLeft:'10px'}} type="sync" spin /></em></div>
    //     <Row >
    //       <Col md={24} sm={24} xs={24} >
    //         <div style={{textAlign:'right', marginBottom:'10px'}}>
    //           <Tag color="red">分类一</Tag>
    //           <Tag color="red">分类二</Tag>
    //           <Tag color="red">分类三</Tag>
    //           <Tag color="red">分类四</Tag>
    //         </div>
    //       </Col>

    //     </Row>
    //     <Row>
    //       <List
    //         style={{ textAlign: 'center' }}
    //         rowKey="id"
    //         loading={loading}
    //         grid={{ gutter: 12, xl: 6, lg: 4, md: 4, sm: 2, xs: 1 }}
    //         dataSource={list}
    //     // pagination={{
    //     //   onChange: (page) => {
    //     //     console.log('page',page);
    //     //   },
    //     //   pageSize: 10,
    //     // }}
    //         renderItem={item => (
    //           <List.Item>
    //             <Card
    //               className={styles.card}
    //               hoverable
    //               cover={<img style={{padding: 20}} alt={item.title} src="http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/goodtest.png" />}
    //             >
    //               <Card.Meta
    //                 title={<a>{item.subDescription}</a>}
    //                 description={<Ellipsis className={styles.ellipsis} lines={2}>¥99.9999</Ellipsis>}
    //               />
    //             </Card>
    //           </List.Item>
    //         )}
    //       />
    //     </Row>
    //     <Row type="flex" align="middle" className={styles.demo_flex}>
    //       <Col  lg={2} md={4} sm={6} xs={8} style={{padding:'0'}}>
    //         <div style={{textAlign:'center'}}>热销商品</div>
    //       </Col>
    //       {
    //         this.state.imgArr.map((item,index) =>
    //         (
    //           <Col
    //             lg={2} md={4} sm={6} xs={8} style={{padding:'0'}} key={index}
    //           >
    //             <img style={{ width:'100%',padding:0 }}  src={item} alt="" />
    //           </Col>
    //         ))
    //       }
    //     </Row>
    //   </div>
    // ):null;

    //homePageChangeGoodsItem
    // {
    //   banner.map((item,index) =>
    //   (
    //     <div
    //       key={index}
    //     >
    //       <img style={{ width:'100%',padding:0 }}  src={item} alt="" />
    //     </div>
    //   ))
    // }


    const allList = homePageChangeGoodsItem ?(

      homePageChangeGoodsItem.map((item,index) =>
      (
        <div
          key={index}
        >
          <div style={{width: '100%',height: '50px'}} className={styles.nav_top} ><span  className={styles.nav_top_span} style={{float: 'left',fontSize:'24px',fontWeight:'bold'}}> 日本馆</span ><em style={{cursor:'pointer',marginTop:'12px',float:'right',fontStyle:'normal'}} className={styles.nav_top_em}>换一批 <Icon style={{marginLeft:'10px'}} type="sync" spin /></em></div>
        <Row >
          <Col md={24} sm={24} xs={24} >
            {/* <div style={{textAlign:'right', marginBottom:'10px'}}>
              <Tag color="red">分类一</Tag>
              <Tag color="red">分类二</Tag>
              <Tag color="red">分类三</Tag>
              <Tag color="red">分类四</Tag> */}
              {
                 homePageChangeGoodsItem[index].classification.map((item,index) =>
                 (
                   <span
                    style={{textAlign:'right', marginBottom:'10px',float:'right'}}
                    key={index}
                   >
                     <Tag color="red">{item.allclassification}</Tag>
                   </span>
                 ))
              }
            {/* </div> */}
          </Col>
        </Row>
        <Row>
          <List
            style={{ textAlign: 'center' }}
            rowKey="id"
            loading={loading}
            grid={{ gutter: 12, xl: 6, lg: 4, md: 4, sm: 2, xs: 1 }}
            dataSource={list}
        // pagination={{
        //   onChange: (page) => {
        //     console.log('page',page);
        //   },
        //   pageSize: 10,
        // }}

            renderItem={item => (
              <List.Item>
                <Card
                  className={styles.card}
                  hoverable
                  cover={<img style={{padding: 20}} alt={item.title} src="http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/goodtest.png" />}
                >
                  <Card.Meta
                    title={<a>{item.subDescription}</a>}
                    description={<Ellipsis className={styles.ellipsis} lines={2}>¥99.9999</Ellipsis>}
                  />
                </Card>
              </List.Item>
            )}  

            // renderItem={item => (
            //   <List.Item>
            //     <Card
            //       className={styles.card}
            //       hoverable
            //       cover={<img style={{padding: 20}} alt={item.title} src="http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/goodtest.png" />}
            //     >
            //       <Card.Meta
            //         title={<a>{item.subDescription}</a>}
            //         description={<Ellipsis className={styles.ellipsis} lines={2}>¥99.9999</Ellipsis>}
            //       />
            //     </Card>
            //   </List.Item>
            // )}
          />
        </Row>
        <Row type="flex" align="middle" className={styles.demo_flex}>
          <Col  lg={2} md={4} sm={6} xs={8} style={{padding:'0'}}>
            <div style={{textAlign:'center'}}>热销商品</div>
          </Col>
          {
            // this.state.imgArr.map((item,index) =>
            // (
            //   <Col
            //     lg={2} md={4} sm={6} xs={8} style={{padding:'0'}} key={index}
            //   >
            //     <img style={{ width:'100%',padding:0 }}  src={item} alt="" />
            //   </Col>
            // ))
            homePageChangeGoodsItem[index].brandimgs.map((item,index) =>
            (
              <Col
                lg={2} md={4} sm={6} xs={8} style={{padding:'0'}} key={index}
              >
                <img style={{ width:'100%',padding:0 }}  src={item} alt="" />
              </Col>
            ))
          }
        </Row>
        </div>
      ))
      



      
    ):null;






//首页下半部 热销商品
const allList_hot = list ?(
      <div>
        <div onClick={this.handleDown} style={{width: '100%',height: '50px',marginTop:'50px',marginBottom:'2px'}} className={styles.nav_top} ><span  className={styles.nav_top_span} style={{float: 'left',fontSize:'24px',fontWeight:'bold'}}> 热销商品</span ><em style={{cursor:'pointer',marginTop:'12px',float:'right',fontStyle:'normal'}} className={styles.nav_top_em}>换一批 <Icon style={{marginLeft:'10px'}} type="sync" spin /></em></div>
        <Row>
          <List
            style={{ textAlign: 'center' }}
            rowKey="id"
            loading={loading}
            grid={{ gutter: 12, xl: 6, lg: 4, md: 4, sm: 2, xs: 1 }}
            dataSource={goodsList}

            renderItem={item => (
              <List.Item>
                <Card
                  className={styles.card}
                  hoverable
                  cover={<img style={{padding: 20}} alt={item.goodsName} src={item.imgurl} />}
                >
                  <Card.Meta
                    title={<a>{item.goodsName}</a>}
                    description={<Ellipsis className={styles.ellipsis} lines={2}>{item.price}</Ellipsis>}
                  />
                </Card>
              </List.Item>
            )}
          />
        </Row>

      </div>
    ):null;





    const formItemLayout = {
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const mainSearch = (
      <div style={{ textAlign: 'center' }}>
        <Row type="flex" justify="center">
          <Col lg={10} md={12} sm={16} xs={24}>
            <Input.Search
              placeholder="请输入"
              enterButton="搜索"
              size="large"
              onSearch={this.handleFormSubmit}
              // style={{ width: 522 }}
            />
          </Col>
        </Row>
      </div>
    );

   


    return (
      
      <PageHeaderWrapper
        title=""
        content={<div style={{marginBottom:20}}>{mainSearch}</div>}
      >
      {bannerPlay}
        {/* <Carousel
          className={styles.carousel}
          autoplay
        >
          <div>
            <img style={{ width:'100%' }} src="http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/bannerJapan.jpg" alt="" />
          </div>
          <div>
            <img style={{ width:'100%' }} src="http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/bannerJapan.jpg" alt="" />
          </div>
        </Carousel> */}

        <div className={styles.coverCardList}>

          <div className={styles.cardList}>
            {/* {cardList} */}
            {allList}
            {allList_hot}
          </div>
        </div>
      </PageHeaderWrapper>
    );
  }
}


export default Home;
