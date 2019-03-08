import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Form, Card, Select, List, Input, Carousel, Divider } from 'antd';

import TagSelect from '@/components/TagSelect';
import Ellipsis from '@/components/Ellipsis';
import StandardFormRow from '@/components/StandardFormRow';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './Brand.less';

const { Option } = Select;
const FormItem = Form.Item;

/* eslint react/no-array-index-key: 0 */

@connect(({ list, loading }) => ({
  list,
  loading: loading.models.list,
}))
@Form.create({
  onValuesChange({ dispatch }, changedValues, allValues) {
    // 表单项变化时请求数据
    // eslint-disable-next-line
    console.log(changedValues, allValues);
    // 模拟查询表单生效
    dispatch({
      type: 'list/fetch',
      payload: {
        count: 18,
      },
    });
  },
})
class Brand extends PureComponent {
  state={
    imgArr:[
      'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/bannerJapan.jpg',
      'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/bannerKorea.jpg',
      'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/bannerEuropeanAmerican.jpg',
    ]
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'list/fetch',
      payload: {
        count: 18,
      },
    });
  }

  render() {
    const {
      list: { list = [] },
      loading,
      form,
    } = this.props;
    const { getFieldDecorator } = form;

    const cardList = list ? (
      <List
        style={{ textAlign: 'center' }}
        rowKey="id"
        loading={loading}
        grid={{ gutter: 12, xl: 6, lg: 4, md: 3, sm: 2, xs: 1 }}
        dataSource={list}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 10,
          showSizeChanger: true,
          showQuickJumper: true,
        }}
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
      />
    ) : null;

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


        <div className={styles.coverCardList}>
          <Card bordered={false}>
            <Row gutter={16} type="flex" align="top">
              <Col lg={12} md={12} sm={24} xs={24}>
                <Carousel autoplay slidesToShow={1} className={styles.carousel} beforeChange={this.beforeChange}>
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
              <Col lg={11} md={11} sm={23} xs={23} offset={1}>
                <div style={{display:'flex'}}>
                  <div>
                    <img style={{ width:'100px',padding:5 }} src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1551690059&di=a90d5d76bebd15b34299f90412ccd656&src=http://ku.90sjimg.com/element_origin_min_pic/16/11/24/0db9b6fc3024acb7b6db8c94b3db4ae1.jpg" alt="" />
                  </div>
                  <div>
                    <h2>pigeon 贝亲</h2>
                    <h3>在售商品 <span style={{color:'red'}}>7868</span>个 </h3>
                  </div>
                </div>
                <Divider dashed />
                <h4>1957年8月，贝亲株式会社在日本成立，目前已成为日本知名婴儿用品公司，经历50多年的成长与发展成
                  为国际知名母婴用品品牌。贝亲的英文名称“pigeon”是鸽子的意思，象征和平。贝亲标志中的“p”为母子
                  的“心连心”形象，象征深厚而无尽的母爱。贝亲真诚将母子的爱融入到产品中，铸就了贝亲产品。
                </h4>
              </Col>
            </Row>
          </Card>
          <div className={styles.cardList}>
            {cardList}
          </div>
        </div>
      </PageHeaderWrapper>
    );
  }
}

export default Brand;
