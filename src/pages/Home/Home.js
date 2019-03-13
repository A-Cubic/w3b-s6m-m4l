import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Form, Card, Select, List, Input, Carousel,Icon,Button,Tag    } from 'antd';

import { message } from 'antd';
import { routerRedux, Link } from 'dva/router';
import TagSelect from '@/components/TagSelect';
import Ellipsis from '@/components/Ellipsis';
import StandardFormRow from '@/components/StandardFormRow';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './Home.less';

const { Option } = Select;
const FormItem = Form.Item;

@connect(({ list,homeModel, loading }) => ({
  list,
  homeModel,
  loading: loading.models.list,
}))
@Form.create({

})
class Home extends PureComponent {
  state={
  }

  componentDidMount() {
    this.getDataAll()
    this.hot();
  }

  hot(){
    const {homeModel:{getDownPart:{goodsList,page}} } = this.props;
    this.props.dispatch({
      type: 'homeModel/getDownPart',
      payload: {
        page,
        pageSize:"30"
      },
    });
  }

  getDataAll(){
    this.props.dispatch({
      type: 'homeModel/getAllClassification',
      payload: {},
    });
  }

  handleDown = () => {
    this.hot();
  }

  handleUp = (item,index) => {
    this.props.dispatch({
      type: 'homeModel/getUpCountry',
      payload: {
        page:item.page,
        country:item.country,
        index
      },
    });
  }

  handleBrand = (item) => {
   this.props.dispatch(routerRedux.push(`/brand/${  item.brandsName}`));
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
    const {homeModel:{getUpPart:{banner,homePageChangeGoodsItem},getDownPart:{goodsList,page}}} = this.props;
    const bannerPlay = banner ?(
      <Carousel
        className={styles.carousel}
        autoplay
      >
        {
            banner.map((item,index) =>
            (
              <div
                key={index}
              >
                <img style={{ width:'100%',padding:0 }} src={item} alt="" />
              </div>
            ))
          }

      </Carousel>
    ):null;

    const {
      list: { list = [] },
      loading,
      form,
    } = this.props;
    const allList = homePageChangeGoodsItem ?(
      homePageChangeGoodsItem.map((item,index) =>
      (
        <div
          key={index}
          style={{marginBottom:'30px'}}
        >
          <div style={{width: '100%',height: '50px'}} className={styles.nav_top}>
            <span className={styles.nav_top_span} style={{float: 'left',fontSize:'24px',fontWeight:'bold'}}>
              {homePageChangeGoodsItem[index].country}
            </span>
            <em onClick={() => this.handleUp(item,index)} style={{cursor:'pointer',marginTop:'12px',float:'right',fontStyle:'normal'}} className={styles.nav_top_em}>
              换一批 <Icon style={{marginLeft:'10px'}} type="sync" spin />
            </em>
          </div>
          <Row>
            <Col md={24} sm={24} xs={24}>
              {
                 homePageChangeGoodsItem[index].classification.map((item,index) =>
                 (
                   <Link key={index} to={`/category/from/${item.classificationST}/${item.country}`}>
                     <span
                       style={{textAlign:'right', marginBottom:'10px',float:'right'}}
                     >
                       <Tag color="#f5222d">{item.allclassification}</Tag>
                     </span>
                   </Link>
                 ))
              }
              {/* </div> */}
            </Col>
          </Row>
          <Row>
            <List
              style={{ textAlign: 'center' }}
              rowKey="id"
              loading={loading}
              grid={{ gutter: 12, xl: 6, lg: 4, md: 4, sm: 2, xs: 1 }}
              dataSource={homePageChangeGoodsItem[index].goodsList}
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
          </Row>
          <Row type="flex" align="middle" className={styles.demo_flex}>
            <Col lg={2} md={4} sm={6} xs={8} style={{padding:'0'}}>
              <div style={{textAlign:'center'}}>热卖品牌</div>
            </Col>
            {
            homePageChangeGoodsItem[index].brandimgs.map((item,index) =>
            (
              <Col
                lg={2}
                md={4}
                sm={6}
                xs={8}
                style={{padding:'0'}}
                key={index}
              >
                <img onClick={() => this.handleBrand(item,index)} style={{ width:'100%',padding:0,cursor:'pointer' }} src={item.imgurl} alt="" />
              </Col>
            ))
          }
          </Row>
        </div>
      ))
    ):null;

// 首页下半部 热销商品
const allList_hot = list ?(
  <div>
    <div style={{width: '100%',height: '50px',marginTop:'50px',marginBottom:'2px'}} className={styles.nav_top}>
      <span className={styles.nav_top_span} style={{float: 'left',fontSize:'24px',fontWeight:'bold'}}> 热销商品</span>
      <em onClick={this.handleDown} style={{cursor:'pointer',marginTop:'12px',float:'right',fontStyle:'normal'}} className={styles.nav_top_em}>
            换一批 <Icon style={{marginLeft:'10px'}} type="sync" spin />
      </em>
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
                  title={<p>{item.goodsName}</p>}
                  description={<Ellipsis className={styles.ellipsis} lines={2}>{item.price}</Ellipsis>}
                />
              </Card>
            </Link>
          </List.Item>
            )}
      />
    </Row>

  </div>
    ):null;

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
        {bannerPlay}
        <div className={styles.coverCardList}>
          <div className={styles.cardList}>
            {/* {cardList} */}
            {allList}
            {allList_hot}
          </div>
        </div>
      </PageHeaderWrapper>
    );
  }
}
export default Home;
