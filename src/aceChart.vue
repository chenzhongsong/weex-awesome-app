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