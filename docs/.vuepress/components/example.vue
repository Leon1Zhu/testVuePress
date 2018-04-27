<template>
  <div id="app">
    <alienUpload width="50%"@delete-show-img="deleteShowImg" @image-list-change="imageListChange" @count-exceed-limit="countExceedLimit" @image-upload-error="imageUploadError" :showImageList="showImageList" @upload-img="uploadImg" :compressQuality="compressQuality" showProgress :ProgressPercent="ProgressPercent" ref="uploadImg"></alienUpload>
  </div>
</template>

<script>
  import ValienUpload from 'alienupload'
  export default {
    name: 'app',
    data () {
      return {
        compressQuality:.6,
        ProgressPercent:0,
        showImageList:[{name:'示例1',src:'http://otdc3q7z7.bkt.clouddn.com/146197530969E4FA88FFC41C3BA13A86.png'},{name:'示例2',src:'http://otdc3q7z7.bkt.clouddn.com/146197530969E4FA88FFC41C3BA13A86.png'}]
      }
    },
    mounted(){

    },
    components:{
      alienUpload: ValienUpload,
    },
    methods:{
      emptyImg(){
        this.$refs.uploadImg.clearUp()
      },
      uploadImg(fileList){
        let len = fileList.length,
          that = this,
          onrProgress = (1/len).toFixed(2)*100;
        fileList.map(function(item,index){
          /*goodsManageApi.picUplaod(item).then(response=>{
           index === len-1 ? that.ProgressPercent1=100 :that.ProgressPercent1 += onrProgress;
           that.formItem.productPic = response.data.message
           })*/
          //模仿上传的回调
          let indexTemp = index;
          let timer = setTimeout(function(){
            that.ProgressPercent= indexTemp === len-1 ? 100 :that.ProgressPercent += onrProgress;
            if(that.ProgressPercent === 100 ){
              console.log('上传完成')
              //清空待上传数组
              setTimeout(() => {
                that.$refs.uploadImg.clearUp()
              },2000)
            }
            clearTimeout(timer)
          },400 * (indexTemp+1))

        })
      },
      imageUploadError(code){
        console.log('图片上传出错，出错信息'+code);
      },
      countExceedLimit(type){
        if(type === 'more'){
          console.log('图片上传数量超出限制数！')
        }else if(type === 'less'){
          console.log('图片上传数量少于限制数！')
        }
      },
      imageListChange(file){
        console.log(file)
      },
      deleteShowImg(item,index){
        console.log(item)
        console.log(index)
        this.showImageList.splice(index,1);
      }

    }
  }
</script>

<style>


</style>
