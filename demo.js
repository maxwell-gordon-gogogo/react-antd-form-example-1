import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, Button, Radio } from 'antd';

const FormLayoutDemo = () => {
  const formItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 14,
    },
  };
  const buttonItemLayout = {
    wrapperCol: {
      span: 14,
      offset: 4,
    },
  };
  return (
    <Form {...formItemLayout}>
      <Form.Item label="选择创建方式：" name="layout">
        <Radio.Group value={formLayout}>
          <Radio.Button value="horizontal">创建空模式</Radio.Button>
          <Radio.Button value="vertical">从文件加载</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Field A">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Field B">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default () => <FormLayoutDemo />;
