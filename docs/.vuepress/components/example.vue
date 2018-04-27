<template>
  <div id="app">
    <alienUpload @delete-img="delImg" :url="url"  width="100%"@delete-show-img="deleteShowImg" @image-list-change="imageListChange" @count-exceed-limit="countExceedLimit" @image-upload-error="imageUploadError" :showImageList="showImageList" @upload-img-success="uploadImg" :compressQuality="compressQuality" showProgress :ProgressPercent="ProgressPercent" ref="uploadImg"></alienUpload>
    <alienUpload :url="url"  width="100%"@delete-show-img="deleteShowImg" @image-list-change="imageListChange" @count-exceed-limit="countExceedLimit" @image-upload-error="imageUploadError" :showImageList="showImageList" @upload-img-success="uploadImg" :compressQuality="compressQuality" showProgress :ProgressPercent="ProgressPercent" ref="uploadImg"></alienUpload>
  </div>
</template>

<script>
  import ValienUpload from 'alienupload'
  export default {
    name: 'app',
    data () {
      return {
        url:'http://image02.17wa.com/17wa/api/17wa-image/upload',
        imageLimit:1,
        compressQuality:.6,
        ProgressPercent:0,
        showImageList:[{name:'示例1',src:'http://otdc3q7z7.bkt.clouddn.com/146197530969E4FA88FFC41C3BA13A86.png'},{name:'示例2',src:'http://otdc3q7z7.bkt.clouddn.com/146197530969E4FA88FFC41C3BA13A86.png'}]
      }
    },
    mounted(){
      alert(ValienUpload.upload)
    },
    components:{
      'alienUpload': ValienUpload.upload,
    },
    methods:{
      delImg(img){
        alert(img);
      },
      emptyImg(){
        this.$refs.uploadImg.clearUp()
      },
      uploadImg(file,response){
         alert(file)
         alert(response)
      },
      imageUploadError(code){
        alert('图片上传出错，出错信息'+code);
      },
      countExceedLimit(type){
        if(type === 'more'){
          alert('图片上传数量超出限制数！')
        }else if(type === 'less'){
          alert('图片上传数量少于限制数！')
        }
      },
      imageListChange(file){
        alert(file)
      },
      deleteShowImg(item,index){
        alert(item)
        alert(index)
        this.showImageList.splice(index,1);
      }

    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }

</style>
