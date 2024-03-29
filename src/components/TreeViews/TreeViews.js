import React from 'react';
import { Icon } from '@iconify/react';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

const styleObj = {
    
    '& .MuiTreeItem-content.Mui-selected': {
        backgroundColor:'#7367f00f',
        color: 'black',
        '&:hover': {
            backgroundColor: '#7367f02e' ,
          },
      },

    '& .MuiTreeItem-content.Mui-selected.Mui-focused':{
        backgroundColor:'#7367f02e'
    },
}

const TreeViews = () => {
  return (
    <TreeView
      defaultExpandIcon={<Icon icon='tabler:chevron-right' />}
      defaultCollapseIcon={<Icon icon='tabler:chevron-down' />}
      sx={{ minHeight: 240 }}
    >
      <TreeItem nodeId='1' label='Applications' sx={styleObj}>
        <TreeItem nodeId='2' label='Calendar' />
        <TreeItem nodeId='3' label='Chrome' />
        <TreeItem nodeId='4' label='Webstorm' />
      </TreeItem>
      <TreeItem nodeId='5' label='Documents' sx={styleObj}>
        <TreeItem nodeId='10' label='OSS' />
        <TreeItem nodeId='6' label='MUI'>
          <TreeItem nodeId='7' label='src'>
            <TreeItem nodeId='8' label='index.js' />
            <TreeItem nodeId='9' label='tree-view.js' />
          </TreeItem>
        </TreeItem>
      </TreeItem>
    </TreeView>
  );
};

export default TreeViews;
