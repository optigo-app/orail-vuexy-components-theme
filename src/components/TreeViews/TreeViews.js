import React from 'react';
import { Icon } from '@iconify/react';
import { TreeView } from '@mui/x-tree-view/TreeView/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem/TreeItem';
import { styled } from '@mui/system';

const StyledTreeItem = styled(TreeItem)(() => ({
    '& .MuiTreeItem-content.Mui-selected': {
      backgroundColor:'#7367f030',
      color: '#2f2b3dc7',
      '&:hover': {
        backgroundColor: `#7367f030` ,
      },
    },
  }));

const styleObj = {
    '& .MuiTreeItem-content.Mui-selected': {
        backgroundColor:'#7367f030',
        color: 'black',
        '&:hover': {
          backgroundColor: '#7367f030' ,
        },
      },
    '& .Mui-focused':{
        backgroundColor:'#7367f030'
    },
    // '& .Mui-expanded':{
    //     backgroundColor:'#7367f030'
    // }
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
