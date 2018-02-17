webpackJsonp([9],{Y7vv:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getInfo=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return Object(r.a)({url:"/api/classTeacher",method:"get",params:{pageSize:a,page:t,session_id:e.session_id,teacher_id:e.teacher_id,grade:e.grade}})},t.getInfoById=function(e){return Object(r.a)({url:"/api/classTeacher/"+e,method:"get"})},t.updateInfo=function(e,t){return Object(r.a)({url:"/api/classTeacher/"+e,method:"patch",data:{teacher_id:t.teacher_id,leader_type:t.leader_type,grade:t.grade,class_id:t.class_id,remark:t.remark}})},t.addInfo=function(e){return Object(r.a)({url:"/api/classTeacher",method:"post",data:e})},t.deleteInfoById=function(e){return Object(r.a)({url:"/api/classTeacher/"+e,method:"delete"})},t.uploadFile=function(e){return Object(r.a)({url:"/api/classTeacher/upload",method:"post",data:e,headers:{"Content-Type":"multipart/form-data"}})},t.exportCurrentPage=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Object(r.a)({url:"/api/classTeacher/export",method:"post",data:{page:t,pageSize:e,session_id:a.session_id,teacher_id:a.teacher_id,grade:a.grade}})},t.exportAll=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r.a)({url:"/api/classTeacher/exportAll",method:"post",data:{session_id:e.session_id,teacher_id:e.teacher_id,grade:e.grade}})},t.deleteAll=function(e){return Object(r.a)({url:"/api/classTeacher/deleteAll",method:"post",data:{ids:e}})},t.Model=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,d=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;this.session_id=e,this.teacher_id=t,this.grade=a,this.class_id=r,this.remark=d},t.SearchModel=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.session_id=e,this.teacher_id=t,this.grade=a};var r=a("Vo7i")}});