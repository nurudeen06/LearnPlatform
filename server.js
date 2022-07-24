const express = require('express')
const path = require('path')
const server = express()

server.use(express.static(path.join(__dirname+'/public')))
server.use(express.static(path.join(__dirname+'/private')))
 server.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/public/html/index.html'))
 })
 server.get('/home',(req,res)=>{
    res.send("ok")
 })

 /*
   Below Routings are for Registered users

   i.e Private Folder
 */
 server.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname+'/private/view/login.html'))
 })
 server.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname+'/private/view/register.html'))
 })
 server.get('/dashboard',(req,res)=>{
    res.sendFile(path.join(__dirname+'/private/view/dashboard.html'))
 })
 server.get('/courses',(req,res)=>{
   res.sendFile(path.join(__dirname+'/private/view/courses.html'))
 })
 server.get('/exam',(req,res)=>{
   res.sendFile(path.join(__dirname+'/private/view/exam.html'))
 })
server.listen(1010,()=> console.log("Server Up and Running"))