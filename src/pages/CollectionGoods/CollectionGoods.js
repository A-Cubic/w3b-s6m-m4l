import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Form, Card, Select, List, Input, Carousel } from 'antd';
import { routerRedux, Link } from 'dva/router';
import TagSelect from '@/components/TagSelect';
import Ellipsis from '@/components/Ellipsis';
import StandardFormRow from '@/components/StandardFormRow';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './CollectionGoods.less';
import { message } from 'antd';
const { Option } = Select;
const FormItem = Form.Item;

/* eslint react/no-array-index-key: 0 */

@connect(({ list, loading ,collectionGoodsModel}) => ({
  list,
  loading: loading.models.list,
  collectionGoodsModel
}))
@Form.create({
 
})
class CollectionGoods extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'list/fetch',
      payload: {
        count: 18,
      },
    });
    this.init()
  }


  init(){
    this.props.dispatch({
      type: 'collectionGoodsModel/getUserCollectionGoods',
      payload: {
        country:'韩国'
      },
    });
  } 

  handleFormSubmit = (value) => {
    if(value.includes('/')){
      message.error('不可输入特殊字符');
    } else {
      this.props.dispatch(routerRedux.push(`/search/${value===''?undefined:value}`))
    }
  }
  changePage(page){
    const {collectionGoodsModel:{collectionGoods,collectionGoods:{goodsList,pagination}} } = this.props;
   
    this.props.dispatch({
      type: 'collectionGoodsModel/getUserCollectionGoods',
      payload: {
        current:page,
        pageSize:pagination.pageSize
      },
    });
  }

  changePageSize(current, pageSize){
   
    const {collectionGoodsModel:{collectionGoods,collectionGoods:{goodsList,pagination}} } = this.props;
    this.props.dispatch({
      type: 'collectionGoodsModel/getUserCollectionGoods',
      payload: {
        pageSize:pageSize
      },
    });
  }

  render() {
    const {collectionGoodsModel:{collectionGoods,collectionGoods:{goodsList,pagination}} } = this.props;
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
        dataSource={goodsList}
        pagination={{
          onChange: (page) => {
            this.changePage(page)
          },
          onShowSizeChange: (current, pageSize) => {
            // console.log('page',current, pageSize)
             this.changePageSize(current, pageSize)
 
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
                cover={<img style={{padding: 20}} alt={item.title} src={item.imgurl} />}
              >
                <Card.Meta
                  title={<p>{item.goodsName}</p>}
                  description={<Ellipsis className={styles.ellipsis} lines={2}>{item.price}</Ellipsis>}
                />
              </Card>
            </Link>
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
          <div style={{width: '100%',height: '50px',marginTop:'50px',marginBottom:'2px'}} className={styles.nav_top}>
            <span style={{float: 'left',fontSize:'24px',fontWeight:'bold'}}> 我收藏的商品</span> 
          </div>
          <div className={styles.cardList}>
            {cardList}
          </div>
        </div>
      </PageHeaderWrapper>
    );
  }
}

export default CollectionGoods;
