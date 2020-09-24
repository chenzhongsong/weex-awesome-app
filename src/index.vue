<!--
<template>
  <div class="wrapper">
    <image :src="logo" class="logo" />
    <text class="greeting">The environment is ready!</text>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  }
}
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 424px;
    height: 200px;
  }
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
 </style>
-->

<template>
        <div class="container"  >
        <scroller  class ='scroller'  :style="{height:this.hei+'px',width:750+'px'}">
                <image  class="appIcon"  :src="appIconUrl"></image>
                <text style="font-size: 100px">朱军华 大笨蛋 去抽烟不叫我</text>



        </scroller>
        </div>
</template>

<script>

    export default {
        name: "wtappstoretest",

        data: () => ({
            hei:1600,
            appIconUrl:'https://pic.17qq.com/uploads/ccaaqaaqqx.jpeg',

        }),
        created() {
          //  this.hei = Utils.env.getPageHeight();
            const self = this
        },
        methods:{


        },

    }
</script>

<style >
        .container {
                background-color:red;
                top: 0;
                right: 0;
                left: 0;
                bottom: 0;
        }
    .scroller {
        background-color: red;


    }
    .appIcon{
            background-color: yellow;
            width: 200px;
            height: 200px;
            margin-left: 40px;
            margin-top: 50px;
            border-width: 1px;
            border-color: white;
            border-radius: 30px;
    }

</style>