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
  onValuesChange({ dispatch }, changedValues, allValues) {},
})
class Category extends PureComponent {
  state={
    curClassificationST:'',
    country:'',
    classificationSED:'',
    brand:''
  }
  componentDidMount() {
    this.init()
  }

  init(){
    const payloadParams = this.props.match.params;
    const bolPayloadParams = JSON.stringify(this.props.match.params)==="{}"
    if(bolPayloadParams){
      console.warn('这是全部分类')
      this.getAllClassification()
    }else{
      console.warn('这是首页')
      this.setState({
        curClassificationST:payloadParams.category,
        country:payloadParams.country
      })
      this.getData()
    }
  }

  // 获取页面轮播、分类、品牌、列表数据
  getData=(payloadClassificationSED,payloadBrand,page)=>{

    const payloadParams = this.props.match.params;
    const bolPayloadParams = JSON.stringify(this.props.match.params)==="{}"

    this.props.dispatch({
      type: 'categoryModel/getCategoryGoods',
      payload: {
        classificationST:bolPayloadParams?this.state.curClassificationST:payloadParams.category,
        country:bolPayloadParams?this.state.country:payloadParams.country,
        classificationSED:payloadClassificationSED,
        brand:payloadBrand,
        ...page
      },
    });
  }

  // 获取所有分类
  getAllClassification(){
    this.props.dispatch({
      type: 'categoryModel/getAllClassification',
      payload: {},
      callback:this.findClassification
    });
  }

  // 匹配并获取当前一级分类数据
  findClassification=()=>{
    const allclassification = this.props.match.path.split('=')[1]
    const {categoryModel:{allClassificationArr} } = this.props;
    allClassificationArr.filter((item)=>{
      if(item.classificationST === allclassification){
        this.setState({
          curClassificationST:item.classificationST
        })
        this.getData()
      }
    })
  }

  onChangeTable(page){
    const {categoryModel:{Category:{brands,classificationSED,pagination}} } = this.props;
    this.getData(classificationSED.length==2?classificationSED[1].classificationST:'',brands.length==2?brands[1]:'',page)
  }

  // 切换分类
  handleCategory = (a) => {
    this.getData(a)
  }

  // 切换品牌
  handleCategoryBrands = (b) =>{
    const {categoryModel:{Category,Category:{brands,categoryImg,changeGoods,classificationSED,pagination}} } = this.props;
    this.getData(classificationSED.length==2?classificationSED[1].classificationST:'',b)
  }

  handleFormSubmit = (value) => {
    this.props.dispatch(routerRedux.push(`/search/${JSON.stringify(value)}`));
  }

  render() {
    const {categoryModel:{Category,Category:{brands,categoryImg,changeGoods,classificationSED,pagination}} } = this.props;
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
            this.onChangeTable(page)
          },
          onShowSizeChange: (current, pageSize) => {
            const that = this;
            const {categoryModel:{Category:{brands,classificationSED,pagination}} } = this.props;
            that.getData(classificationSED.length==2?classificationSED[1].classificationST:'',brands.length==2?brands[1]:'',{pageSize})
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
          <Card bordered={false}>
            <Form layout="inline">

              <StandardFormRow title="分类" block style={{ paddingBottom: 11 }}>
                <FormItem>
                  {getFieldDecorator('category')(
                    <TagSelect hideCheckAll expandable style={{background:'none'}}>
                      {
                        classificationSED.map((item,index) =>
                        (
                          <TagSelect.Option
                            key={index}
                            value={item.classificationST}
                          >
                            <span
                              style={{display:'inline-block'}}
                              onClick={() => this.handleCategory(item.classificationST)}
                            >
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

                      {
                        brands.map((item,index) =>
                        (
                          <TagSelect.Option
                            key={index}
                            value={index}
                          >
                            <span
                              onClick={() => this.handleCategoryBrands(item)}
                            >
                              {item}
                            </span>
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
