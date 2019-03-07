import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Form, Card, Carousel, Button, Input, Divider, Table  } from 'antd';
import styles from './GoodsDetails.less';
import DescriptionList from '@/components/DescriptionList';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

const { Description } = DescriptionList;

/* eslint react/no-array-index-key: 0 */

// 商品详情页
@connect(({ list, loading,goodsDetailsModel }) => ({
  list,
  loading: loading.models.list,
  goodsDetailsModel
}))
@Form.create()
class GoodsDetails extends PureComponent {
  state={
    carouselImg :'',
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
    this.init()
  }

  beforeChange=(a,b)=>{
    const {goodsDetailsModel:{goodsDetails:{img}} } = this.props;
    
    console.log(
      'a,b',a,b,img
    )    
    const that = this
    this.setState({
     // carouselImg:that.state.imgArr[b]
     carouselImg:img[b]
    })
    
  }

  init(){
    const {match,dispatch}=this.props;
    console.log('match',match.params.barcode)
    this.props.dispatch({
      type: 'goodsDetailsModel/getGoodsDetails',
      payload: {
        barcode:match.params.barcode
      },
    });
  }
  hot(){
    //const {goodsDetailsModel:{getDownPart:{goodsList,page}} } = this.props;
    this.props.dispatch({
      type: 'goodsDetailsModel/getDownPart',
      payload: {
        pageSize:"30"
      },
    });
  }


  render() {
    // const formItemLayout = {
    //   wrapperCol: {
    //     xs: { span: 24 },
    //     sm: { span: 16 },
    //   },
    // };
    const {goodsDetailsModel:{goodsDetails} } = this.props;
    const {goodsDetailsModel:{goodsDetails:{img,imgone}} } = this.props;
    //const {goodsDetailsModel:{GoodsDetails:{banner,brands,goods}} } = this.props;
    console.log('goodsDetails',goodsDetails)
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
    // const imgArr = [
    //   'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/bannerJapan.jpg',
    //   'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/bannerKorea.jpg',
    //   'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/bannerEuropeanAmerican.jpg',
    //   'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/bannerJapan.jpg',
    //   'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/bannerKorea.jpg',
    //   'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/bannerEuropeanAmerican.jpg'
    // ]
    const dataSource = [
      {
      key: '1',
      name:'商品名称(中文)',
      content: 'ISHIZAWA LABS 石泽研究所 毛孔抚子日本大米面膜 10片',
    }, {
      key: '2',
      name:'品牌',
      content: '胡彦祖',
    }, {
      key: '3',
      name:'进口国',
      content: '日本',
    }, {
      key: '4',
      name:'规格',
      content: '700g/桶',
    }, {
      key: '5',
      name:'生产商',
      content: '胡彦祖',
    }, {
      key: '6',
      name:'产品功效',
      content: '产品功效',
    }
    ];
    const columns = [
      {
        title: '商品参数',
        dataIndex: 'name',
        key: 'name',
        width:150
      },{
        title: '商品参数',
        dataIndex: 'content',
        key: 'content',
      }
    ]
    console.log(7777,img)


    //首页下半部 热销商品
    // const allList_hot = list ?(
    //   <div>
    //     <div  style={{width: '100%',height: '50px',marginTop:'50px',marginBottom:'2px'}} className={styles.nav_top} >
    //       <span  className={styles.nav_top_span} style={{float: 'left',fontSize:'24px',fontWeight:'bold'}}> 热销商品</span >
    //       <em onClick={this.handleDown} style={{cursor:'pointer',marginTop:'12px',float:'right',fontStyle:'normal'}} className={styles.nav_top_em}>
    //         换一批 <Icon style={{marginLeft:'10px'}} type="sync" spin />
    //       </em>
    //     </div>
    //     <Row>
    //       <List
    //         style={{ textAlign: 'center' }}
    //         rowKey="id"
    //         loading={loading}
    //         grid={{ gutter: 12, xl: 6, lg: 4, md: 4, sm: 2, xs: 1 }}
    //         dataSource={goodsList}
    //         renderItem={item => (
    //           <List.Item>
    //             <Card
    //               className={styles.card}
    //               hoverable
    //               cover={<img style={{padding: 20}} alt={item.goodsName} src={item.imgurl} />}
    //             >
    //               <Card.Meta
    //                 title={<a>{item.goodsName}</a>}
    //                 description={<Ellipsis className={styles.ellipsis} lines={2}>{item.price}</Ellipsis>}
    //               />
    //             </Card>
    //           </List.Item>
    //         )}
    //       />
    //     </Row>

    //   </div>
    // ):null;

    return (
      
      




      <PageHeaderWrapper
        content={<div style={{marginBottom:20}}>{mainSearch}</div>}
      >
        <Card bordered={false}>
          <div className={styles.goodsDetails}>
            <div>
              <Row gutter={16} type="flex" align="middle">
                <Col lg={10} md={10} sm={10} xs={24}>
                  <img style={{ width:'100%',padding:5,background:'pink' }} src={imgone} alt="" />
                  <Carousel autoplay slidesToShow={4} className={styles.carousel} beforeChange={this.beforeChange}>
                    { 
                       
                     
                      // this.state.imgArr.map((item) =>
                      img.map((item) =>
                      (
                        <div
                          key={item}
                        >
                          <img style={{ width:'100%',padding:5 }} src={item} alt="" />
                        </div>
                        ))
                    }


                  </Carousel>
                  
                </Col>
                <Col lg={13} md={13} sm={13} xs={23} offset={1}>
                  <h2>ISHIZAWA LABS 石泽研究所 毛孔抚子日本大米面膜 10片</h2>
                  <h3>精华非常多，敷完之后滋润弹嫩。第二天早晨的饱满感和滋润感，虽然只贴了5分钟，但是保湿力非常强！使用非常舒适。</h3>
                  <Divider dashed />
                  <DescriptionList size="small" col="1">
                    <Description term="价格">¥ {GoodsDetails.price}</Description>
                    {/*<Description term="原产地/国">日本</Description>*/}
                    {/*<Description term="所属分类">入浴剂</Description>*/}
                    {/*<Description term="单位型号">700g/桶</Description>*/}
                    {/*<Description term="保质期"> ~ 2017-08-08</Description>*/}
                    {/*<Description term="所在仓库">大连保税仓H</Description>*/}
                    {/*<Description term="剩余库存">13</Description>*/}
                    {/*<Description term="备注">存储方式成分人群等</Description>*/}
                  </DescriptionList>
                </Col>
                {/*<Col lg={4} md={4} sm={4} xs={24}>*/}
                  {/*<Button type="primary">加入购物车</Button>*/}
                {/*</Col>*/}
              </Row>

              <Divider dashed />
              <Row gutter={16} type="flex" justify="space-around">
                <Col lg={23} md={23} sm={23} xs={23}>
                  <Table
                    pagination={false}
                    dataSource={dataSource}
                    columns={columns}
                    bordered
                    size="middle"
                    showHeader={false}
                    title={() => '产品参数'}
                  />
                </Col>
              </Row>
              <Divider dashed />
              <Row gutter={16} type="flex" justify="space-around">
                <Col lg={23} md={23} sm={23} xs={23}>
                  <img style={{ width:'100%'}} src="http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/%E6%B6%88%E8%B4%B9%E9%A1%BB%E7%9F%A5.jpg" alt="" />
                </Col>
              </Row>
              <Divider dashed />
              <Row gutter={16} type="flex" justify="space-around">
                <Col lg={23} md={23} sm={23} xs={23}>
                  <img style={{ width:'100%'}} src="http://img10.360buyimg.com/imgzone/jfs/t1/15060/35/8384/136378/5c7623deE92004a46/31ba5e4dc2ecb53a.jpg" alt="" />
                </Col>
              </Row>
               {/* <Row gutter={16} type="flex" justify="space-around">
                <Col lg={23} md={23} sm={23} xs={23}>
                  {
                    // this.state.imgArr.map((item) =>
                    this.state.imgArr.map((item,index) =>
                    (
                      <div
                        key={index}
                      >
                        <img style={{ width:'100%',padding:5 }} src={item} alt="" />
                      </div>
                      ))
                  
                  }
                </Col>
              </Row> */}
              <Divider dashed />
            </div>
          </div>
        </Card>,
        {/* <div className={styles.coverCardList}>
          <div className={styles.cardList}>
         
            {allList_hot}
          </div>
        </div> */}
      </PageHeaderWrapper>
    );
  }
}

export default GoodsDetails;
