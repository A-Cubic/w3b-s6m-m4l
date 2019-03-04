import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Form, Card, Carousel, Button, Input, Divider, Table  } from 'antd';
import styles from './GoodsDetails.less';
import DescriptionList from '@/components/DescriptionList';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

const { Description } = DescriptionList;

/* eslint react/no-array-index-key: 0 */

// 商品详情页
@connect(({ list, loading }) => ({
  list,
  loading: loading.models.list,
}))
@Form.create()
class GoodsDetails extends PureComponent {
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

  }

  beforeChange=(a,b)=>{
    const that = this
    this.setState({
      carouselImg:that.state.imgArr[b]
    })
  }

  render() {
    // const formItemLayout = {
    //   wrapperCol: {
    //     xs: { span: 24 },
    //     sm: { span: 16 },
    //   },
    // };
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
    return (
      <PageHeaderWrapper
        content={<div style={{marginBottom:20}}>{mainSearch}</div>}
      >
        <Card bordered={false}>
          <div className={styles.goodsDetails}>
            <div>
              <Row gutter={16} type="flex" align="middle">
                <Col lg={12} md={12} sm={12} xs={24}>
                  <img style={{ width:'100%',padding:5 }} src={this.state.carouselImg} alt="" />
                  <Carousel autoplay slidesToShow={3} className={styles.carousel} beforeChange={this.beforeChange}>
                    {
                      this.state.imgArr.map((item) =>
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
                <Col lg={11} md={11} sm={11} xs={23} offset={1}>
                  <h2>ISHIZAWA LABS 石泽研究所 毛孔抚子日本大米面膜 10片</h2>
                  <h3>精华非常多，敷完之后滋润弹嫩。第二天早晨的饱满感和滋润感，虽然只贴了5分钟，但是保湿力非常强！使用非常舒适。</h3>
                  <Divider dashed />
                  <DescriptionList size="small" col="1">
                    <Description term="价格">¥ 33.33</Description>
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
            </div>
          </div>
        </Card>,
      </PageHeaderWrapper>
    );
  }
}

export default GoodsDetails;
