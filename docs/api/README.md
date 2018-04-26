## url
- **属性说明:**
  * 文件上传地址的配置项
- **类型:**
  * String
- **默认值:**
  * ' '

## width
- **属性说明:**
  * 组件宽度
- **类型:**
  * String
- **默认值:**
  * 100%  

## compressQuality
- **属性说明:**
  * 文件压缩质量（0.1-1）1表示不压缩
- **类型:**
  * Number
- **默认值:**
  * 1 

## limitSize
- **属性说明:**
  * 文件压缩的限制，大于这个尺寸开始压缩(单位KB)
- **类型:**
  * Number
- **默认值:**
  * 1024 

## uploadType
- **属性说明:**
  * click表示使用点选，drag表示拖拽，all表示两个都使用
- **类型:**
  * String
- **默认值:**
  * all 

## imageLimit
- **属性说明:**
  * 图片上传数量最大限制，默认不限制,超出限制将无法上传
- **类型:**
  * Number
- **默认值:**
  * 0 

## imageMinLimit
- **属性说明:**
  * 图片最小上传数量(默认不限制)，低于限制无法提交
- **类型:**
  * Number
- **默认值:**
  * 0   

## showProgress
- **属性说明:**
  * 是否显示进度条
- **类型:**
  * Boolean
- **默认值:**
  * true  

## progressColor
- **属性说明:**
  * 进度条颜色
- **类型:**
  * Number
- **默认值:**
  * '#2d8cf0'  

## BtnColor
- **属性说明:**
  * 按钮颜色
- **类型:**
  * String
- **默认值:**
  * '#2d8cf0' 

## showImageList
- **属性说明:**
  * 需要展示的图片数组，如果有图片需要进行展示，直接传入该数组([{name:X,src:XX}])
- **类型:**
  * Array
- **默认值:**
  * [] 

## showImageListLimit
- **属性说明:**
  * 传入的展示图片数组是否算入限制数量
- **类型:**
  * Boolean
- **默认值:**
  * true 
  
## multiple
- **属性说明:**
  * 是否支持文件多选
- **类型:**
  * Boolean
- **默认值:**
  * true

## requestOption
- **属性说明:**
  * 请求方法配置
- **类型:**
  * Object
- **默认值:**
  * { formData:{}, headers:{}, responseType:'json' }
