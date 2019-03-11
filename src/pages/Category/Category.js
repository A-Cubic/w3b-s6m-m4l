import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Form, Card, Select, List, Input, Carousel } from 'antd';

import { routerRedux, Link } from 'dva/router';
import TagSelect from '@/components/TagSelect';
import Ellipsis from '@/components/Ellipsis';
import StandardFormRow from '@/components/StandardFormRow';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './Category.less';

const { Option } = Select;
const FormItem = Form.Item;

/* eslint react/no-array-index-key: 0 */

@connect(({ list, loading ,categoryModel}) => ({
  list,
  loading: loading.models.list,
  categoryModel

}))
@Form.create({
  onValuesChange({ dispatch }, changedValues, allValues) {
    // 表单项变化时请求数据
    // eslint-disable-next-line
    //console.log(changedValues, allValues);
    // 模拟查询表单生效
    // dispatch({
    //   type: 'list/fetch',
    //   payload: {
    //     count: 18,
    //   },
    // });
  },
})
class Category extends PureComponent {
  componentDidMount() {
    const { match,dispatch } = this.props;
    // console.log('match',match.params)
    // dispatch({
    //   type: 'list/fetch',
    //   payload: {
    //     count: 18,
    //   },
    // });

    this.init()
  }

  init(){
    const {match,dispatch}=this.props;

    console.log('match',match.params)

    this.props.dispatch({
      type: 'categoryModel/getCategoryGoods',
      payload: {
        classificationST:match.params.con,
        country:match.params.category
      },
    });

  }

  inchange(page){
    const {match,dispatch}=this.props;
    const {categoryModel:{Category:{brands,categoryImg,changeGoods,classificationSED,pagination}} } = this.props;
    this.props.dispatch({
      type: 'categoryModel/getCategoryGoods',
      payload: {
        classificationST:match.con,
        country:match.params.category,
        current:page,
        pageSize:pagination.pageSize
      },
    });

  }

  
  handleCategory = (item,index) => {
    const {match,dispatch}=this.props;
    // console.log('item',item)
    // console.log('match.params',match.params.con)
    this.props.dispatch({
      type: 'categoryModel/getCategoryGoods',
      payload: {
        country:match.params.category,
        classificationST:match.params.con,

        classificationSED:item.classificationST
        
        
      },
    });
  }


  handleCategoryBrands = (item,index) =>{
    console.log(77777,item)
    const {match,dispatch}=this.props;
    const {categoryModel:{Category:{classificationSED}} } = this.props;
    console.log('hao',classificationSED[0].classificationST)
    console.log('==',classificationSED.length)
    this.props.dispatch({
      type: 'categoryModel/getCategoryGoods',
      payload: {
        country:match.params.category,
        classificationST:match.params.con,
        //classificationSED:item.classificationST,
        classificationSED:classificationSED.length==2?classificationSED[1].classificationST:'',
        brand:item,    
        
      },
    });
  }

  handleFormSubmit = (value) => {
    console.log('value',value)

    this.props.dispatch(routerRedux.push('/search/' + JSON.stringify(value)));
   // this.props.dispatch(routerRedux.push('/bulkPurchases/initiateInquiryCan/' + JSON.stringify(getdata)  ));
  }


  render() {

    const {categoryModel:{Category} } = this.props;
    const {categoryModel:{Category:{brands,categoryImg,changeGoods,classificationSED,pagination}} } = this.props;
    console.log('Category',Category)

    const {
      list: { list = [] },
      loading,
      form,
    } = this.props;
    const { getFieldDecorator } = form;


    const bannerPlay = list ?(
      <Carousel
        className={styles.carousel}
        autoplay
      >
        {
            categoryImg.map((item,index) =>
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



    const cardList = list ? (
      <List
        style={{ textAlign: 'center' }}
        rowKey="id"
        loading={loading}
        grid={{ gutter: 12, xl: 6, lg: 4, md: 3, sm: 2, xs: 1 }}
        dataSource={changeGoods}
        pagination={{
          onChange: (page) => {
            console.log(page);
            this.inchange(page)
          },
          onShowSizeChange: (current, pageSize) => {
            console.log('page',current, pageSize)
            const {match,dispatch}=this.props;
            const {categoryModel:{Category:{brands,categoryImg,changeGoods,classificationSED,pagination}} } = this.props;
            this.props.dispatch({
              type: 'categoryModel/getCategoryGoods',
              payload: {
                classificationST:match.con,
                country:match.params.category,
                pageSize:pageSize
              },
            });
 
           },
          pageSize: 20,
          showSizeChanger: true,
          showQuickJumper: true,
        }}
        renderItem={item => (
          <List.Item>
            <Card
              className={styles.card}
              hoverable
              cover={<img style={{padding: 20}} alt={item.title} src={item.imgurl} />}
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
    // const mainSearch = (
    //   <div style={{ textAlign: 'center' }}>
    //     <Row type="flex" justify="center">
    //       <Col lg={10} md={12} sm={16} xs={24}>
    //         <Input.Search
    //           placeholder="请输入"
    //           enterButton=""
    //           size="large"
    //           onSearch={this.handleFormSubmit}
    //           // style={{ width: 522 }}
    //         />
    //       </Col>
    //     </Row>
    //   </div>

    // );

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
        {/* <Carousel
          className={styles.carousel}
          autoplay
        >
          <div>
            <img style={{ width:'100%' }} src="http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/bannerJapan.jpg" alt="" />
          </div>
          <div>
            <img style={{ width:'100%' }} src="http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/bannerJapan.jpg" alt="" />
          </div>
        </Carousel> */}
        {bannerPlay}

        <div className={styles.coverCardList}>
          <Card bordered={false}>
            <Form layout="inline">

              <StandardFormRow title="分类" block style={{ paddingBottom: 11 }}>
                <FormItem>
                  {getFieldDecorator('category')(
                    <TagSelect hideCheckAll expandable style={{background:'none'}}>
                      {/* <TagSelect.Option value="cat1">1生活用品</TagSelect.Option>
                      <TagSelect.Option value="cat2">洗护用品</TagSelect.Option>
                      <TagSelect.Option value="cat3">母婴</TagSelect.Option>
                      <TagSelect.Option value="cat4">护肤品</TagSelect.Option>
                      <TagSelect.Option value="cat5">类目五</TagSelect.Option>
                      <TagSelect.Option value="cat6">类目六</TagSelect.Option>
                      <TagSelect.Option value="cat7">类目七</TagSelect.Option>
                      <TagSelect.Option value="cat8">类目八</TagSelect.Option>
                      <TagSelect.Option value="cat9">类目九</TagSelect.Option>
                      <TagSelect.Option value="cat10">类目十</TagSelect.Option>
                      <TagSelect.Option value="cat11">类目十一</TagSelect.Option>
                      <TagSelect.Option value="cat12">类目十二</TagSelect.Option> */}

                      {
                        classificationSED.map((item,index) =>
                        (
                          <TagSelect.Option
                            key={index}
                            value={item.classificationST}
                          >
                            <span style={{display:'inline-block'}} onClick={() => this.handleCategory(item,index)}>
                              {item.allclassification}
                            </span>
                          </TagSelect.Option>
                        ))
                      }


                    </TagSelect>
                  )}
                </FormItem>
              </StandardFormRow>
              <StandardFormRow title="品牌" block style={{ paddingBottom: 11 }}>
                <FormItem>
                  {getFieldDecorator('Brand')(
                    <TagSelect hideCheckAll expandable>
                      {/* <TagSelect.Option value="cat1">2生活用品</TagSelect.Option>
                      <TagSelect.Option value="cat2">洗护用品</TagSelect.Option>
                      <TagSelect.Option value="cat3">母婴</TagSelect.Option>
                      <TagSelect.Option value="cat4">护肤品</TagSelect.Option>
                      <TagSelect.Option value="cat5">类目五</TagSelect.Option>
                      <TagSelect.Option value="cat6">类目六</TagSelect.Option>
                      <TagSelect.Option value="cat7">类目七</TagSelect.Option>
                      <TagSelect.Option value="cat8">类目八</TagSelect.Option>
                      <TagSelect.Option value="cat9">类目九</TagSelect.Option>
                      <TagSelect.Option value="cat10">类目十</TagSelect.Option>
                      <TagSelect.Option value="cat11">类目十一</TagSelect.Option>
                      <TagSelect.Option value="cat12">类目十二</TagSelect.Option> */}

                      {
                        brands.map((item,index) =>
                        (
                          <TagSelect.Option
                            key={index}
                            value={index}
                          >
                            <span onClick={() => this.handleCategoryBrands(item,index)}>{item}</span>
                          </TagSelect.Option>
                        ))
                      }




                    </TagSelect>
                  )}
                </FormItem>
              </StandardFormRow>

            </Form>
          </Card>
          <div className={styles.cardList}>
            {cardList}
          </div>
        </div>
      </PageHeaderWrapper>
    );
  }
}

export default Category;
