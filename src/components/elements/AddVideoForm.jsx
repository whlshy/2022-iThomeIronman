import React, { useState } from 'react'
import {
  Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@mui/material';


export default function AddVideoForm(props) {
  const { handleClose, open, handleSummit } = props

  const [form, setForm] = useState({ v: null, title: null })

  const onChangeForm = (name, value) => {
    setForm({ ...form, [name]: value })
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>新增影片</DialogTitle>
      <DialogContent>
        <DialogContentText>
          請輸入YouTube影片的ID與影片標題
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="v"
          label="YouTube ID (v)"
          type="text"
          fullWidth
          variant="standard"
          onChange={event => onChangeForm('v', event.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="標題"
          type="text"
          fullWidth
          variant="standard"
          onChange={event => onChangeForm('title', event.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>取消</Button>
        <Button onClick={() => handleSummit(form)} disabled={!form.v || !form.title}>確認</Button>
      </DialogActions>
    </Dialog>
  )
}
