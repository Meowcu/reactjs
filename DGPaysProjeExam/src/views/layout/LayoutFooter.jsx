import React from 'react'
import { Layout } from 'antd'

const { Footer: AntdFooter } = Layout;

function LayoutFooter() {
  return (<>
    <AntdFooter style={{ textAlign: 'center' }}>
      React JS Education ©2022 Created by Mehmet Emre ÖNDER
    </AntdFooter>
  </>
  )
}

export default LayoutFooter