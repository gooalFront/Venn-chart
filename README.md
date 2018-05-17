### Venn  [![Build Status](https://travis-ci.org/YeahPotato/Venn.svg?branch=master)](https://travis-ci.org/YeahPotato/Venn)      
Demo `http:/yeahpotato.github.io/Venn`

#### start
`git clone git@54.223.70.246:yangwd/Venn-chart.git`   

`cd Venn-chart`         

`npm i`         

-dev: `npm run dev`         

-build:`npm run build`          
    

#### usage

```javascript
    var data2 = [
        {
            "result": {
                "GeneIDs": [],
                "CompareGroup": "head200w_11_vs_head200w_19∩head200w_19_vs_head200w_23",
                "Count": 1278
            }
        }, 
        {
            "result": {
                "GeneIDs": [],
                "CompareGroup": "head200w_11_vs_head200w_19",
                "Count": 2366
                }
        }, 
        {
            "result": {
                "GeneIDs": [],
                "CompareGroup": "head200w_19_vs_head200w_23",
                "Count": 2260
            }
        }
    ];

    var compareGroup2 = [
            'head200w_19_vs_head200w_23',
            'head200w_11_vs_head200w_19'
        ]



    var oV2 = new Venn({ id: "venn_wrap2" })
        .config({
            data: data2,
            compareGroup: compareGroup2
        }).drawVenn().lengedclick(function (ev, $select) {
            panel.style.left = (ev.pageX + 20) + 'px';
            panel.style.top = (ev.pageY - 50) + 'px';
            panel.style.display = 'block';
            flag = oV2;
        });

```

#### API
___

`config` 设置venn图的基本数据   
- `data {Array}`: venn 图数据
- `compareGroup {Array}`: venn图比较组

`setColor` 设置Venn图的颜色
- `colors {Array/String}` :颜色数组/颜色值

`hover` 鼠标hover行为 （回调函数里的this.$select代表当前选中的元素信息 ）
- `enter {Function}`  
- `out {Function}`   

`update` 更新视图 涉及到颜色的改变，可直接`update`更新，无需重画

`lengedclick` 图例点击事件
- `fn {Function}` 点击事件回调函数
- `fn(ev,$select)` 事件对象/当前点击的元素

`drawVenn` 画venn图
- 必须先`config`



