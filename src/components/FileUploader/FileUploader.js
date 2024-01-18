import { Box, Button, Grid, IconButton, List, ListItem, Typography } from '@mui/material'
import React, { Fragment, useState } from 'react'
import IconifyIcon from '../icon'
import { useDropzone } from 'react-dropzone'
import './FileUploader.css'

export default function FileUploader() {

    const [files, setFiles] = useState([])
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file)))
        }
    })
    const renderFilePreview = file => {
        if (file.type.startsWith('image')) {
            return <img width={38} height={38} alt={file.name} src={URL.createObjectURL(file)} />
        } else {
            return <IconifyIcon icon='tabler:file-description' />
        }
    }
    const handleRemoveFile = file => {
        const uploadedFiles = files
        const filtered = uploadedFiles.filter(i => i.name !== file.name)
        setFiles([...filtered])
    }

    const fileList = files.map(file => (
        <ListItem key={file.name}>
            <div className='file-details'>
                <div className='file-preview'>{renderFilePreview(file)}</div>
                <div>
                    <Typography className='file-name'>{file.name}</Typography>
                    <Typography className='file-size' variant='body2'>
                        {Math.round(file.size / 100) / 10 > 1000
                            ? `${(Math.round(file.size / 100) / 10000).toFixed(1)} MB`
                            : `${(Math.round(file.size / 100) / 10).toFixed(1)} KB`}
                    </Typography>
                </div>
            </div>
            <IconButton onClick={() => handleRemoveFile(file)}>
                <IconifyIcon icon='tabler:x' fontSize={20} />
            </IconButton>
        </ListItem>
    ))
    const handleRemoveAllFiles = () => {
        setFiles([])
    }


    const [files2, setFiles2] = useState([]);
    const { getRootProps: getRootProps2, getInputProps: getInputProps2 } = useDropzone({
        multiple: false,
        accept: {
            'image/*': ['.png', '.jpg', '.jpeg', '.gif']
        },
        onDrop: acceptedFiles => {
            setFiles2(acceptedFiles.map(file => Object.assign(file)));
        }
    });
    const img = files2.map(file => (
        <img key={file.name} alt={file.name} className='single-file-image' src={URL.createObjectURL(file)} />
    ))


    const [files3, setFiles3] = useState([])
    const { getRootProps: getRootProps3, getInputProps: getInputProps3 } = useDropzone({
        maxFiles: 2,
        maxSize: 2000000,
        accept: {
            'image/*': ['.png', '.jpg', '.jpeg', '.gif']
        },
        onDrop: acceptedFiles => {
            setFiles3(acceptedFiles.map(file => Object.assign(file)))
        },
        onDropRejected: () => {
            alert('You can only upload 2 files & maximum size of 2 MB.', {
                duration: 2000
            })
        }
    })

    const renderFilePreview2 = file => {
        if (file.type.startsWith('image')) {
            return <img width={38} height={38} alt={file.name} src={URL.createObjectURL(file)} />
        } else {
            return <IconifyIcon icon='tabler:file-description' />
        }
    }

    const handleRemoveFile2 = file => {
        const uploadedFiles = files3
        const filtered = uploadedFiles.filter(i => i.name !== file.name)
        setFiles3([...filtered])
    }

    const fileList2 = files3.map(file => (
        <ListItem key={file.name}>
            <div className='file-details'>
                <div className='file-preview'>{renderFilePreview2(file)}</div>
                <div>
                    <Typography className='file-name'>{file.name}</Typography>
                    <Typography className='file-size' variant='body2'>
                        {Math.round(file.size / 100) / 10 > 1000
                            ? `${(Math.round(file.size / 100) / 10000).toFixed(1)} MB`
                            : `${(Math.round(file.size / 100) / 10).toFixed(1)} KB`}
                    </Typography>
                </div>
            </div>
            <IconButton onClick={() => handleRemoveFile2(file)}>
                <IconifyIcon icon='tabler:x' fontSize={20} />
            </IconButton>
        </ListItem>
    ))

    const handleRemoveAllFiles2 = () => {
        setFiles3([])
    }

    return (
        <Grid className='match-height' container columns={16} sx={{ marginY: 5, padding: "0 !important", display: 'flex', justifyContent: 'center' }} >
            <Grid item xs={13}>
                <Box sx={{ boxShadow: 3, borderRadius: 1, padding: 2 }} m={2}>
                    <Box sx={{ fontSize: "18px", fontWeight: 400, padding: 2 }}>Upload Multiple Files</Box>
                    <Fragment>
                        <div {...getRootProps({ className: 'dropzone' })}>
                            <input {...getInputProps()} />
                            <Box sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <Box
                                    sx={{
                                        mb: 8.75,
                                        width: 48,
                                        height: 48,
                                        display: 'flex',
                                        borderRadius: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: theme => 'rgba(47, 43, 61, 0.08)'
                                    }}
                                >
                                    <IconifyIcon icon='tabler:upload' fontSize='1.75rem' />
                                </Box>
                                <Typography variant='h4' sx={{ mb: 2.5 }}>
                                    Drop files here or click to upload.
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>
                                    (This is just a demo drop zone. Selected files are not actually uploaded.)
                                </Typography>
                            </Box>
                        </div>
                        {files.length ? (
                            <Fragment>
                                <List>{fileList}</List>
                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <Button color='error' variant='outlined' onClick={handleRemoveAllFiles}
                                        style={{
                                            margin: '5px',
                                            fontWeight: 600
                                        }}
                                    >
                                        Remove All
                                    </Button>
                                    <Button variant='contained'
                                        style={{
                                            margin: '5px',
                                            fontWeight: 600

                                        }}>Upload Files</Button>
                                </div>
                            </Fragment>
                        ) : null}
                    </Fragment>
                </Box>
            </Grid>

            <Grid item xs={13}>
                <Box {...getRootProps2({ className: 'dropzone' })} sx={files2.length ? { boxShadow: 3, borderRadius: 1, padding: 2 } : { boxShadow: 3, borderRadius: 1, padding: 2 }}>
                    <Box sx={{ fontSize: "18px", fontWeight: 400, padding: 2 }}>Upload Single Files</Box>

                    <input {...getInputProps2()} />
                    {files2.length ? (
                        <Box sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            {img}
                        </Box>
                    ) : (
                        <Box sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <Box
                                sx={{
                                    mb: 8.75,
                                    width: 48,
                                    height: 48,
                                    display: 'flex',
                                    borderRadius: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: theme => 'rgba(47, 43, 61, 0.08)'
                                }}
                            >
                                <IconifyIcon icon='tabler:upload' fontSize='1.75rem' />
                            </Box>
                            <Typography variant='h4' sx={{ mb: 2.5 }}>
                                Drop files here or click to upload.
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>
                                (This is just a demo drop zone. Selected files are not actually uploaded.)
                            </Typography>
                        </Box>
                    )}
                </Box>
            </Grid>

            <Grid item xs={13}>
                <Box {...getRootProps3({ className: 'dropzone' })} sx={files3.length ? { boxShadow: 3, borderRadius: 1, padding: 2 } : { boxShadow: 3, borderRadius: 1, padding: 2 }}>
                    <Box sx={{ fontSize: "18px", fontWeight: 400, padding: 2 }}>Upload Files with Restrictions</Box>

                    <Fragment>
                        <div {...getRootProps3({ className: 'dropzone' })}>
                            <input {...getInputProps3()} />
                            <Box sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <Box
                                    sx={{
                                        mb: 8.75,
                                        width: 48,
                                        height: 48,
                                        display: 'flex',
                                        borderRadius: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: theme => 'rgba(47, 43, 61, 0.08)'
                                    }}
                                >
                                    <IconifyIcon icon='tabler:upload' fontSize='1.75rem' />
                                </Box>
                                <Typography variant='h4' sx={{ mb: 2.5 }}>
                                    Drop files here or click to upload.
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>Allowed *.jpeg, *.jpg, *.png, *.gif</Typography>
                                <Typography sx={{ color: 'text.secondary' }}>Max 2 files and max size of 2 MB</Typography>
                            </Box>
                        </div>
                        {files3.length ? (
                            <Fragment>
                                <List>{fileList2}</List>
                                <div className='buttons'>
                                    <Button color='error' variant='outlined' onClick={handleRemoveAllFiles2}>
                                        Remove All
                                    </Button>
                                    <Button variant='contained'>Upload Files</Button>
                                </div>
                            </Fragment>
                        ) : null}
                    </Fragment>
                </Box>
            </Grid>
        </Grid>
    )
}
