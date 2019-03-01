import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Form, Card, Carousel, Button, Input } from 'antd';
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
    return (
      <PageHeaderWrapper
        content={<div style={{marginBottom:20}}>{mainSearch}</div>}
      >
        <Card bordered={false}>
          <div className={styles.goodsDetails}>
            <div>
              <Row gutter={16}>
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
                <Col lg={7} md={7} sm={7} xs={23} offset={1}>
                  <h2>商品名称</h2>
                  <DescriptionList size="small" col="1">
                    <Description term="所属品牌">纪阳除</Description>
                    <Description term="原产地/国">日本</Description>
                    <Description term="所属分类">入浴剂</Description>
                    <Description term="单位型号">700g/桶</Description>
                    <Description term="保质期"> ~ 2017-08-08</Description>
                    <Description term="所在仓库">大连保税仓H</Description>
                    <Description term="剩余库存">13</Description>
                    <Description term="备注">存储方式成分人群等</Description>
                  </DescriptionList>
                </Col>
                <Col lg={4} md={4} sm={4} xs={24}>
                  <Button type="primary">加入购物车</Button>
                </Col>
              </Row>
            </div>
            <div className={styles.imgsDetails}>
              <Row gutter={16}>
                <img style={{ width:'100%'}} src="http://img10.360buyimg.com/imgzone/jfs/t1/15060/35/8384/136378/5c7623deE92004a46/31ba5e4dc2ecb53a.jpg" alt="" />
              </Row>
            </div>
          </div>
        </Card>,
      </PageHeaderWrapper>
    );
  }
}

export default GoodsDetails;
