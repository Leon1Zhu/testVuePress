
## 方法

## count-exceed-limit
- **方法说明:**
  * 图片超出限制函数，返回参数为more表示超过限制，为less表示小于限制
- **返回值:**
  * exceedType

## image-upload-error
- **方法说明:**
  * 图片加入待上传数组出错
- **返回值:**
  * errorCode
  
## upload-img
- **方法说明:**
  * 上传图片，用户点击上传按钮触发，返回当前待上传图片数组
- **返回值:**
  * files数组
  
## image-list-change
- **方法说明:**
  * 每成功添加一张图片到待上传数组便会触发此回调
- **返回值:**
  * 添加到数组的file对象
  
## delete-img
- **方法说明:**
  * 删除图片回调
- **返回值:**
  * 删除的图片的file对象
  
## upload-img-success
- **方法说明:**
  * 单张图片上传成功回调
- **返回值:**
  * 请求返回的response
  
## upload-img-error
- **方法说明:**
  * 单张图片上传失败
- **返回值:**
  * 请求返回的response
  
## delete-show-img
- **方法说明:**
  * 添加的展示数组中用户点击删除其中的图片时触发的回调
- **返回值:**
  * item,index
  
  
  
  
  
  ``` js {4}
  this.$refs.alienupload.uploadImg()//触发上传文件
  this.$refs.alienupload.clearUp()//清空队列文件
  ```
