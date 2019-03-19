import React, { Fragment } from 'react';
import { Layout, Icon, BackTop } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';
// import styles from './Footer.less'

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    {/* <div className={styles.commonFooter}> */}
    {/* <div className={styles.wrap}> */}
    {/* <ul> */}
    {/* <li className={styles.em}>导航</li> */}
    {/* <li>首页</li> */}
    {/* <li>日本馆</li> */}
    {/* <li>韩国馆</li> */}
    {/* <li>欧美馆</li> */}
    {/* </ul> */}
    {/* <ul> */}
    {/* <li className={styles.em}>服务</li> */}
    {/* <li>FAQ</li> */}
    {/* <li>微信客服</li> */}
    {/* <li>电话客服</li> */}
    {/* <li>意见反馈</li> */}
    {/* </ul> */}
    {/* <ul> */}
    {/* <li className={styles.em}>关于岂止</li> */}
    {/* <li>加入我们</li> */}
    {/* <li>成为经销商</li> */}
    {/* <li>业务模式</li> */}
    {/* </ul> */}
    {/* <ul> */}
    {/* <li className={styles.em}>关注我们</li> */}

    {/* </ul> */}
    {/* </div> */}
    {/* <div className={styles.wrapBottom}> */}
    {/* <ul> */}
    {/* <li className="logo"><img src="http://ecc-product.oss-cn-beijing.aliyuncs.com/logo/bottomlogo.png" alt="" /></li> */}
    {/* </ul> */}
    {/* <ul> */}
    {/* <li>辽宁省大连市中山区五五路一号</li> */}
    {/* <li>港湾中心2213A</li> */}
    {/* </ul> */}
    {/* <ul> */}
    {/* <li>(800) 222 - 1111</li> */}
    {/* <li>hr@llwell.com</li> */}
    {/* </ul> */}
    {/* <ul> */}
    {/* <BackTop /> */}
    {/* </ul> */}
    {/* </div> */}
    {/* </div> */}
    <BackTop />
    <GlobalFooter
     //  links={[
     //   {
     //   key: '日本馆',
     //   title: '日本馆',
     //   href: 'https://pro.ant.design',
     //   blankTarget: true,
     //   },
     //   {
     //   key: '韩国馆',
     //   title: '韩国馆',
     //   href: 'https://github.com/ant-design/ant-design-pro',
     //   blankTarget: true,
     //   },
     //   {
     //   key: '欧美馆',
     //   title: '欧美馆',
     //   href: 'https://ant.design',
     //   blankTarget: true,
     //   },
     // ]}
      copyright={
        <div>
          <div>
            <Fragment>
              联系方式：（86）0411-8813 5549
            </Fragment>
          </div>
          <div>
            <Fragment>
              邮箱：market@llwell.net
            </Fragment>
          </div>
          <div>
            <Fragment>
              地址： 辽宁省大连市中山区五五路港湾中心2213A
            </Fragment>
          </div>
          <div>
            <Fragment>
              辽ICP备15018646号-4
              {/* Copyright <Icon type="copyright" /> 2018 岂止科技（大连）有限公司 */}
            </Fragment>
          </div>
        </div>
     }
    />
  </Footer>
);
export default FooterView;
