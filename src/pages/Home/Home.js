import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Form, Card, Select, List, Input, Carousel,Icon,Button,Tag    } from 'antd';

import TagSelect from '@/components/TagSelect';
import Ellipsis from '@/components/Ellipsis';
import StandardFormRow from '@/components/StandardFormRow';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './Home.less';

const { Option } = Select;
const FormItem = Form.Item;

/* eslint react/no-array-index-key: 0 */

@connect(({ list,homeModel, loading }) => ({
  list,
  homeModel,
  loading: loading.models.list,
}))
@Form.create({
  // onValuesChange({ dispatch }, changedValues, allValues) {
  //   // 表单项变化时请求数据
  //   // eslint-disable-next-line
  //   console.log(changedValues, allValues);
  //   // 模拟查询表单生效
  //   dispatch({
  //     type: 'list/fetch',
  //     payload: {
  //       count: 18,
  //     },
  //   });
  // },
})
class Home extends PureComponent {
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
    const { dispatch } = this.props;
    dispatch({
      type: 'homeModel/getAllClassification',
      payload: {},
    });
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
    const allList = list ?(
      <div>
        <div style={{width: '100%',height: '50px',}} className={styles.nav_top} ><span  className={styles.nav_top_span} style={{float: 'left',fontSize:'24px',fontWeight:'bold'}}> 日本馆</span ><em style={{marginTop:'12px',float:'right',fontStyle:'normal'}} className={styles.nav_top_em}>换一批 <Icon style={{marginLeft:'10px'}} type="sync" spin /></em></div>
        <Row >
          <Col md={24} sm={24} xs={24} >
            <div style={{textAlign:'right', marginBottom:'10px'}}>
              <Tag color="red">分类一</Tag>
              <Tag color="red">分类二</Tag>
              <Tag color="red">分类三</Tag>
              <Tag color="red">分类四</Tag>
            </div>
          </Col>

        </Row>
        <Row>
           {/*  把分类 提上面
           <Col md={12} sm={24} xs={24} className={styles.con}>
            <Card
              bordered={false}
            >
              <div style={{paddingBottom:'60px',display: 'flex','flex-wrap': 'wrap'}}>
                <Button className={styles.con_but}>分类一</Button>
                <Button className={styles.con_but}>分类2</Button>
                <Button className={styles.con_but}>分类3</Button>
                <Button className={styles.con_but}>分类4</Button>
                <Button className={styles.con_but}>分类5</Button>
              </div>
            </Card>
          </Col>*/}
          <List
            style={{ textAlign: 'center' }}
            rowKey="id"
            loading={loading}
            grid={{ gutter: 12, xl: 6, lg: 4, md: 4, sm: 2, xs: 1 }}
            dataSource={list}
        // pagination={{
        //   onChange: (page) => {
        //     console.log('page',page);
        //   },
        //   pageSize: 10,
        // }}
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
        </Row>
        <Row style={{display:'flex',}} className={styles.demo_flex}>
          <Col  lg={2} md={4} sm={6} xs={8} style={{padding:'0'}}>
            <div style={{textAlign:'center',}}>热销商品</div>
                       </Col>
          {
                      this.state.imgArr.map((item,index) =>
                      (
                        <Col

                          lg={2} md={4} sm={6} xs={8} style={{padding:'0'}} key={index}
                        >

                          <img style={{ width:'100%',padding:0 }}  src={item} alt="" />
                          </Col>
                        ))
                    }

        </Row>
      </div>
    ):null;



const allList_hot = list ?(
      <div>
        <div style={{width: '100%',height: '50px',marginTop:'50px',marginBottom:'2px'}} className={styles.nav_top} ><span  className={styles.nav_top_span} style={{float: 'left',fontSize:'24px',fontWeight:'bold'}}> 热销商品</span ><em style={{marginTop:'12px',float:'right',fontStyle:'normal'}} className={styles.nav_top_em}>换一批 <Icon style={{marginLeft:'10px'}} type="sync" spin /></em></div>
        <Row>

          <List
            style={{ textAlign: 'center' }}
            rowKey="id"
            loading={loading}
            grid={{ gutter: 12, xl: 6, lg: 4, md: 4, sm: 2, xs: 1 }}
            dataSource={list}

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
        </Row>

      </div>
    ):null;





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
        <Carousel
          className={styles.carousel}
          autoplay
        >
          <div>
            <img style={{ width:'100%' }} src="http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/bannerJapan.jpg" alt="" />
          </div>
          <div>
            <img style={{ width:'100%' }} src="http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/bannerJapan.jpg" alt="" />
          </div>
        </Carousel>

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
