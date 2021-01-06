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





<!--
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
-->






<!--
<template>
  <div class="mu-demo">
    <scroller class="scroller">
       自动获取焦点的文本输入框 
      <text class="text">基础用法</text>
      <input  />
    </scroller>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({
    textValue: "",
    autofocus: false,
  }),
  mounted() {
    this.autofocus = true;
  },
  watch: {
    textValue4(val) {
      this.$MuToast.info({ message: val });
    },
  },
  methods: {
    onInput(val) {
      console.log(val);
    },
  },
};
</script>
<style scoped>
.mu-input {
  height: 100px;
  background-color: #ffffff;
}

.mu-demo {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  /* background-color: #ffffff; */
  background-color: #ffffff;
}

.mu-div {
  flex-direction: row;
}

.text {
  padding-top: 20px;
  /* padding-left: 20px; */
  padding-bottom: 20px;
  font-size: 28px;
  color: #777777;
  /* background-color: #eeeeee; */
}

.scroller {
  flex: 1;
  padding: 20px;
}

.demo {
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
}

.button-size-text {
  margin-left: 24px;
  margin-bottom: 24px;
  margin-top: 40px;
}
</style>
-->




<!--
<template>
  <weex-ace-chart :option="option" class="chart"></weex-ace-chart>
</template>

<style scoped>
.chart {
  height: 400px;
  width: 750px;
}
</style>

<script>
import WeexAceChart from "weex-acechart-js";

export default {
  components: { WeexAceChart },
  computed: {
    option: function() {
      return {
        enableDataDecoratorAnimation: true,
        enableGestureSimultaneously: true,
        tooltip: {
          hidden: true
        },
        xAxises: [
          {
            xCategories: ["name0", "name1", "name2"]
          }
        ],
        legend: {
          hidden: false
        },
        series: [
          {
            displayLegend: true,
            name: "test1",
            type: "pie",
            displayJoint: true,
            colors: [
              "#ec9900",
              "#9b59b6",
              "#2ecc71",
              "#3498db",
              "#e74c3c",
              "#e67e22",
              "#f1c40f"
            ],
            points: [[5, 5, 5]],
            innerRatio: 0.9,
            outterRatio: 0.6,
            indicators: {
              style: "around",
              data: [
                {
                  text: "abc",
                  desc: "456",
                  lineWidth: 10
                },
                {
                  text: "abc",
                  desc: "456"
                },
                {
                  text: "abc",
                  desc: "456",
                  lineColor: "blue"
                }
              ]
            }
          }
        ]
      };
    }
  }
};
</script>
-->







<template>
  <weex-ace-chart :option="option" class="chart"></weex-ace-chart>
</template>

<style scoped>
.chart {
  height: 700px;
  width: 750px;
}
</style>

<script>
import WeexAceChart from "weex-acechart-js";

export default {
  components: { WeexAceChart },
  computed: {
    option: function() {
      return {
        "enableDataDecoratorAnimation": true,
        "enableGestureSimultaneously": true,
        "tooltip": {
          // "jointShadowSize": 0.01,
          // "jointSize": 10,
          hidden: true,
        },
        "xAxises": [{ // 最多三个，三个时候 下下上
          "xCategories": (() => {
              let r = [];
              for (let i = 0; i < 3; i++) {
                  r.push('name' + i);
              }
              return r;
          })(), //["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        }],
        "legend": {
          hidden: false
        },
        "series": [{
            displayLegend: true,
            "name": 'test1',
            "type": 'pie', // => 'line', 'bar', 'scatter', 'stackline', 'stackbar'
            "displayJoint": false,
            "isClockwise": true,
            "colors": ['#ec9900', '#9b59b6', '#2ecc71', '#3498db', '#e74c3c', '#e67e22', '#f1c40f'],
            "points": [
                (() => {
                    let r = [];
                    for (let i = 0; i < 3; i++) {
                        if (i < 3) {
                            r.push(5);
                        } else if (i < 7) {
                            r.push(5);
                        } else r.push(99);
                    }
                    return r;
                })()
            ],
            "innerRatio": 0.9,
            "outterRatio": 0.6,
            indicators: {
                style: 'around',
                data: [{
                    text: 'abc1',
                    desc: '456',
                    lineWidth: 10,
                }, {
                    text: 'abc2',
                    desc: '456'
                }, {
                    text: 'abc3',
                    desc: '456',
                    lineColor: 'blue'
                }, ]
            }
            // startAngle iOS处理从顶部开始
            // clockWise  顺时针
        }]
      };
    }
  }
};
</script>