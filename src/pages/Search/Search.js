import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Form, Card, Select, List, Input, Carousel } from 'antd';

import TagSelect from '@/components/TagSelect';
import Ellipsis from '@/components/Ellipsis';
import StandardFormRow from '@/components/StandardFormRow';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './Search.less';

const { Option } = Select;
const FormItem = Form.Item;

/* eslint react/no-array-index-key: 0 */

@connect(({ list, loading ,searchModel }) => ({
  list,
  loading: loading.models.list,
  searchModel
}))
@Form.create({
  onValuesChange({ dispatch }, changedValues, allValues) {
   
    
  },
})

class Search extends PureComponent {
  componentDidMount() {
    this.init()
  }

  init(){
    const {match,dispatch}=this.props;
    //解析搜索传值
    const a= JSON.parse(match.params.value)
    this.props.dispatch({
      type: 'searchModel/getSelectGoods',
      payload: {
        select:match.params.value==':value'?'':a
      },
    });

  }

  changePage(page){
    const {match,dispatch,searchModel:{search,search:{brands,changeGoods,classificationSED,pagination,select}} } = this.props;
    //解析搜索传值
    const a= JSON.parse(match.params.value)
    this.props.dispatch({
      type: 'searchModel/getSelectGoods',
      payload: {
        select:select,
        current:page,
        pageSize:pagination.pageSize,
        classificationSED:classificationSED.length==2?classificationSED[1].allclassification:'',
        brands:brands.length==2?brands[1]:''
      },
    });
  }

  handleCategory(item,index){
   // console.log(item)
    const {match,dispatch,searchModel:{search,search:{brands,changeGoods,classificationSED,pagination,select}} } = this.props;
    //解析搜索传值
    const a= JSON.parse(match.params.value)
    this.props.dispatch({
      type: 'searchModel/getSelectGoods',
      payload: {
        select:select,
        classificationSED:item.allclassification
      },
    });

  }
  handleBrand(item,index){
    //console.log('itemhandleBrand',item)
    const {match,dispatch,searchModel:{search,search:{brands,changeGoods,classificationSED,pagination,select}} } = this.props;
    this.props.dispatch({
      type: 'searchModel/getSelectGoods',
      payload: {
        brand:item,
        select:select,
        classificationSED:classificationSED.length==2?classificationSED[1].allclassification:'',
        
      },
    });
  }

  handleFormSubmit= (value) => {
    //console.log('ppp',value)
    this.props.dispatch({
      type: 'searchModel/getSelectGoods',
      payload: {
        select:value,
        
      },
    });
  }


  render() {
    const {match,dispatch,searchModel:{search,search:{brands,changeGoods,classificationSED,pagination,select}} } = this.props;
  //  const valuea = JSON.parse(match.params.value)
    //console.log('search',search)
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
        dataSource={changeGoods}
        pagination={{
          onChange: (page) => {
            this.changePage(page)
          },
          onShowSizeChange: (current, pageSize) => {

            const {match,dispatch,searchModel:{search,search:{brands,changeGoods,classificationSED,pagination}} } = this.props;
           
            //解析搜索传值
            const a= JSON.parse(match.params.value)
            this.props.dispatch({
              type: 'searchModel/getSelectGoods',
              payload: {
                pageSize:pageSize,
                select:match.params.value==':value'?'':a,
                classificationSED:classificationSED.length==2?classificationSED[1].allclassification:'',
                brands:brands.length==2?brands[1]:''
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
            {/* <Input.Search
              placeholder="请输入"
              enterButton="搜索"
              size="large"
              value={JSON.parse(match.params.value)}
              onSearch={this.handleFormSubmit}
              // style={{ width: 522 }}
            /> */}

            <FormItem label="">
              {getFieldDecorator('value', {
                initialValue: JSON.parse(match.params.value)==':value'?'':JSON.parse(match.params.value),
                
              })(
                // <Input placeholder="请输入姓名"/>

                <Input.Search
                placeholder="请输入"
                enterButton="搜索"
                size="large"
                //value={valuea}
                onSearch={this.handleFormSubmit}
                // style={{ width: 522 }}
              />

              )}
            </FormItem>



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
            <Form layout="inline">

              <StandardFormRow title="分类" block style={{ paddingBottom: 11 }}>
                <FormItem>
                  {getFieldDecorator('category')(
                    <TagSelect hideCheckAll expandable>
                      {
                        classificationSED.map((item,index) => (
                          //{item.allclassification}
                         
                          <TagSelect.Option
                            value={index}
                            key={index}
                          >
                            <span onClick={() => this.handleCategory(item,index)} >{item.allclassification}</span>
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
                          brands.map((item,index) => (
                            <TagSelect.Option 
                              value={index}
                              key={index}
                            >
                            <span onClick={()=>this.handleBrand(item,index)}>{item}</span>
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

export default Search;
