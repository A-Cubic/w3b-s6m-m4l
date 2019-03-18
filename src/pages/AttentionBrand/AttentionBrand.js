import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Form, Card, Select, List, Input, Carousel,Table  } from 'antd';
import { message } from 'antd';
import { routerRedux, Link } from 'dva/router';
import TagSelect from '@/components/TagSelect';
import Ellipsis from '@/components/Ellipsis';
import StandardFormRow from '@/components/StandardFormRow';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './AttentionBrand.less';

const { Option } = Select;
const FormItem = Form.Item;

/* eslint react/no-array-index-key: 0 */

@connect(({ list, loading ,attentionModel}) => ({
  list,
  loading: loading.models.list,
  attentionModel
}))
@Form.create({
 
})
class AttentionBrand extends PureComponent {
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
      type: 'attentionModel/getUserCollectionBrands',
      payload: {
        
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

  // handleBands = (val) => {
  //   console.log('val',val)
  //   console.log(7777777)

  //   //this.props.dispatch(routerRedux.push('/search/'));
  // }

  handleUp = (item) => {

    console.log('item',item)
    this.props.dispatch(routerRedux.push('/brand/' + item.brand));
    
  }


  changePage(page){
    const {attentionModel:{attentionBrand,attentionBrand:{brandsList,ifOnload,pagination,brandsList:{goodsList}}}} = this.props;
    // 解析搜索传值
    this.props.dispatch({
      type: 'attentionModel/getUserCollectionBrands',
      payload: {
        current:page,
        pageSize:pagination.pageSize,
      },
    });
  }



  render() {
    const {attentionModel:{attentionBrand,attentionBrand:{brandsList,ifOnload,pagination,brandsList:{goodsList}}}} = this.props;
   // console.log(77777,attentionBrand)

    const {
      list: { list = [] },
      loading,
      form,
    } = this.props;

    const allList = list ?(
      <div>
        <div style={{width: '100%',height: '50px',marginTop:'50px',marginBottom:'2px'}} className={styles.nav_top}>
          <span  style={{float: 'left',fontSize:'24px',fontWeight:'bold'}}> 我关注的品牌</span>
        </div>
        {/* <Row> */}
          <List
            style={{ textAlign: 'center' }}
            rowKey="id"
            loading={loading}
          //  grid={{ gutter: 12, xl: 6, lg: 4, md: 4, sm: 2, xs: 1 }}
            dataSource={brandsList}
            pagination={{
              onChange: (page) => {
                this.changePage(page)
              },
              onShowSizeChange: (current, pageSize) => {
                const {attentionModel:{attentionBrand,attentionBrand:{brandsList,ifOnload,pagination,brandsList:{goodsList}}}} = this.props;
                // 解析搜索传值
                this.props.dispatch({
                  type: 'attentionModel/getUserCollectionBrands',
                  payload: {
                    pageSize,
                  },
                });
               },
              pageSize: pagination.pageSize,
              showSizeChanger: true,
              showQuickJumper: true,
            }}
            renderItem={item => (
              <List.Item>
                <div><div  onClick={() => this.handleUp(item)} style={{cursor:'pointer',textAlign:'right',fontSize:'14px',color:'#888',marginBottom:'10px'}}>查看全部</div>
                    <Row type="flex" align="middle">
                        <Col  lg={4} md={6} sm={12} xs={24} >
                          <img src={item.slt} style={{width:'100%',padding: 20}} />
                          <div style={{textAlign:'center',color:'#888'}}>已关注</div>
                        </Col>
                        {
                        item.goodsList.map((item,index) =>
                          (
                            <Col
                              style={{padding:"0 6px",textAlign: 'center'}}
                              lg={4} md={6} sm={12} xs={24}
                              key={index}
                            >
                            <Link target="_blank" to={`/goodsDetails/${item.barcode}`}>
                              <Card
                                className={styles.card}
                                hoverable
                                cover={<img style={{padding: 20}} alt={item.goodsName} src={item.imgurl} />}
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
                            </Col>
                          ))
                        }
                      </Row>
                </div>
              </List.Item>
                )}
          />
      </div>
        ):null;

    const { getFieldDecorator } = form;
    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      ...pagination,
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
          <div className={styles.cardList}>
            {allList}
           
          </div>
        </div>
      </PageHeaderWrapper>
    );
  }
}

export default AttentionBrand;
