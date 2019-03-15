import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Form, Card, Carousel, Button, Input, Divider, Table,List  } from 'antd';
import { routerRedux, Link } from 'dva/router';
import styles from './GoodsDetails.less';
import Ellipsis from '@/components/Ellipsis';
import DescriptionList from '@/components/DescriptionList';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { message } from 'antd';
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
    
    
  }

  componentDidMount() {
    this.init()
    this.hot()
  }

  beforeChange=(a,b)=>{
    this.props.dispatch({
      type: 'goodsDetailsModel/changeShowImgR',
      payload: b,
    });
  }
  handleClickImg=(a)=>{
    this.props.dispatch({
      type: 'goodsDetailsModel/clickShowImgR',
      payload: a,
    });
  }

  init(){
    const {match,dispatch}=this.props;
    this.props.dispatch({
      type: 'goodsDetailsModel/getGoodsDetails',
      payload: {
        barcode:match.params.barcode,
      },
    });
  }

  hot(){
    // const {goodsDetailsModel:{getDownPart:{goodsList,page}} } = this.props;
    this.props.dispatch({
      type: 'goodsDetailsModel/getDownPart',
      payload: {
        pageSize:"12"
      },
    });
  }
  handleFormSubmit = (value) => {
    if(value.includes('/')){
      message.error('不可输入特殊字符');
    } else {
      // this.props.dispatch(routerRedux.push('/search/' + JSON.stringify(value)));
      this.props.dispatch(routerRedux.push(`/search/${value===''?undefined:value}`))
    }
  }

  render() {
    const {goodsDetailsModel:{getDownPart:{goodsList},goodsDetails,goodsDetails:{img,imgone,goodsDes,goodsName,goodsParameters,price,goodsDetailImgArr}} } = this.props;

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

    const {
      list: { list = [] },
      loading,
    } = this.props;

    // 热销商品
    const allList_hot = list ?(
      <div>
        <div style={{width: '100%',height: '50px',marginTop:'50px',marginBottom:'2px'}} className={styles.nav_top}>
          <span className={styles.nav_top_span} style={{float: 'left',fontSize:'24px',fontWeight:'bold'}}> 热销商品</span>
        </div>
        <Row>
          <List
            style={{ textAlign: 'center' }}
            rowKey="id"
            loading={loading}
            grid={{ gutter: 12, xl: 6, lg: 4, md: 4, sm: 2, xs: 1 }}
            dataSource={goodsList}
            renderItem={item => (
              <List.Item>
                <Link target="_blank" to={`/goodsDetails/${item.barcode}`}>
                  <Card
                    className={styles.card}
                    hoverable
                    cover={<img style={{padding: 20}} alt={item.goodsName} src={item.imgurl} />}
                  >
                    <Card.Meta
                      style={{marginTop:'-30px'}}
                      // title={<p>{item.goodsName}</p>}
                      description={
                        <div>
                          <Ellipsis className={styles.ellipsisName} lines={2}>{item.goodsName}</Ellipsis>
                          <Ellipsis className={styles.ellipsis} lines={2}>{item.price}</Ellipsis>
                        </div>
                      }
                    />
                  </Card>
                </Link>
              </List.Item>
            )}
          />
        </Row>
      </div>
    ):null;
    return (
      <PageHeaderWrapper
        content={<div style={{marginBottom:20}}>{mainSearch}</div>}
      >
        <Card bordered={false}>
          <div className={styles.goodsDetails}>
            <div>
              <Row gutter={16} type="flex" align="middle">

                <Col lg={8} md={8} sm={8} xs={24}>
                  <img style={{ width:'100%',padding:5 }} src={imgone} alt="" />
                  {/* <img style={{ width:'100%',padding:5 }} src={imgone} alt="" /> */}

                </Col>
                <Col lg={2} md={2} sm={2} xs={24}>
                  <Carousel
                    vertical
                    autoplay
                    slidesToShow={4}
                    initialSlide={0}
                    className={styles.carousel}
                    beforeChange={this.beforeChange}
                  >
                    {
                      // this.state.imgArr.map((item) =>
                      img.map((item) =>
                        (
                          <div
                            key={item}
                          >
                            <img style={{ width:'100%',padding:5 }} onMouseOver={()=>this.handleClickImg(item)} onClick={()=>this.handleClickImg(item)} src={item} alt="" />
                          </div>
                        ))
                    }
                  </Carousel>
                </Col>
                <Col lg={13} md={13} sm={13} xs={23} offset={1}>
                  <h2>{goodsName}</h2>
                  <h3>{goodsDes}</h3>
                  <Divider dashed />
                  <DescriptionList size="small" col="1">
                    <Description term="价格">{price}</Description>
                    {/* <Description term="原产地/国">日本</Description> */}
                    {/* <Description term="所属分类">入浴剂</Description> */}
                    {/* <Description term="单位型号">700g/桶</Description> */}
                    {/* <Description term="保质期"> ~ 2017-08-08</Description> */}
                    {/* <Description term="所在仓库">大连保税仓H</Description> */}
                    {/* <Description term="剩余库存">13</Description> */}
                    {/* <Description term="备注">存储方式成分人群等</Description> */}
                  </DescriptionList>
                  <div>7777</div>
                </Col>
                {/* <Col lg={4} md={4} sm={4} xs={24}> */}
                {/* <Button type="primary">加入购物车</Button> */}
                {/* </Col> */}
              </Row>
              <Divider dashed />
              <Row gutter={16} type="flex" justify="space-around">
                <Col lg={23} md={23} sm={23} xs={23}>
                  <Table
                    pagination={false}
                    // dataSource={dataSource}
                    dataSource={goodsParameters}
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
                  {
                    goodsDetailImgArr.map((item,index) =>
                    (
                      <div
                        key={index}
                      >
                        <img style={{ width:'100%',padding:5 }} src={item} alt="" />
                      </div>
                      ))
                  }
                </Col>
              </Row>
              <Divider dashed />
            </div>
          </div>
        </Card>,
        {allList_hot}
      </PageHeaderWrapper>
    );
  }
}

export default GoodsDetails;
