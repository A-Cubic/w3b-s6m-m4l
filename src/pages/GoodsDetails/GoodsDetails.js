import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Form, Card, Carousel, Button } from 'antd';
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
  componentDidMount() {

  }

  render() {
    // const formItemLayout = {
    //   wrapperCol: {
    //     xs: { span: 24 },
    //     sm: { span: 16 },
    //   },
    // };
    return (
      <PageHeaderWrapper>
        <Card bordered={false}>
          <div className={styles.goodsDetails}>
            <div>
              <Row gutter={16}>
                <Col lg={12} md={12} sm={12} xs={24}>
                  <Carousel autoplay slidesToShow={2} className={styles.carousel}>
                    <div>
                      <img style={{ width:'100%',padding:5 }} src="http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/bannerJapan.jpg" alt="" />
                    </div>
                    <div>
                      <img style={{ width:'100%',padding:5}} src="http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/bannerJapan.jpg" alt="" />
                    </div>
                    <div>
                      <img style={{ width:'100%',padding:5}} src="http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/bannerJapan.jpg" alt="" />
                    </div>
                    <div>
                      <img style={{ width:'100%',padding:5}} src="http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/bannerJapan.jpg" alt="" />
                    </div>
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
                <img style={{ width:'100%'}} src="http://ecc-product.oss-cn-beijing.aliyuncs.com/goodsuploads/4520060564008_xqy_1.jpg" alt="" />
              </Row>
            </div>


          </div>

        </Card>,
      </PageHeaderWrapper>
    );
  }
}

export default GoodsDetails;
