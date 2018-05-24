import './css/index.css';

window.onload = function () {

    var compareGroup = ['head200w_11_vs_head200w_19', 'head200w_19_vs_head200w_23', 'head200w_11_vs_head200w_23'];
    var data = [{
        "result": {
            "GeneIDs": [],
            "CompareGroup": "head200w_11_vs_head200w_19∩head200w_19_vs_head200w_23",
            "Count": 1195
        }
    }, {
        "result": {
            "GeneIDs": [],
            "CompareGroup": "head200w_11_vs_head200w_19",
            "Count": 1131
        }
    }, {
        "result": {
            "GeneIDs": [],
            "CompareGroup": "head200w_11_vs_head200w_19∩head200w_19_vs_head200w_23∩head200w_11_vs_head200w_23",
            "Count": 83
        }
    }, {
        "result": {
            "GeneIDs": [],
            "CompareGroup": "head200w_11_vs_head200w_19∩head200w_11_vs_head200w_23",
            "Count": 1235
        }
    }, {
        "result": {
            "GeneIDs": [],
            "CompareGroup": "head200w_19_vs_head200w_23",
            "Count": 1076
        }
    }, {
        "result": {
            "GeneIDs": [],
            "CompareGroup": "head200w_19_vs_head200w_23∩head200w_11_vs_head200w_23",
            "Count": 1184
        }
    }, {
        "result": {
            "GeneIDs": [],
            "CompareGroup": "head200w_11_vs_head200w_23",
            "Count": 1143
        }
    }];
    var data2 = [{
        "result": {
            "GeneIDs": [],
            "CompareGroup": "head200w_11_vs_head200w_19∩head200w_19_vs_head200w_23",
            "Count": 1278
        }
    }, {
        "result": {
            "GeneIDs": [],
            "CompareGroup": "head200w_11_vs_head200w_19",
            "Count": 2366
        }
    }, {
        "result": {
            "GeneIDs": [],
            "CompareGroup": "head200w_19_vs_head200w_23",
            "Count": 2260
        }
    }];
    var compareGroup2 = ['head200w_19_vs_head200w_23', 'head200w_11_vs_head200w_19']

    let flag = '';

    var oV = new Venn({ id: "venn_wrap" }).config({
        data: data,
        compareGroup: compareGroup,
        isMultipleSelect:true
    }).drawVenn()
        .hover(function () {
            this.$select.$el.setAttribute('opacity', '0.7')
        }, function () {
            this.$select.$el.setAttribute('opacity', '0')
        })
        .on('click', function () {
            console.log(this.selectCollection
            )
        })
        .lengedclick(function (ev, $select) {
            panel.style.left = (ev.pageX + 20) + 'px';
            panel.style.top = (ev.pageY - 50) + 'px';
            panel.style.display = 'block';
            flag = oV;
        });


    var oV2 = new Venn({ id: "venn_wrap2" })
        .config({
            data: data2,
            compareGroup: compareGroup2
        })
        .drawVenn()
        .on('click', function () {
            console.log(this.selectCollection
            )
        })
        .lengedclick(function (ev, $select) {
            panel.style.left = (ev.pageX + 20) + 'px';
            panel.style.top = (ev.pageY - 50) + 'px';
            panel.style.display = 'block';
            flag = oV2;
        });


    // gen color panel
    var colorPanel = [
        "rgba(255,0,0,0.2)", "rgba(255,205,51,0.2)", "rgba(255,255,51,0.2)", "rgba(168,217,115,0.2)", "rgba(51,192,115,0.2)", "rgba(51,195,243,0.2)", "rgba(51,141,205,0.2)", "rgba(51,77,128,0.2)", "rgba(141,89,179,0.2)", "rgba(0,0,0,0.2)","rgba(255,0,0,0.4)", "rgba(255,205,51,0.4)", "rgba(255,255,51,0.4)", "rgba(168,217,115,0.4)", "rgba(51,192,115,0.4)", "rgba(51,195,243,0.4)", "rgba(51,141,205,0.4)", "rgba(51,77,128,0.4)", "rgba(141,89,179,0.4)", "rgba(0,0,0,0.4)","rgba(255,0,0,0.6)", "rgba(255,205,51,0.6)", "rgba(255,255,51,0.6)", "rgba(168,217,115,0.6)", "rgba(51,192,115,0.6)", "rgba(51,195,243,0.6)", "rgba(51,141,205,0.6)", "rgba(51,77,128,0.6)", "rgba(141,89,179,0.6)", "rgba(0,0,0,0.6)","rgba(255,0,0,0.8)", "rgba(255,205,51,0.8)", "rgba(255,255,51,0.8)", "rgba(168,217,115,0.8)", "rgba(51,192,115,0.8)", "rgba(51,195,243,0.8)", "rgba(51,141,205,0.8)", "rgba(51,77,128,0.8)", "rgba(141,89,179,0.8)", "rgba(0,0,0,0.8)"
    ];

    let panel = document.querySelector('.colorPanel');
    let curColor = '';
    for (let i = 0; i < colorPanel.length; i++) {
        let oli = document.createElement('li');
        oli.style.backgroundColor = colorPanel[i];
        oli.onclick = function (ev) {
            curColor = this.style.backgroundColor;
            flag.setColor(curColor);
            flag.update();
            panel.style.display = 'none';
        }
        panel.appendChild(oli);
    }

    document.onclick = function () {
        panel.style.display = 'none';
    }
    var flag2 = false;
    document.getElementById('btn').onclick = function () {
        if (flag2) {
            oV.showLabel();
            flag2 = false;
        } else {
            oV.hideLabel();
            flag2 = true;
        }

    }


}