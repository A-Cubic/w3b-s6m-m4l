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

@connect(({ list, loading,brandModel }) => ({
  list,
  loading: loading.models.list,
  brandModel
}))
@Form.create({
  onValuesChange({ dispatch }, changedValues, allValues) {
    // 表单项变化时请求数据
    // eslint-disable-next-line
    console.log(changedValues, allValues);
    // 模拟查询表单生效
  },
})
class Brand extends PureComponent {
  state={

  }
  componentDidMount() {
    const { match,dispatch } = this.props;
    this.init()

  }
  init(){
    const {match,dispatch}=this.props;
    this.props.dispatch({
      type: 'brandModel/getBrandsGoods',
      payload: {
        brandsName:match.params.brandsName,
      },
    });
  }

  inchange(page){
    const {match,dispatch}=this.props;
    const {brandModel:{brandsGoods:{advimg,brandName,brandimg,goods,pagination}} } = this.props;
   
    this.props.dispatch({
      type: 'brandModel/getBrandsGoods',
      payload: {
        brandsName:match.params.brandsName,
        current:page,
        pageSize:pagination.pageSize
      },
    });
  }

  render() {

    const {brandModel:{brandsGoods} } = this.props;
    const {brandModel:{brandsGoods:{advimg,brandName,brandimg,goods,pagination}} } = this.props;
    //console.log(777777777777,brandsGoods)
    
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
        dataSource={goods}
        pagination={{
          onChange: (page) => {
           // console.log(page);
            // const {match,dispatch}=this.props;
            // const {brandModel:{brandsGoods:{advimg,brandName,brandimg,goods,pagination}} } = this.props;
            // this.props.dispatch({
            //   type: 'brandModel/getBrandsGoods',
            //   payload: {
            //     brandsName:match.params.brandsName,
            //     current:page,
            //     pageSize:pagination.pageSize
            //   },
            // });
          //  console.log('page',page)
            this.inchange(page)
          },
          onShowSizeChange: (current, pageSize) => {
           // console.log('page',current, pageSize)
            const {match,dispatch}=this.props;
            const {brandModel:{brandsGoods:{advimg,brandName,brandimg,goods,pagination}} } = this.props;
            this.props.dispatch({
              type: 'brandModel/getBrandsGoods',
              payload: {
                brandsName:match.params.brandsName,
               
                pageSize:pageSize
              },
            });

          },
          pageSize: pagination.pageSize,
          showSizeChanger: true,
          showQuickJumper: true,
        }}
        renderItem={item => (
          <List.Item>
            <Card
              className={styles.card}
              hoverable
              cover={<img style={{padding: 20}}  src={item.imgurl} />}
            >
              <Card.Meta
                title={<a>{item.goodsName}</a>}
                description={<Ellipsis className={styles.ellipsis} lines={2}>{item.price}</Ellipsis>}
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
                    // this.state.imgArr.map((item) =>
                    advimg.map((item) =>
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
                    <img style={{ width:'100px',padding:5 }} src={brandimg} alt="" />
                  </div>
                  <div>
                    <h2>{brandName}</h2>
                    <h3>在售商品 <span style={{color:'red'}}>{pagination.total}</span>个 </h3>
                  </div>
                </div>
                <Divider dashed />
                <h4>
                  {brandsGoods.description}
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
