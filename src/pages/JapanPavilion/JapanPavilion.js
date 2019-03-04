import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Form, Card, Select, List, Input, Carousel } from 'antd';

import TagSelect from '@/components/TagSelect';
import Ellipsis from '@/components/Ellipsis';
import StandardFormRow from '@/components/StandardFormRow';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './JapanPavilion.less';

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
class JapanPavilion extends PureComponent {
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
        grid={{ gutter: 12, xl: 6, lg: 4, md: 4, sm: 2, xs: 1 }}
        dataSource={list}
        // pagination={{
        //   onChange: (page) => {
        //     console.log(page);
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
    ) : null;
    
    const allList_hot = list ?(
      <div>
        <div style={{textAlign:'center',marginBottom:'45px',marginTop:'25px'}}>
            <span style={{fontSize:'22px',color:'#000',fontWeight:'bold'}} >-------日本当下最火单品-------</span>
          </div>
          <div className={styles.bottomLine}>
          日本当下最火单品
          </div>
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
          <div style={{textAlign:'center',marginBottom:'45px'}}>
            <span style={{fontSize:'22px',color:'#000',fontWeight:'bold'}}>-------日本当地百姓最爱用的品牌-------</span>
          </div>


          <div className={styles.cardList}>
            {cardList}
            {allList_hot}
          </div>
        </div>
      </PageHeaderWrapper>
    );
  }
}

export default JapanPavilion;
