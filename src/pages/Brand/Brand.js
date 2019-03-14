import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Form, Card, Select, List, Input, Carousel, Divider ,Tag} from 'antd';
import { routerRedux, Link } from 'dva/router';
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
  handleFormSubmit = (value) => {
    if(value.includes('/')){
      message.error('不可输入特殊字符');
    } else {
      // this.props.dispatch(routerRedux.push('/search/' + JSON.stringify(value)));
      this.props.dispatch(routerRedux.push(`/search/${value===''?undefined:value}`))
    }
  }

  render() {

    const {brandModel:{brandsGoods} } = this.props;
    const {brandModel:{brandsGoods:{attentionType,advimg,brandName,brandimg,goods,pagination}} } = this.props;
    console.log(777777,attentionType)
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
            <Link target="_blank" to={`/goodsDetails/${item.barcode}`}>
              <Card
                className={styles.card}
                hoverable
                cover={<img style={{padding: 20}}  src={item.imgurl} />}
              >
                <Card.Meta
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
    ) : null;
    const mainSearch = (
      <div style={{ textAlign: 'center' }}>
        <Row type="flex" justify="center">
          <Col lg={10} md={12} sm={16} xs={24}>
            <Input.Search
              placeholder="请输入"
              enterButton="搜索"
              size="large"
              onSearch={this.handleFormSubmit}
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
                    {/* <Tag color="#f5222d">attentionType</Tag> */}
                    {
                      
                      attentionType=='0'?(<Tag color="#f5222d">+关注</Tag>):(<Tag color="#f5222d">已关注</Tag>)
                    }
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
