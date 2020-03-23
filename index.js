// 表格
var dataObject = [
    ['Java','1','降','-0.01%'],
    ['C','2','升','+2.24%'],
    ['Python','3','升','+1.41%'],
    ['C++','4','降','-2.58%'],
    ['C#','5','升','-2.07%'],
    ['Visual Basic .NET','6','降','-1.17%'],
    ['JavaScript','7','降','-0.85%']
];
var hotElement = document.getElementById('h');
var hotSettings = {
    data:dataObject,
    colHeaders:['语言名称','排名','升或降','变化幅度'],
    className: 'htCenter htMiddle',
    manualRowMove: true,  
    manualColumnMove: true,  
    autoColumnSize:true,
    manualRowResize:true,  
    manualColumnResize:true,
    colWidths: 200, 
    rowHeights: 35, 
}
var hot = new Handsontable(hotElement,hotSettings);

// 统计图
var myChart = echarts.init(document.getElementById('e'));
var option = {
    title:{
        text:'JavaScript语言排名变化'
    },
    tooltip:{
        trigger:'axis'
    }, 
    legend:{
        data:['排名']
    },
    xAxis:{
        data:[2000,2005,2010,2015,2020]
    },
    yAxis:{},
    series:[{
        name:'排名',
        type:'line',
        data:[6,9,8,8,7]
    }],
};
myChart.setOption(option);