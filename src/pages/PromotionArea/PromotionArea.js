import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Form, Card, Select, List, Input, Carousel } from 'antd';

import TagSelect from '@/components/TagSelect';
import Ellipsis from '@/components/Ellipsis';
import StandardFormRow from '@/components/StandardFormRow';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './PromotionArea.less';

const { Option } = Select;
const FormItem = Form.Item;

/* eslint react/no-array-index-key: 0 */

@connect(({ list, loading,promotionAreaModel }) => ({
  promotionAreaModel,
  list,
  loading: loading.models.list,
}))
@Form.create()
class PromotionArea extends PureComponent {
  componentDidMount() {
  }

  render() {
    return (
      <PageHeaderWrapper
        title=""
      >
        <div style={{textAlign: 'center',marginTop:280,fontSize:28}}>正在装修，敬请关注</div>
        {/* <Carousel */}
        {/* className={styles.carousel} */}
        {/* autoplay */}
        {/* > */}
        {/* <div> */}
        {/* <img style={{ width:'100%' }} src="http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/bannerJapan.jpg" alt="" /> */}
        {/* </div> */}
        {/* <div> */}
        {/* <img style={{ width:'100%' }} src="http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/bannerJapan.jpg" alt="" /> */}
        {/* </div> */}
        {/* </Carousel> */}

        {/* <div className={styles.coverCardList}> */}
        {/* <Card bordered={false}> */}
        {/* <Form layout="inline"> */}
        {/* <div style={{marginBottom:20}}>{mainSearch}</div> */}
        {/* <StandardFormRow title="所属类目" block style={{ paddingBottom: 11 }}> */}
        {/* <FormItem> */}
        {/* {getFieldDecorator('category')( */}
        {/* <TagSelect expandable> */}
        {/* <TagSelect.Option value="cat1">生活用品</TagSelect.Option> */}
        {/* <TagSelect.Option value="cat2">洗护用品</TagSelect.Option> */}
        {/* <TagSelect.Option value="cat3">母婴</TagSelect.Option> */}
        {/* <TagSelect.Option value="cat4">护肤品</TagSelect.Option> */}
        {/* <TagSelect.Option value="cat5">类目五</TagSelect.Option> */}
        {/* <TagSelect.Option value="cat6">类目六</TagSelect.Option> */}
        {/* <TagSelect.Option value="cat7">类目七</TagSelect.Option> */}
        {/* <TagSelect.Option value="cat8">类目八</TagSelect.Option> */}
        {/* <TagSelect.Option value="cat9">类目九</TagSelect.Option> */}
        {/* <TagSelect.Option value="cat10">类目十</TagSelect.Option> */}
        {/* <TagSelect.Option value="cat11">类目十一</TagSelect.Option> */}
        {/* <TagSelect.Option value="cat12">类目十二</TagSelect.Option> */}
        {/* </TagSelect> */}
        {/* )} */}
        {/* </FormItem> */}
        {/* </StandardFormRow> */}
        {/* <StandardFormRow title="其它选项" grid last> */}
        {/* <Row gutter={16}> */}
        {/* <Col lg={8} md={10} sm={10} xs={24}> */}
        {/* <FormItem {...formItemLayout} label="热卖"> */}
        {/* {getFieldDecorator('author', {})( */}
        {/* <Select placeholder="不限" style={{ maxWidth: 200, width: '100%' }}> */}
        {/* <Option value="lisa">后</Option> */}
        {/* </Select> */}
        {/* )} */}
        {/* </FormItem> */}
        {/* </Col> */}
        {/* <Col lg={8} md={10} sm={10} xs={24}> */}
        {/* <FormItem {...formItemLayout} label="好评度"> */}
        {/* {getFieldDecorator('rate', {})( */}
        {/* <Select placeholder="不限" style={{ maxWidth: 200, width: '100%' }}> */}
        {/* <Option value="good">优秀</Option> */}
        {/* <Option value="normal">普通</Option> */}
        {/* </Select> */}
        {/* )} */}
        {/* </FormItem> */}
        {/* </Col> */}
        {/* </Row> */}
        {/* </StandardFormRow> */}
        {/* </Form> */}
        {/* </Card> */}
        {/* <div className={styles.cardList}> */}
        {/* {cardList} */}
        {/* </div> */}
        {/* </div> */}
      </PageHeaderWrapper>
    );
  }
}

export default PromotionArea;
